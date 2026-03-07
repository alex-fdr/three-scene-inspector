import { Pane, FolderApi } from 'tweakpane';
import { CATEGORIES } from './properties';
import { PropertyBinder } from './PropertyBinder';
import { Object3D } from 'three';
import * as TweakpanePluginMedia from 'tweakpane-plugin-media';

export class PropertyInspectorPanel {
  readonly pane: Pane;
  folders: Map<string, FolderApi> = new Map();
  selectedObject: Object3D | null = null;
  propertyBinder: PropertyBinder;
  private propertiesTriggeringRefresh: string[] = [];
  private isRefreshing = false;

  constructor(container: HTMLElement, onPropertyChange?: (target: Object3D) => void) {
    this.pane = new Pane({ container, title: 'Properties' });
    this.pane.registerPlugin(TweakpanePluginMedia);

    this.propertyBinder = new PropertyBinder((target, key) => {
      if (this.isRefreshing) {
        return;
      }

      if (this.propertiesTriggeringRefresh.includes(key)) {
        this.pane.refresh();
      }

      onPropertyChange?.(target);
    });
  }

  setSelectedObject(obj: Object3D | null): void {
    this.selectedObject = obj;
    this.refresh();
  }

  refresh(): void {
    this.isRefreshing = true;

    this.clearBindings();

    if (!this.selectedObject) {
      this.isRefreshing = false;
      return;
    }

    for (const [categoryName, properties] of Object.entries(CATEGORIES)) {
      const folder = this.pane.addFolder({ title: categoryName, expanded: true });

      for (const property of properties) {
        this.propertyBinder.bind(folder, this.selectedObject, property);
      }

      if (folder.children.length === 0) {
        folder.dispose();
      } else {
        this.folders.set(categoryName, folder);
      }
    }

    this.isRefreshing = false;
  }

  dispose(): void {
    this.clearBindings();
    this.pane.dispose();
  }

  private clearBindings(): void {
    this.folders.forEach((folder) => folder.dispose());
    this.folders.clear();

    // Remove all children from pane
    while (this.pane.children.length > 0) {
      this.pane.children[0].dispose();
    }
  }
}
