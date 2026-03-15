import { Object3D, Scene } from 'three';
import { Pane, ButtonApi, FolderApi } from 'tweakpane';

type ObjectSelectionHandler = (obj: Object3D) => void;

export class SceneHierarchyPanel {
  readonly pane: Pane;
  lightsFolder!: FolderApi;
  buttons: Map<Object3D, ButtonApi> = new Map();
  selectedObject: Object3D | null = null;

  private currentScene: Scene | null = null;
  private searchElement: HTMLInputElement;
  private folderObjects: Set<Object3D> = new Set();

  private get searchQuery(): string {
    return this.searchElement.value.trim();
  }

  constructor(container: HTMLElement, private onSelectionChange: ObjectSelectionHandler) {
    this.pane = new Pane({ container, title: 'Scene Tree' });
    this.searchElement = this.createSearchElement();
  }

  private createSearchElement(): HTMLInputElement {
    const searchElement = document.createElement('input');
    searchElement.type = 'text';
    searchElement.placeholder = 'Search...';
    searchElement.className = 'scene-tree-search';

    searchElement.addEventListener('input', () => {
      if (this.currentScene) {
        this.rebuildTree();
      }
    });

    const titleBtn = this.pane.element.querySelector('.tp-rotv_b')!;
    titleBtn.insertAdjacentElement('afterend', searchElement);

    return searchElement;
  }

  refresh(scene: Scene): void {
    this.currentScene = scene;
    this.rebuildTree();
  }

  selectObject(obj: Object3D): void {
    this.selectedObject = obj;
    this.updateSelectionIndicator();
    this.onSelectionChange(obj);
  }

  dispose(): void {
    this.searchElement.remove();
    this.pane.dispose();
  }

  private rebuildTree(): void {
    this.buttons.clear();
    this.folderObjects.clear();

    while (this.pane.children.length > 0) {
      this.pane.children[0].dispose();
    }

    if (!this.currentScene) return;

    this.lightsFolder = this.pane.addFolder({ title: 'Lights' });
    this.buildHierarchy(this.currentScene, this.pane);

    if (this.lightsFolder.children.length === 0) {
      this.lightsFolder.dispose();
    }

    this.updateSelectionIndicator();
  }

  private buildHierarchy(obj: Object3D, parent: Pane | FolderApi): void {
    if (this.shouldSkipObject(obj)) return;
    if (this.searchQuery && !this.objectOrDescendantMatches(obj)) return;

    const allChildren = this.getChildrenArray(obj);
    const visibleChildren = this.searchQuery
      ? allChildren.filter(c => !this.shouldSkipObject(c) && this.objectOrDescendantMatches(c))
      : allChildren;

    const label = this.createLabel(obj);

    if (visibleChildren.length > 0) {
      const expanded = this.searchQuery ? true : obj.type !== 'Bone';
      this.createFolderNode(obj, parent, label, visibleChildren, expanded);
    } else {
      this.createLeafNode(obj, parent, label);
    }
  }

  private objectOrDescendantMatches(obj: Object3D): boolean {
    if (this.matchesSearch(obj)) return true;
    return obj.children.some(c => this.objectOrDescendantMatches(c));
  }

  private matchesSearch(obj: Object3D): boolean {
    return this.createLabel(obj).toLowerCase().includes(this.searchQuery.toLowerCase());
  }

  private shouldSkipObject(obj: Object3D): boolean {
    return obj.name === '__inspector_bounding_box__';
  }

  private getChildrenArray(obj: Object3D): Object3D[] {
    const children = (obj as Object3D).children;
    return children ? [...children] : [];
  }

  private createFolderNode(obj: Object3D, parent: Pane | FolderApi, label: string, childrenArray: Object3D[], expanded: boolean): void {
    const folder = parent.addFolder({ title: label, expanded });
    const titleButton = folder.element.querySelector('.tp-fldv_b');
    const arrow = folder.element.querySelector('.tp-fldv_m');

    titleButton?.addEventListener('click', (e) => {
      if (!this.isArrowClick(e.target as HTMLElement, arrow)) {
        e.stopPropagation();
        e.preventDefault();
        this.selectObject(obj);
      }
    }, true);

    // Creates a pseudo-button object for folders to unify storage with leaf buttons.
    // This allows the selection system to treat both folders and leaf nodes uniformly.
    this.buttons.set(obj, { title: label, element: folder.element } as any);
    this.folderObjects.add(obj);

    for (const child of childrenArray) {
      this.buildHierarchy(child, folder);
    }
  }

  private isArrowClick(target: HTMLElement, arrow: Element | null): boolean {
    return arrow !== null && (
      target === arrow ||
      arrow.contains(target) ||
      target.closest('.tp-fldv_m') === arrow
    );
  }

  private createLeafNode(obj: Object3D, parent: Pane | FolderApi, label: string): void {
    const folder = ('isLight' in obj && obj.isLight) ? this.lightsFolder : parent;
    const button = folder.addButton({ title: label });
    button.on('click', () => this.selectObject(obj));
    this.buttons.set(obj, button);
  }

  private createLabel(obj: Object3D): string {
    const type = obj.constructor.name.replace(/_/g, '');
    const name = obj.name || '';
    return name ? `${name} (${type})` : type;
  }

  private updateSelectionIndicator(): void {
    this.buttons.forEach((button, obj) => {
      const isFolder = this.folderObjects.has(obj);
      const buttonElement = isFolder
        ? button.element.querySelector('.tp-fldv_b')
        : this.findLeafButtonElement(button.element);

      const isSelected = this.selectedObject === obj;
      buttonElement?.classList.toggle('scene-tree-selected', isSelected);
    });
  }

  private findLeafButtonElement(element: HTMLElement): HTMLElement | null {
    let buttonElement = element.querySelector('.tp-btnv_b');
    if (!buttonElement) {
      buttonElement = element.querySelector('button');
    }
    if (!buttonElement && element.classList?.contains('tp-btnv')) {
      buttonElement = (element.querySelector('.tp-btnv_b') || element);
    }
    return buttonElement as HTMLElement;
  }
}
