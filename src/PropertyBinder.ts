import { FolderApi } from 'tweakpane';
import { PropertyInfo } from './properties';
import { Object3D } from 'three';
import { BindingApi, BindingParams } from '@tweakpane/core';

export class PropertyBinder {
  constructor(private onChange: (key: string) => void) {}

  bind(folder: FolderApi, obj: Object3D, property: PropertyInfo): void {
    if (!this.propertyExists(obj, property.path)) return;

    switch (property.type) {
      case 'number':
        this.bindNumber(folder, obj, property);
        break;
      case 'string':
        this.bindString(folder, obj, property);
        break;
      case 'boolean':
        this.bindBoolean(folder, obj, property);
        break;
      case 'point':
        this.bindPoint(folder, obj, property);
        break;
      case 'color':
        this.bindColor(folder, obj, property);
        break;
      case 'list':
        this.bindList(folder, obj, property);
        break;
      case 'readonly':
        this.bindReadonly(folder, obj, property);
        break;
      case 'image':
        this.bindImage(folder, obj, property);
        break;
      default:
        this.bindString(folder, obj, property);
        break;
    }
  }

  private bindNumber(folder: FolderApi, obj: Object3D, property: PropertyInfo): void {
    const { target, key } = this.getTargetAndKey(obj, property.path);
    this.addBindingWithCallback(folder, target, key, property);
  }

  private bindString(folder: FolderApi, obj: Object3D, property: PropertyInfo): void {
    const { target, key } = this.getTargetAndKey(obj, property.path);
    this.addBindingWithCallback(folder, target, key, property);
  }

  private bindBoolean(folder: FolderApi, obj: Object3D, property: PropertyInfo): void {
    const { target, key } = this.getTargetAndKey(obj, property.path);
    this.addBindingWithCallback(folder, target, key, property);
  }

  private bindPoint(folder: FolderApi, obj: Object3D, property: PropertyInfo): void {
    const { target, key } = this.getTargetAndKey(obj, property.path);
    this.addBindingWithCallback(folder, target, key, property);
  }

  private bindColor(folder: FolderApi, obj: Object3D, property: PropertyInfo): void {
    const { target, key } = this.getTargetAndKey(obj, property.path);

    if (typeof target[key] === 'object') {
      const colorObj = { [key]: `#${target[key].getHexString()}` };
      folder.addBinding(colorObj, key, { label: property.label, view: 'color' }).on('change', (event) => {
        target[key].set(event.value);
        this.onChange(key);
      });
      return;
    }

    this.addBindingWithCallback(folder, target, key, property, { view: 'color' });
  }

  private bindList(folder: FolderApi, obj: Object3D, property: PropertyInfo): void {
    const { target, key } = this.getTargetAndKey(obj, property.path);

    const normalized = property.options?.length
      ? (typeof property.options[0] === 'string'
          ? (property.options as string[]).map(str => ({ text: str, value: str }))
          : property.options as { text: string; value: any }[])
      : [];

    const listOptions = normalized.reduce((acc, opt) => {
      acc[opt.text] = opt.value;
      return acc;
    }, {} as Record<string, any>);

    if (key === 'wrapS' || key === 'wrapT') {
      folder.addBinding(target, key, { label: property.label, options: listOptions }).on('change', (event) => {
        target.wrapS = event.value;
        target.wrapT = event.value;
        target.needsUpdate = true;
        this.onChange(key);
      });
    } else {
      this.addBindingWithCallback(folder, target, key, property, { options: listOptions });
    }
  }

  private bindReadonly(folder: FolderApi, obj: Object3D, property: PropertyInfo): void {
    const { target, key } = this.getTargetAndKey(obj, property.path);
    let value = target[key];

    // Special case: show '(unnamed)' for empty name property
    if (property.path === 'name' && !value) {
      value = '(unnamed)';
    }

    folder.addBinding({ [key]: value }, key, { label: property.label, readonly: true });
  }

  private bindImage(folder: FolderApi, obj: Object3D, property: PropertyInfo): void {
    const { target, key } = this.getTargetAndKey(obj, property.path);
    
    if (!target[key]) return;

    folder.addBinding(target, key, {
      label: property.label,
      view: 'texture',
      height: 80,
    });
  }
  
  private addBindingWithCallback(folder: FolderApi, target: any, key: string, property: PropertyInfo, extra: BindingParams = {}): BindingApi<unknown> {
    const { needsUpdate, label, min, max, step } = property;
    const options = { label, min, max, step, ...extra };
    const binding = folder.addBinding(target, key, options);

    binding.on('change', () => {
      this.onChange(key);
      if (needsUpdate) {
        target.needsUpdate = true;
      }
    });

    return binding;
  }

  private getTargetAndKey(obj: Object3D, path: string): { target: any; key: string } {
    const parts = path.split('.');
    const key = parts[parts.length - 1];
    let target: any = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      target = target?.[parts[i]];
    }
    return { target, key };
  }
  
  private propertyExists(obj: Object3D, path: string): boolean {
    const { target, key } = this.getTargetAndKey(obj, path);
    return target != null && key in target;
  }
}
