import styles from './styles.css?inline';
import { Object3D, Scene } from 'three';
import { SceneHierarchyPanel } from './SceneHierarchyPanel';
import { PropertyInspectorPanel } from './PropertyInspectorPanel';

// Inject styles into the document
let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
  stylesInjected = true;
}

export class ThreeSceneInspector {
  scene: Scene;
  hierarchyPanel: SceneHierarchyPanel;
  propertyPanel: PropertyInspectorPanel;
  panelsContainer: HTMLElement | null = null;

  constructor(scene: Scene) {
    injectStyles();

    this.scene = scene;

    const { hierarchyContainer, propertyContainer } = this.createPanelContainers();

    this.hierarchyPanel = new SceneHierarchyPanel(hierarchyContainer, this.onObjectSelected.bind(this));
    this.propertyPanel = new PropertyInspectorPanel(propertyContainer, this.scene);

    this.refresh();
  }

  private createPanelContainers(): { hierarchyContainer: HTMLElement; propertyContainer: HTMLElement } {
    // Create panels container
    const panelsContainer = document.createElement('div');
    panelsContainer.id = 'panels-container';
    document.body.appendChild(panelsContainer);
    this.panelsContainer = panelsContainer;

    // Create hierarchy panel
    const hierarchyContainer = document.createElement('div');
    hierarchyContainer.id = 'hierarchy-panel';
    panelsContainer.appendChild(hierarchyContainer);

    // Create property panel
    const propertyContainer = document.createElement('div');
    propertyContainer.id = 'property-panel';
    panelsContainer.appendChild(propertyContainer);

    return { hierarchyContainer, propertyContainer };
  }

  refresh(): void {
    this.hierarchyPanel.refresh(this.scene);
  }

  update(): void {
    this.propertyPanel.update();
  }

  selectObject(obj: Object3D): void {
    this.hierarchyPanel.selectObject(obj);
  }

  dispose(): void {
    this.hierarchyPanel.dispose();
    this.propertyPanel.dispose();

    // Clean up auto-created panels container
    if (this.panelsContainer?.parentNode) {
      this.panelsContainer.parentNode.removeChild(this.panelsContainer);
      this.panelsContainer = null;
    }
  }

  private onObjectSelected(obj: Object3D): void {
    this.propertyPanel.setSelectedObject(obj);
  }
}

// Export everything that might be useful
export { SceneHierarchyPanel } from './SceneHierarchyPanel';
export { PropertyInspectorPanel } from './PropertyInspectorPanel';
export { CATEGORIES, type CategorizedProperties, type PropertyInfo } from './properties';
export { PropertyBinder } from './PropertyBinder';
