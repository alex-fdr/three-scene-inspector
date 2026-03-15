import { ButtonApi } from 'tweakpane';
import { FolderApi } from 'tweakpane';
import { Object3D } from 'three';
import { Pane } from 'tweakpane';
import { Scene } from 'three';

export declare const CATEGORIES: CategorizedProperties;

export declare type CategorizedProperties = Partial<Record<Category, PropertyInfo[]>>;

declare type Category = 'Object' | 'Transform' | 'Material' | 'Texture' | 'Shadow';

declare class HelperManager {
    private scene;
    private helpers;
    constructor(scene: Scene);
    addHelperToggles(folder: FolderApi, obj: Object3D): void;
    update(): void;
    dispose(): void;
    private helperDescriptors;
    private helperKey;
    private enable;
    private disable;
    private addHelperToggle;
}

declare type ObjectSelectionHandler = (obj: Object3D) => void;

export declare class PropertyBinder {
    private onChange;
    constructor(onChange: (key: string) => void);
    bind(folder: FolderApi, obj: Object3D, property: PropertyInfo): void;
    private bindNumber;
    private bindString;
    private bindBoolean;
    private bindPoint;
    private bindColor;
    private bindList;
    private bindReadonly;
    private bingImage;
    private getTargetAndKey;
    private getValueFromPath;
    private buildBaseOptions;
    private addBindingWithCallback;
    private propertyExists;
}

export declare type PropertyInfo = {
    path: string;
    type: 'number' | 'string' | 'boolean' | 'point' | 'readonly' | 'color' | 'list' | 'image';
    label?: string;
    min?: number;
    max?: number;
    step?: number;
    options?: number[] | string[] | {
        text: string;
        value: any;
    }[];
    needsUpdate?: boolean;
};

export declare class PropertyInspectorPanel {
    readonly pane: Pane;
    folders: Map<string, FolderApi>;
    selectedObject: Object3D | null;
    propertyBinder: PropertyBinder;
    helperManager: HelperManager;
    private propertiesTriggeringRefresh;
    private propertiesTriggeringRebuild;
    private isRefreshing;
    constructor(container: HTMLElement, scene: Scene);
    setSelectedObject(obj: Object3D | null): void;
    refresh(): void;
    update(): void;
    dispose(): void;
    private addProperies;
    private addHelpersFolder;
    private clearBindings;
}

export declare class SceneHierarchyPanel {
    private onSelectionChange;
    readonly pane: Pane;
    lightsFolder: FolderApi;
    buttons: Map<Object3D, ButtonApi>;
    selectedObject: Object3D | null;
    private currentScene;
    private searchElement;
    private folderObjects;
    private excludeLabels;
    private get searchQuery();
    constructor(container: HTMLElement, onSelectionChange: ObjectSelectionHandler);
    private createSearchElement;
    refresh(scene: Scene): void;
    selectObject(obj: Object3D): void;
    dispose(): void;
    excludeFromTree(...labels: string[]): void;
    private rebuildTree;
    private buildHierarchy;
    private objectOrDescendantMatches;
    private matchesSearch;
    private shouldSkipObject;
    private getChildrenArray;
    private createFolderNode;
    private isArrowClick;
    private createLeafNode;
    private createLabel;
    private updateSelectionIndicator;
    private findLeafButtonElement;
}

export declare class ThreeSceneInspector {
    scene: Scene;
    hierarchyPanel: SceneHierarchyPanel;
    propertyPanel: PropertyInspectorPanel;
    panelsContainer: HTMLElement | null;
    constructor(scene: Scene);
    private createPanelContainers;
    refresh(): void;
    update(): void;
    selectObject(obj: Object3D): void;
    excludeFromTree(...labels: string[]): void;
    dispose(): void;
    private onObjectSelected;
}

export { }
