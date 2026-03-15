import { Pane, FolderApi } from 'tweakpane';
import { DEFAULT_PROPERTIES, CategorizedProperties, Category, PropertyInfo } from './properties';
import { PropertyBinder } from './PropertyBinder';
import { Object3D, Scene } from 'three';
import * as TweakpanePluginMedia from 'tweakpane-plugin-media';
import { HelperManager } from './HelperManager';

export class PropertyInspectorPanel {
  readonly pane: Pane;
  folders: Map<string, FolderApi> = new Map();
  selectedObject: Object3D | null = null;
  propertyBinder: PropertyBinder;
  helperManager: HelperManager;
  private propertiesTriggeringRefresh: string[] = [];
  private propertiesTriggeringRebuild: string[] = ['castShadow'];
  private isRefreshing = false;
  private extraProperties: CategorizedProperties = {};
  private overriddenProperties: CategorizedProperties = {};

  constructor(container: HTMLElement, scene: Scene) {
    this.pane = new Pane({ container, title: 'Properties' });
    this.pane.registerPlugin(TweakpanePluginMedia);

    this.helperManager = new HelperManager(scene);

    this.propertyBinder = new PropertyBinder((key) => {
      if (this.isRefreshing) {
        return;
      }

      if (this.propertiesTriggeringRefresh.includes(key)) {
        this.pane.refresh();
      }

      if (this.propertiesTriggeringRebuild.includes(key)) {
        setTimeout(() => this.refresh(), 0);
      }
    });
  }

  addProperties(category: Category, properties: PropertyInfo[]): void {
    const existing = this.extraProperties[category] ?? [];
    this.extraProperties[category] = [...existing, ...properties];
  }

  overrideProperties(category: Category, properties: PropertyInfo[]): void {
    this.overriddenProperties[category] = properties;
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

    this.addProperies(this.selectedObject);
    this.addHelpersFolder(this.selectedObject);

    this.isRefreshing = false;
  }

  dispose(): void {
    this.clearBindings();
    this.pane.dispose();
    this.helperManager.dispose();
  }

  private addProperies(obj: Object3D): void {
    for (const key of Object.keys(DEFAULT_PROPERTIES) as Category[]) {
      const base = this.overriddenProperties[key] ?? DEFAULT_PROPERTIES[key] ?? [];
      const extra = this.extraProperties[key] ?? [];
      const properties = [...base, ...extra];

      const folder = this.pane.addFolder({ title: key, expanded: true });

      for (const property of properties) {
        this.propertyBinder.bind(folder, obj, property);
      }

      if (folder.children.length === 0) {
        folder.dispose();
      } else {
        this.folders.set(key, folder);
      }
    }
  }

  private addHelpersFolder(obj: Object3D): void {
    const helpersFolder = this.pane.addFolder({ title: 'Helpers', expanded: true });
    this.helperManager.addHelperToggles(helpersFolder, obj);
    
    if (helpersFolder.children.length === 0) {
      helpersFolder.dispose();
    } else {
      this.folders.set('Helpers', helpersFolder);
    }
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
