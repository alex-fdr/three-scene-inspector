import { Pane as u } from "tweakpane";
import { RepeatWrapping as g, ClampToEdgeWrapping as b, MirroredRepeatWrapping as m, NoColorSpace as f, SRGBColorSpace as v, LinearSRGBColorSpace as y, FrontSide as k, BackSide as x, DoubleSide as w, BoxHelper as S, CameraHelper as h, DirectionalLightHelper as C } from "three";
import * as _ from "tweakpane-plugin-media";
const B = ':root{--tp-base-font-family: monospace;--tp-base-background-color: hsl(215, 20%, 10%);--tp-base-border-radius: 0px;--tp-button-background-color: hsl(215, 25%, 16%);--tp-button-background-color-hover: hsl(215, 60%, 45%);--tp-button-background-color-focus: hsl(215, 55%, 40%);--tp-button-background-color-active: hsl(215, 55%, 40%);--tp-button-foreground-color: hsl(210, 60%, 95%);--tp-input-background-color: hsl(215, 25%, 16%);--tp-input-background-color-hover: hsl(215, 60%, 45%);--tp-input-background-color-focus: hsl(215, 35%, 34%);--tp-input-background-color-active: hsl(218, 35%, 32%);--tp-input-foreground-color: hsl(210, 50%, 90%);--tp-label-foreground-color: hsl(210, 50%, 90%);--tp-container-background-color: hsl(220, 40%, 5%);--tp-container-background-color-hover: hsl(220, 25%, 10%);--tp-container-background-color-focus: hsl(215, 30%, 14%);--tp-container-background-color-active: hsl(220, 30%, 12%);--tp-container-foreground-color: hsl(210, 40%, 88%);--tp-container-horizontal-padding: 8px;--tp-container-vertical-padding: 8px;--tp-container-unit-size: 20px;--tp-container-unit-spacing: 4px;--tp-groove-foreground-color: hsl(215, 55%, 55%);--tp-monitor-background-color: hsl(218, 25%, 12%);--tp-monitor-foreground-color: hsl(215, 50%, 75%);--tp-blade-border-radius: 4px;--tp-blade-horizontal-padding: 6px;--tp-blade-value-width: 150px}.tp-rotv{padding-bottom:10px}.tp-rotv_m{display:none!important}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{font-weight:400!important}#panels-container{position:fixed;top:0;left:0;width:100vw;display:flex;justify-content:space-between;z-index:1000;pointer-events:none;height:100vh}#hierarchy-panel{pointer-events:auto;min-width:200px;max-width:30vw;height:auto;overflow-y:auto;scrollbar-gutter:stable;width:200px}#hierarchy-panel .tp-rotv{background-color:var(--tp-container-background-color)!important}#hierarchy-panel .tp-fldv_c{padding-left:8px!important;padding-top:0!important;padding-bottom:0!important;background-color:var(--tp-container-background-color)!important}#hierarchy-panel .tp-fldv_t{font-weight:400;margin:0!important;background-color:transparent!important;min-height:24px;display:flex!important;align-items:center;padding-left:16px;line-height:1.5}#hierarchy-panel .tp-fldv_c>.tp-btnv:first-child,#hierarchy-panel .tp-fldv_c>.tp-fldv:first-child{margin-top:0!important}#hierarchy-panel .tp-fldv{margin-top:0!important;margin-bottom:0!important;margin-left:0!important}#hierarchy-panel .tp-btnv{margin-top:0!important;margin-bottom:0!important}#hierarchy-panel .tp-lblv.tp-lblv-nol{margin-top:0!important}#hierarchy-panel .tp-fldv_i{display:none!important}#hierarchy-panel .tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:0}#hierarchy-panel .tp-rotv_b{position:sticky;top:0;z-index:1;background-color:var(--tp-base-background-color)}#hierarchy-panel .scene-tree-search{display:block;width:100%;box-sizing:border-box;background-color:var(--tp-input-background-color);color:var(--tp-input-foreground-color);border:none;border-bottom:1px solid hsl(215,20%,18%);outline:none;font-family:var(--tp-base-font-family);font-size:11px;padding:4px 8px;position:sticky;top:calc(var(--tp-container-unit-size) + 4px);z-index:1}#hierarchy-panel .scene-tree-search:focus{background-color:var(--tp-input-background-color-focus)}#hierarchy-panel .scene-tree-search::placeholder{color:#668099}#hierarchy-panel .scene-tree-selected{background-color:var(--tp-button-background-color-active)!important}#hierarchy-panel .scene-tree-selected:hover{background-color:var(--tp-button-background-color-hover)!important}#hierarchy-panel .tp-fldv_b,#hierarchy-panel .tp-btnv_b{border-radius:0!important;padding-right:8px!important;min-height:24px;display:flex!important;align-items:center!important;box-sizing:border-box}#hierarchy-panel .tp-fldv_b{cursor:pointer!important;width:100%!important;text-align:left!important}#hierarchy-panel .tp-btnv_b{padding-left:16px!important;background:none!important;text-align:left}#hierarchy-panel .tp-btnv_b.scene-tree-selected{background-color:var(--tp-button-background-color-active)!important}#hierarchy-panel .tp-fldv_b:hover:not(.scene-tree-selected),#hierarchy-panel .tp-btnv_b:hover:not(.scene-tree-selected){background-color:var(--tp-button-background-color-hover)!important}#hierarchy-panel .tp-fldv_m{position:absolute!important;left:0!important;right:auto!important;top:50%!important;transform:translateY(-50%)!important;cursor:pointer!important;padding:0 12px!important;margin:-1px 0 0!important;background:none!important;display:flex!important;align-items:center!important;justify-content:center!important}#hierarchy-panel .tp-fldv_m svg{display:none!important;visibility:hidden!important;opacity:0!important;width:0!important;height:0!important}#hierarchy-panel .tp-fldv_m:before{font-size:18px;color:var(--tp-label-fg);line-height:1;font-weight:bolder;font-family:monospace;display:block!important;position:relative!important}#hierarchy-panel .tp-fldv.tp-fldv-expanded .tp-fldv_m:before{content:"−"!important}#hierarchy-panel .tp-fldv:not(.tp-fldv-expanded) .tp-fldv_m:before{content:"+"!important}#property-panel{pointer-events:auto;max-height:100vh;overflow-x:hidden;overflow-y:auto;width:300px;align-self:flex-start;scrollbar-gutter:stable;background-color:var(--tp-base-background-color)}#property-panel .tp-rotv{background-color:var(--tp-container-background-color)!important}#property-panel .tp-fldv_b{background-color:var(--tp-base-background-color)!important}#property-panel .tp-fldv_t{text-transform:uppercase;font-weight:700;font-size:12px}#property-panel .tp-lstv_s option{background-color:var(--tp-input-background-color)!important;color:var(--tp-input-foreground-color)!important}#property-panel .tp-p2dv_b{display:none!important}#property-panel .tp-lblv_l{padding-left:0!important}#property-panel .tp-fldv_m{display:none!important}#hierarchy-panel::-webkit-scrollbar,#property-panel::-webkit-scrollbar{width:4px;height:4px}#hierarchy-panel::-webkit-scrollbar-track,#property-panel::-webkit-scrollbar-track{background:var(--tp-container-background-color)}#hierarchy-panel::-webkit-scrollbar-thumb,#property-panel::-webkit-scrollbar-thumb{background:#fff3;border-radius:4px}#hierarchy-panel::-webkit-scrollbar-thumb:hover,#property-panel::-webkit-scrollbar-thumb:hover{background:#ffffff4d}';
class O {
  constructor(e, n) {
    this.onChange = n, this.element = document.createElement("input"), this.element.type = "text", this.element.placeholder = "Search...", this.element.className = "scene-tree-search";
    const t = e.querySelector(".tp-rotv_b");
    t ? t.insertAdjacentElement("afterend", this.element) : e.prepend(this.element), this.element.addEventListener("input", () => {
      this.onChange(this.element.value.trim());
    });
  }
  dispose() {
    this.element.remove();
  }
}
class T {
  constructor(e, n) {
    this.onSelectionChange = n, this.buttons = /* @__PURE__ */ new Map(), this.selectedObject = null, this.currentScene = null, this.searchQuery = "", this.folderObjects = /* @__PURE__ */ new Set(), this.pane = new u({ container: e, title: "Scene Tree" }), this.search = new O(this.pane.element, (t) => {
      this.searchQuery = t, this.currentScene && this.rebuildTree();
    });
  }
  refresh(e) {
    this.currentScene = e, this.rebuildTree();
  }
  selectObject(e) {
    this.selectedObject = e, this.updateSelectionIndicator(), this.onSelectionChange(e);
  }
  dispose() {
    this.search.dispose(), this.pane.dispose();
  }
  rebuildTree() {
    for (this.buttons.clear(), this.folderObjects.clear(); this.pane.children.length > 0; )
      this.pane.children[0].dispose();
    this.currentScene && (this.lightsFolder = this.pane.addFolder({ title: "Lights" }), this.buildHierarchy(this.currentScene, this.pane), this.lightsFolder.children.length === 0 && this.lightsFolder.dispose(), this.updateSelectionIndicator());
  }
  buildHierarchy(e, n) {
    if (this.shouldSkipObject(e) || this.searchQuery && !this.objectOrDescendantMatches(e)) return;
    const t = this.getChildrenArray(e), r = this.searchQuery ? t.filter((a) => !this.shouldSkipObject(a) && this.objectOrDescendantMatches(a)) : t, i = this.createLabel(e);
    if (r.length > 0) {
      const a = this.searchQuery ? !0 : e.type !== "Bone";
      this.createFolderNode(e, n, i, r, a);
    } else
      this.createLeafNode(e, n, i);
  }
  objectOrDescendantMatches(e) {
    return this.matchesSearch(e) ? !0 : e.children.some((n) => this.objectOrDescendantMatches(n));
  }
  matchesSearch(e) {
    return this.createLabel(e).toLowerCase().includes(this.searchQuery.toLowerCase());
  }
  shouldSkipObject(e) {
    return e.name === "__inspector_bounding_box__";
  }
  getChildrenArray(e) {
    const n = e.children;
    return n ? [...n] : [];
  }
  createFolderNode(e, n, t, r, i) {
    const a = n.addFolder({ title: t, expanded: i }), o = a.element.querySelector(".tp-fldv_b"), s = a.element.querySelector(".tp-fldv_m");
    o?.addEventListener("click", (l) => {
      this.isArrowClick(l.target, s) || (l.stopPropagation(), l.preventDefault(), this.selectObject(e));
    }, !0), this.buttons.set(e, { title: t, element: a.element }), this.folderObjects.add(e);
    for (const l of r)
      this.buildHierarchy(l, a);
  }
  isArrowClick(e, n) {
    return n !== null && (e === n || n.contains(e) || e.closest(".tp-fldv_m") === n);
  }
  createLeafNode(e, n, t) {
    const i = ("isLight" in e && e.isLight ? this.lightsFolder : n).addButton({ title: t });
    i.on("click", () => this.selectObject(e)), this.buttons.set(e, i);
  }
  createLabel(e) {
    const n = e.constructor.name.replace(/_/g, ""), t = e.name || "";
    return t ? `${t} (${n})` : n;
  }
  updateSelectionIndicator() {
    this.buttons.forEach((e, n) => {
      const r = this.folderObjects.has(n) ? e.element.querySelector(".tp-fldv_b") : this.findLeafButtonElement(e.element), i = this.selectedObject === n;
      r?.classList.toggle("scene-tree-selected", i);
    });
  }
  findLeafButtonElement(e) {
    let n = e.querySelector(".tp-btnv_b");
    return n || (n = e.querySelector("button")), !n && e.classList?.contains("tp-btnv") && (n = e.querySelector(".tp-btnv_b") || e), n;
  }
}
const P = {
  Object: [
    // { path: 'name', type: 'readonly' },
    // lights stuff
    { path: "color", type: "color" },
    { path: "intensity", type: "number", min: 0, max: 10 },
    { path: "visible", type: "boolean" },
    { path: "castShadow", type: "boolean" },
    { path: "receiveShadow", type: "boolean" }
  ],
  Transform: [
    { path: "position", type: "point" },
    { path: "rotation", type: "point" },
    { path: "scale", type: "point" }
  ],
  Material: [
    { path: "material.color", type: "color" },
    { path: "material.emissive", type: "color" },
    { path: "material.specular", type: "color" },
    { path: "material.transparent", type: "boolean", needsUpdate: !0 },
    { path: "material.opacity", type: "number", min: 0, max: 1 },
    { path: "material.wireframe", type: "boolean" },
    { path: "material.side", type: "list", options: [
      { text: "FrontSide", value: k },
      { text: "BackSide", value: x },
      { text: "DoubleSide", value: w }
    ] }
  ],
  Texture: [
    { path: "material.map.flipY", type: "boolean", needsUpdate: !0 },
    { path: "material.map.offset", type: "point" },
    { path: "material.map.repeat", type: "point" },
    {
      path: "material.map.wrapS",
      type: "list",
      label: "wrap",
      options: [
        { text: "RepeatWrapping", value: g },
        { text: "ClampToEdgeWrapping", value: b },
        { text: "MirroredRepeatWrapping", value: m }
      ]
    },
    { path: "material.map.colorSpace", type: "list", label: "color space", options: [
      { text: "NoColorSpace", value: f },
      { text: "SRGBColorSpace", value: v },
      { text: "LinearSRGBColorSpace", value: y }
    ], needsUpdate: !0 },
    { path: "material.map", type: "image" }
    // { path: 'material.map.colorSpace'}
  ]
};
class F {
  constructor(e) {
    this.onChange = e;
  }
  bind(e, n, t) {
    if (this.propertyExists(n, t.path))
      switch (t.type) {
        case "number":
          this.bindNumber(e, n, t);
          break;
        case "string":
          this.bindString(e, n, t);
          break;
        case "boolean":
          this.bindBoolean(e, n, t);
          break;
        case "point":
          this.bindPoint(e, n, t);
          break;
        case "color":
          this.bindColor(e, n, t);
          break;
        case "list":
          this.bindList(e, n, t);
          break;
        case "readonly":
          this.bindReadonly(e, n, t);
          break;
        case "image":
          this.bingImage(e, n, t);
          break;
        default:
          this.bindString(e, n, t);
          break;
      }
  }
  bindNumber(e, n, t) {
    const { target: r, key: i } = this.getTargetAndKey(n, t.path), a = this.buildBaseOptions(t);
    t.min !== void 0 && t.max !== void 0 && (a.min = t.min, a.max = t.max, a.step = t.step !== void 0 ? t.step : void 0), this.addBindingWithCallback(e, r, i, a);
  }
  bindString(e, n, t) {
    const { target: r, key: i } = this.getTargetAndKey(n, t.path), a = this.buildBaseOptions(t);
    this.addBindingWithCallback(e, r, i, a);
  }
  bindBoolean(e, n, t) {
    const { target: r, key: i } = this.getTargetAndKey(n, t.path), a = this.buildBaseOptions(t);
    this.addBindingWithCallback(e, r, i, a);
  }
  bindPoint(e, n, t) {
    const { target: r, key: i } = this.getTargetAndKey(n, t.path), a = t.min !== void 0 ? t.min : -2e3, o = t.max !== void 0 ? t.max : 2e3, s = t.step !== void 0 ? t.step : void 0, l = {
      ...this.buildBaseOptions(t),
      x: { min: a, max: o, step: s },
      y: { min: a, max: o, step: s }
    };
    this.addBindingWithCallback(e, r, i, l);
  }
  bindColor(e, n, t) {
    const { target: r, key: i } = this.getTargetAndKey(n, t.path), a = {
      ...this.buildBaseOptions(t),
      view: "color"
    };
    if (typeof r[i] == "object") {
      const o = {
        [i]: `#${r[i].getHexString()}`
      };
      e.addBinding(o, i, a).on("change", (s) => {
        r[i].set(s.value), this.onChange(i);
      });
      return;
    }
    this.addBindingWithCallback(e, r, i, a);
  }
  bindList(e, n, t) {
    const { target: r, key: i } = this.getTargetAndKey(n, t.path), a = this.buildBaseOptions(t);
    if (t.options && t.options.length > 0) {
      const s = typeof t.options[0] == "string" ? t.options.map((l) => ({ text: l, value: l })) : t.options;
      a.options = s.reduce((l, c) => (l[c.text] = c.value, l), {});
    }
    const o = this.addBindingWithCallback(e, r, i, a);
    (i === "wrapS" || i === "wrapT") && o.on("change", (s) => {
      r.wrapS = s.value, r.wrapT = s.value, r.needsUpdate = !0;
    });
  }
  bindReadonly(e, n, t) {
    const r = t.path.split(".").pop() || t.path;
    let i = this.getValueFromPath(n, t.path);
    t.path === "name" && !i && (i = "(unnamed)");
    const a = {
      ...this.buildBaseOptions(t),
      readonly: !0
    };
    e.addBinding({ [r]: i }, r, a);
  }
  bingImage(e, n, t) {
    const { target: r, key: i } = this.getTargetAndKey(n, t.path);
    r[i] && e.addBinding(r, i, {
      label: t.label ?? "Image",
      view: "texture",
      height: 80
    });
  }
  getTargetAndKey(e, n) {
    const t = n.split("."), r = this.getValueFromPath(e, n, !0), i = t[t.length - 1];
    return { target: r, key: i };
  }
  getValueFromPath(e, n, t = !1) {
    const r = n.split("."), i = t ? r.length - 1 : r.length;
    let a = e;
    for (let o = 0; o < i; o++)
      a = a?.[r[o]];
    return a;
  }
  buildBaseOptions(e) {
    const n = { needsUpdate: e.needsUpdate ?? !1 };
    return e.label && (n.label = e.label), n;
  }
  addBindingWithCallback(e, n, t, r) {
    const i = e.addBinding(n, t, r);
    return i.on("change", (a) => {
      this.onChange(t), r.needsUpdate && (n.needsUpdate = !0);
    }), i;
  }
  propertyExists(e, n) {
    const t = n.split(".");
    let r = e;
    for (let i = 0; i < t.length - 1; i++)
      if (r = r?.[t[i]], r == null) return !1;
    return r != null && t[t.length - 1] in r;
  }
}
class E {
  constructor(e) {
    this.scene = e, this.helpers = /* @__PURE__ */ new Map();
  }
  addHelperToggles(e, n) {
    this.helperDescriptors(n).forEach(({ label: t, createFn: r }) => {
      this.addHelperToggle(e, t, n, r);
    });
  }
  update() {
    this.helpers.forEach((e) => e.update());
  }
  dispose() {
    this.helpers.forEach((e) => {
      this.scene.remove(e), e.dispose();
    }), this.helpers.clear();
  }
  helperDescriptors(e) {
    switch (e.type) {
      case "DirectionalLight": {
        const n = e, t = [
          { label: "Light Helper", createFn: () => new C(n, 1) }
        ];
        return n.castShadow && t.push({ label: "Shadow Camera", createFn: () => new h(n.shadow.camera) }), t;
      }
      case "OrthographicCamera":
      case "PerspectiveCamera":
        return [{ label: "Camera", createFn: () => new h(e) }];
      default:
        return [{ label: "Box", createFn: () => new S(e) }];
    }
  }
  helperKey(e, n) {
    return `${e.uuid}-${n}`;
  }
  enable(e, n, t) {
    const r = this.helperKey(e, n), i = t();
    this.scene.add(i), this.helpers.set(r, i);
  }
  disable(e, n) {
    const t = this.helperKey(e, n), r = this.helpers.get(t);
    r && (this.scene.remove(r), r.dispose(), this.helpers.delete(t));
  }
  addHelperToggle(e, n, t, r) {
    const i = this.helperKey(t, n), a = { show: this.helpers.has(i) };
    e.addBinding(a, "show", { label: n }).on("change", (s) => {
      s.value ? this.enable(t, n, r) : this.disable(t, n);
    });
  }
}
class L {
  constructor(e, n) {
    this.folders = /* @__PURE__ */ new Map(), this.selectedObject = null, this.propertiesTriggeringRefresh = [], this.propertiesTriggeringRebuild = ["castShadow"], this.isRefreshing = !1, this.pane = new u({ container: e, title: "Properties" }), this.pane.registerPlugin(_), this.helperManager = new E(n), this.propertyBinder = new F((t) => {
      this.isRefreshing || (this.propertiesTriggeringRefresh.includes(t) && this.pane.refresh(), this.propertiesTriggeringRebuild.includes(t) && setTimeout(() => this.refresh(), 0));
    });
  }
  setSelectedObject(e) {
    this.selectedObject = e, this.refresh();
  }
  refresh() {
    if (this.isRefreshing = !0, this.clearBindings(), !this.selectedObject) {
      this.isRefreshing = !1;
      return;
    }
    this.addProperies(this.selectedObject), this.addHelpersFolder(this.selectedObject), this.isRefreshing = !1;
  }
  update() {
    this.helperManager.update();
  }
  dispose() {
    this.clearBindings(), this.pane.dispose(), this.helperManager.dispose();
  }
  addProperies(e) {
    for (const [n, t] of Object.entries(P)) {
      const r = this.pane.addFolder({ title: n, expanded: !0 });
      for (const i of t)
        this.propertyBinder.bind(r, e, i);
      r.children.length === 0 ? r.dispose() : this.folders.set(n, r);
    }
  }
  addHelpersFolder(e) {
    const n = this.pane.addFolder({ title: "Helpers", expanded: !0 });
    this.helperManager.addHelperToggles(n, e), n.children.length === 0 ? n.dispose() : this.folders.set("Helpers", n);
  }
  clearBindings() {
    for (this.folders.forEach((e) => e.dispose()), this.folders.clear(); this.pane.children.length > 0; )
      this.pane.children[0].dispose();
  }
}
let d = !1;
function R() {
  if (d) return;
  const p = document.createElement("style");
  p.textContent = B, document.head.appendChild(p), d = !0;
}
class K {
  constructor(e) {
    this.panelsContainer = null, R(), this.scene = e;
    const { hierarchyContainer: n, propertyContainer: t } = this.createPanelContainers();
    this.hierarchyPanel = new T(n, this.onObjectSelected.bind(this)), this.propertyPanel = new L(t, this.scene), this.refresh();
  }
  createPanelContainers() {
    const e = document.createElement("div");
    e.id = "panels-container", document.body.appendChild(e), this.panelsContainer = e;
    const n = document.createElement("div");
    n.id = "hierarchy-panel", e.appendChild(n);
    const t = document.createElement("div");
    return t.id = "property-panel", e.appendChild(t), { hierarchyContainer: n, propertyContainer: t };
  }
  refresh() {
    this.hierarchyPanel.refresh(this.scene);
  }
  update() {
    this.propertyPanel.update();
  }
  selectObject(e) {
    this.hierarchyPanel.selectObject(e);
  }
  dispose() {
    this.hierarchyPanel.dispose(), this.propertyPanel.dispose(), this.panelsContainer?.parentNode && (this.panelsContainer.parentNode.removeChild(this.panelsContainer), this.panelsContainer = null);
  }
  onObjectSelected(e) {
    this.propertyPanel.setSelectedObject(e);
  }
}
export {
  P as CATEGORIES,
  F as PropertyBinder,
  L as PropertyInspectorPanel,
  T as SceneHierarchyPanel,
  K as ThreeSceneInspector
};
//# sourceMappingURL=three-scene-inspector.es.js.map
