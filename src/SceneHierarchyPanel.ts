import { Object3D, Scene } from 'three';
import { Pane, ButtonApi, FolderApi } from 'tweakpane';

type ObjectSelectionHandler = (obj: Object3D) => void;

export class SceneHierarchyPanel {
  readonly pane: Pane;
  lightsFolder!: FolderApi;
  buttons: Map<Object3D, ButtonApi> = new Map();
  selectedObject: Object3D | null = null;

  constructor(container: HTMLElement, private onSelectionChange: ObjectSelectionHandler) {
    this.pane = new Pane({ container, title: 'Scene Tree' });
  }

  refresh(scene: Scene): void {
    this.buttons.clear();

    // Remove all children from pane
    while (this.pane.children.length > 0) {
      this.pane.children[0].dispose();
    }

    this.lightsFolder = this.pane.addFolder({ title: 'Lights '});

    this.buildHierarchy(scene, this.pane);
    this.updateSelectionIndicator();
  }

  selectObject(obj: Object3D): void {
    this.selectedObject = obj;
    this.updateSelectionIndicator();
    this.onSelectionChange(obj);
  }

  dispose(): void {
    this.pane.dispose();
  }

  private buildHierarchy(obj: Object3D, parent: Pane | FolderApi): void {
    if (this.shouldSkipObject(obj)) {
      return;
    }

    const childrenArray = this.getChildrenArray(obj);
    const label = this.createLabel(obj);

    if (childrenArray.length > 0) {
      this.createFolderNode(obj, parent, label, childrenArray);
    } else {
      this.createLeafNode(obj, parent, label);
    }
  }

  private shouldSkipObject(obj: Object3D): boolean {
    return obj.name === '__inspector_bounding_box__';
  }

  private getChildrenArray(obj: Object3D): Object3D[] {
    const children = (obj as Object3D).children;
    return children ? [...children] : [];
  }

  private createFolderNode(obj: Object3D, parent: Pane | FolderApi, label: string, childrenArray: Object3D[]): void {
    const expanded = obj.type !== 'Bone';
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
      const buttonElement = this.getChildrenArray(obj).length > 0 
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
