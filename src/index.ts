import styles from './styles.css?inline';
import { Object3D, Scene } from 'three';
import { SceneHierarchyPanel } from './SceneHierarchyPanel';
import { PropertyInspectorPanel } from './PropertyInspectorPanel';
import { Category, PropertyInfo } from './properties';

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
  private hierarchyPanel: SceneHierarchyPanel;
  private propertyPanel: PropertyInspectorPanel;
  private panelsContainer: HTMLElement | null = null;

  constructor(private scene: Scene) {
    injectStyles();

    const { hierarchyContainer, propertyContainer } = this.createPanelContainers();
    this.hierarchyPanel = new SceneHierarchyPanel(hierarchyContainer, this.onObjectSelected.bind(this));
    this.propertyPanel = new PropertyInspectorPanel(propertyContainer, this.scene);

    this.refresh();
  }

  private createPanelContainers(): { hierarchyContainer: HTMLElement; propertyContainer: HTMLElement } {
    const panelsContainer = document.createElement('div');
    panelsContainer.id = 'panels-container';
    document.body.appendChild(panelsContainer);
    this.panelsContainer = panelsContainer;

    const hierarchyContainer = document.createElement('div');
    hierarchyContainer.id = 'hierarchy-panel';
    panelsContainer.appendChild(hierarchyContainer);

    const propertyContainer = document.createElement('div');
    propertyContainer.id = 'property-panel';
    panelsContainer.appendChild(propertyContainer);

    return { hierarchyContainer, propertyContainer };
  }

  private onObjectSelected(obj: Object3D): void {
    this.propertyPanel.setSelectedObject(obj);
  }

  refresh(): void {
    this.hierarchyPanel.refresh(this.scene);
  }

  update(): void {
    this.propertyPanel.helperManager.update();
  }

  selectObject(obj: Object3D): void {
    this.hierarchyPanel.selectObject(obj);
  }

  excludeFromTree(...labels: string[]): void {
    this.hierarchyPanel.excludeFromTree(...labels);
  }

  addProperties(category: Category, properties: PropertyInfo[]): void {
    this.propertyPanel.addProperties(category, properties);
  }

  overrideProperties(category: Category, properties: PropertyInfo[]): void {
    this.propertyPanel.overrideProperties(category, properties);
  }

  dispose(): void {
    this.hierarchyPanel.dispose();
    this.propertyPanel.dispose();

    if (this.panelsContainer?.parentNode) {
      this.panelsContainer.parentNode.removeChild(this.panelsContainer);
      this.panelsContainer = null;
    }
  }
}

export { SceneHierarchyPanel } from './SceneHierarchyPanel';
export { PropertyInspectorPanel } from './PropertyInspectorPanel';
export { DEFAULT_PROPERTIES, type CategorizedProperties, type Category, type PropertyInfo } from './properties';
export { PropertyBinder } from './PropertyBinder';
