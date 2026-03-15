import { Pane as g } from "tweakpane";
import { RepeatWrapping as b, ClampToEdgeWrapping as m, MirroredRepeatWrapping as f, NoColorSpace as v, SRGBColorSpace as y, LinearSRGBColorSpace as x, FrontSide as k, BackSide as w, DoubleSide as S, BoxHelper as C, CameraHelper as h, DirectionalLightHelper as B } from "three";
import * as P from "tweakpane-plugin-media";
const _ = ':root{--tp-base-font-family: monospace;--tp-base-background-color: hsl(215, 20%, 10%);--tp-base-border-radius: 0px;--tp-button-background-color: hsl(215, 25%, 16%);--tp-button-background-color-hover: hsl(215, 60%, 45%);--tp-button-background-color-focus: hsl(215, 55%, 40%);--tp-button-background-color-active: hsl(215, 55%, 40%);--tp-button-foreground-color: hsl(210, 60%, 95%);--tp-input-background-color: hsl(215, 25%, 16%);--tp-input-background-color-hover: hsl(215, 60%, 45%);--tp-input-background-color-focus: hsl(215, 35%, 34%);--tp-input-background-color-active: hsl(218, 35%, 32%);--tp-input-foreground-color: hsl(210, 50%, 90%);--tp-label-foreground-color: hsl(210, 50%, 90%);--tp-container-background-color: hsl(220, 40%, 5%);--tp-container-background-color-hover: hsl(220, 25%, 10%);--tp-container-background-color-focus: hsl(215, 30%, 14%);--tp-container-background-color-active: hsl(220, 30%, 12%);--tp-container-foreground-color: hsl(210, 40%, 88%);--tp-container-horizontal-padding: 8px;--tp-container-vertical-padding: 8px;--tp-container-unit-size: 20px;--tp-container-unit-spacing: 4px;--tp-groove-foreground-color: hsl(215, 55%, 55%);--tp-monitor-background-color: hsl(218, 25%, 12%);--tp-monitor-foreground-color: hsl(215, 50%, 75%);--tp-blade-border-radius: 4px;--tp-blade-horizontal-padding: 6px;--tp-blade-value-width: 150px}.tp-rotv{padding-bottom:10px}.tp-rotv_m{display:none!important}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{font-weight:400!important}#panels-container{position:fixed;top:0;left:0;width:100vw;display:flex;justify-content:space-between;z-index:1000;pointer-events:none;height:100vh}#hierarchy-panel{pointer-events:auto;min-width:200px;max-width:30vw;height:auto;overflow-y:auto;scrollbar-gutter:stable;width:200px}#hierarchy-panel .tp-rotv{background-color:var(--tp-container-background-color)!important}#hierarchy-panel .tp-fldv_c{padding-left:8px!important;padding-top:0!important;padding-bottom:0!important;background-color:var(--tp-container-background-color)!important}#hierarchy-panel .tp-fldv_t{font-weight:400;margin:0!important;background-color:transparent!important;min-height:24px;display:flex!important;align-items:center;padding-left:16px;line-height:1.5}#hierarchy-panel .tp-fldv_c>.tp-btnv:first-child,#hierarchy-panel .tp-fldv_c>.tp-fldv:first-child{margin-top:0!important}#hierarchy-panel .tp-fldv{margin-top:0!important;margin-bottom:0!important;margin-left:0!important}#hierarchy-panel .tp-btnv{margin-top:0!important;margin-bottom:0!important}#hierarchy-panel .tp-lblv.tp-lblv-nol{margin-top:0!important}#hierarchy-panel .tp-fldv_i{display:none!important}#hierarchy-panel .tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:0}#hierarchy-panel .tp-rotv_b{position:sticky;top:0;z-index:1;background-color:var(--tp-base-background-color)}#hierarchy-panel .scene-tree-search-wrapper{position:sticky;top:calc(var(--tp-container-unit-size) + 4px);z-index:1;display:flex;align-items:center;background-color:var(--tp-input-background-color);border-bottom:1px solid hsl(215,20%,18%)}#hierarchy-panel .scene-tree-search{flex:1;min-width:0;background:none;color:var(--tp-input-foreground-color);border:none;outline:none;font-family:var(--tp-base-font-family);font-size:11px;padding:4px 8px}#hierarchy-panel .scene-tree-search-wrapper:focus-within{background-color:var(--tp-input-background-color-focus)}#hierarchy-panel .scene-tree-search::placeholder{color:#668099}#hierarchy-panel .scene-tree-search-clear{flex-shrink:0;background:none;border:none;color:#c2ccd6;cursor:pointer;font-size:20px;line-height:1;padding:0 6px;margin:0}#hierarchy-panel .scene-tree-search-clear:hover{color:var(--tp-input-foreground-color)}#hierarchy-panel .scene-tree-selected{background-color:var(--tp-button-background-color-active)!important}#hierarchy-panel .scene-tree-selected:hover{background-color:var(--tp-button-background-color-hover)!important}#hierarchy-panel .tp-fldv_b,#hierarchy-panel .tp-btnv_b{border-radius:0!important;padding-right:8px!important;min-height:24px;display:flex!important;align-items:center!important;box-sizing:border-box}#hierarchy-panel .tp-fldv_b{cursor:pointer!important;width:100%!important;text-align:left!important}#hierarchy-panel .tp-btnv_b{padding-left:16px!important;background:none!important;text-align:left}#hierarchy-panel .tp-btnv_b.scene-tree-selected{background-color:var(--tp-button-background-color-active)!important}#hierarchy-panel .tp-fldv_b:hover:not(.scene-tree-selected),#hierarchy-panel .tp-btnv_b:hover:not(.scene-tree-selected){background-color:var(--tp-button-background-color-hover)!important}#hierarchy-panel .tp-fldv_m{position:absolute!important;left:0!important;right:auto!important;top:50%!important;transform:translateY(-50%)!important;cursor:pointer!important;padding:0 12px!important;margin:-1px 0 0!important;background:none!important;display:flex!important;align-items:center!important;justify-content:center!important}#hierarchy-panel .tp-fldv_m svg{display:none!important;visibility:hidden!important;opacity:0!important;width:0!important;height:0!important}#hierarchy-panel .tp-fldv_m:before{font-size:18px;color:var(--tp-label-fg);line-height:1;font-weight:bolder;font-family:monospace;display:block!important;position:relative!important}#hierarchy-panel .tp-fldv.tp-fldv-expanded .tp-fldv_m:before{content:"−"!important}#hierarchy-panel .tp-fldv:not(.tp-fldv-expanded) .tp-fldv_m:before{content:"+"!important}#property-panel{pointer-events:auto;max-height:100vh;overflow-x:hidden;overflow-y:auto;width:300px;align-self:flex-start;scrollbar-gutter:stable;background-color:var(--tp-base-background-color)}#property-panel .tp-rotv{background-color:var(--tp-container-background-color)!important}#property-panel .tp-fldv_b{background-color:var(--tp-base-background-color)!important}#property-panel .tp-fldv_t{text-transform:uppercase;font-weight:700;font-size:12px}#property-panel .tp-lstv_s option{background-color:var(--tp-input-background-color)!important;color:var(--tp-input-foreground-color)!important}#property-panel .tp-p2dv_b{display:none!important}#property-panel .tp-lblv_l{padding-left:0!important}#property-panel .tp-fldv_m{display:none!important}#hierarchy-panel::-webkit-scrollbar,#property-panel::-webkit-scrollbar{width:4px;height:4px}#hierarchy-panel::-webkit-scrollbar-track,#property-panel::-webkit-scrollbar-track{background:var(--tp-container-background-color)}#hierarchy-panel::-webkit-scrollbar-thumb,#property-panel::-webkit-scrollbar-thumb{background:#fff3;border-radius:4px}#hierarchy-panel::-webkit-scrollbar-thumb:hover,#property-panel::-webkit-scrollbar-thumb:hover{background:#ffffff4d}';
class O {
  constructor(e, t) {
    this.onSelectionChange = t, this.buttons = /* @__PURE__ */ new Map(), this.selectedObject = null, this.currentScene = null, this.folderObjects = /* @__PURE__ */ new Set(), this.excludeLabels = ["__inspector_bounding_box__"], this.pane = new g({ container: e, title: "Scene Tree" }), this.searchElement = this.createSearchElement();
  }
  get searchQuery() {
    return this.searchElement.value.trim();
  }
  createSearchElement() {
    const e = document.createElement("div");
    e.className = "scene-tree-search-wrapper";
    const t = document.createElement("input");
    t.type = "text", t.placeholder = "Search...", t.className = "scene-tree-search";
    const r = this.createClearButton(t);
    return t.addEventListener("input", () => {
      r.hidden = t.value.length === 0, this.currentScene && this.rebuildTree();
    }), e.appendChild(t), e.appendChild(r), this.pane.element.querySelector(".tp-rotv_b").insertAdjacentElement("afterend", e), t;
  }
  createClearButton(e) {
    const t = document.createElement("button");
    return t.className = "scene-tree-search-clear", t.textContent = "×", t.hidden = !0, t.addEventListener("click", () => {
      e.value = "", t.hidden = !0, e.focus(), this.currentScene && this.rebuildTree();
    }), t;
  }
  refresh(e) {
    this.currentScene = e, this.rebuildTree();
  }
  selectObject(e) {
    this.selectedObject = e, this.updateSelectionIndicator(), this.onSelectionChange(e);
  }
  dispose() {
    this.searchElement.parentElement?.remove(), this.pane.dispose();
  }
  excludeFromTree(...e) {
    this.excludeLabels.push(...e), this.rebuildTree();
  }
  rebuildTree() {
    for (this.buttons.clear(), this.folderObjects.clear(); this.pane.children.length > 0; )
      this.pane.children[0].dispose();
    this.currentScene && (this.lightsFolder = this.pane.addFolder({ title: "Lights" }), this.buildHierarchy(this.currentScene, this.pane), this.lightsFolder.children.length === 0 && this.lightsFolder.dispose(), this.updateSelectionIndicator());
  }
  buildHierarchy(e, t) {
    if (this.shouldSkipObject(e) || this.searchQuery && !this.objectOrDescendantMatches(e)) return;
    const r = this.getChildrenArray(e), n = this.searchQuery ? r.filter((a) => !this.shouldSkipObject(a) && this.objectOrDescendantMatches(a)) : r, i = this.createLabel(e);
    if (n.length > 0) {
      const a = this.searchQuery ? !0 : e.type !== "Bone";
      this.createFolderNode(e, t, i, n, a);
    } else
      this.createLeafNode(e, t, i);
  }
  objectOrDescendantMatches(e) {
    return this.matchesSearch(e) ? !0 : e.children.some((t) => this.objectOrDescendantMatches(t));
  }
  matchesSearch(e) {
    return this.createLabel(e).toLowerCase().includes(this.searchQuery.toLowerCase());
  }
  shouldSkipObject(e) {
    const t = this.createLabel(e);
    return this.excludeLabels.some((r) => t.includes(r));
  }
  getChildrenArray(e) {
    const t = e.children;
    return t ? [...t] : [];
  }
  createFolderNode(e, t, r, n, i) {
    const a = t.addFolder({ title: r, expanded: i }), o = a.element.querySelector(".tp-fldv_b"), s = a.element.querySelector(".tp-fldv_m");
    o?.addEventListener("click", (l) => {
      this.isArrowClick(l.target, s) || (l.stopPropagation(), l.preventDefault(), this.selectObject(e));
    }, !0), this.buttons.set(e, { title: r, element: a.element }), this.folderObjects.add(e);
    for (const l of n)
      this.buildHierarchy(l, a);
  }
  isArrowClick(e, t) {
    return t !== null && (e === t || t.contains(e) || e.closest(".tp-fldv_m") === t);
  }
  createLeafNode(e, t, r) {
    const i = ("isLight" in e && e.isLight ? this.lightsFolder : t).addButton({ title: r });
    i.on("click", () => this.selectObject(e)), this.buttons.set(e, i);
  }
  createLabel(e) {
    const t = e.constructor.name.replace(/_/g, ""), r = e.name || "";
    return r ? `${r} (${t})` : t;
  }
  updateSelectionIndicator() {
    this.buttons.forEach((e, t) => {
      const n = this.folderObjects.has(t) ? e.element.querySelector(".tp-fldv_b") : this.findLeafButtonElement(e.element), i = this.selectedObject === t;
      n?.classList.toggle("scene-tree-selected", i);
    });
  }
  findLeafButtonElement(e) {
    let t = e.querySelector(".tp-btnv_b");
    return t || (t = e.querySelector("button")), !t && e.classList?.contains("tp-btnv") && (t = e.querySelector(".tp-btnv_b") || e), t;
  }
}
const d = {
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
      { text: "BackSide", value: w },
      { text: "DoubleSide", value: S }
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
        { text: "RepeatWrapping", value: b },
        { text: "ClampToEdgeWrapping", value: m },
        { text: "MirroredRepeatWrapping", value: f }
      ]
    },
    { path: "material.map.colorSpace", type: "list", label: "color space", options: [
      { text: "NoColorSpace", value: v },
      { text: "SRGBColorSpace", value: y },
      { text: "LinearSRGBColorSpace", value: x }
    ], needsUpdate: !0 },
    { path: "material.map", type: "image" }
    // { path: 'material.map.colorSpace'}
  ]
};
class T {
  constructor(e) {
    this.onChange = e;
  }
  bind(e, t, r) {
    if (this.propertyExists(t, r.path))
      switch (r.type) {
        case "number":
          this.bindNumber(e, t, r);
          break;
        case "string":
          this.bindString(e, t, r);
          break;
        case "boolean":
          this.bindBoolean(e, t, r);
          break;
        case "point":
          this.bindPoint(e, t, r);
          break;
        case "color":
          this.bindColor(e, t, r);
          break;
        case "list":
          this.bindList(e, t, r);
          break;
        case "readonly":
          this.bindReadonly(e, t, r);
          break;
        case "image":
          this.bingImage(e, t, r);
          break;
        default:
          this.bindString(e, t, r);
          break;
      }
  }
  bindNumber(e, t, r) {
    const { target: n, key: i } = this.getTargetAndKey(t, r.path), a = this.buildBaseOptions(r);
    r.min !== void 0 && r.max !== void 0 && (a.min = r.min, a.max = r.max, a.step = r.step !== void 0 ? r.step : void 0), this.addBindingWithCallback(e, n, i, a);
  }
  bindString(e, t, r) {
    const { target: n, key: i } = this.getTargetAndKey(t, r.path), a = this.buildBaseOptions(r);
    this.addBindingWithCallback(e, n, i, a);
  }
  bindBoolean(e, t, r) {
    const { target: n, key: i } = this.getTargetAndKey(t, r.path), a = this.buildBaseOptions(r);
    this.addBindingWithCallback(e, n, i, a);
  }
  bindPoint(e, t, r) {
    const { target: n, key: i } = this.getTargetAndKey(t, r.path), a = r.min !== void 0 ? r.min : -2e3, o = r.max !== void 0 ? r.max : 2e3, s = r.step !== void 0 ? r.step : void 0, l = {
      ...this.buildBaseOptions(r),
      x: { min: a, max: o, step: s },
      y: { min: a, max: o, step: s }
    };
    this.addBindingWithCallback(e, n, i, l);
  }
  bindColor(e, t, r) {
    const { target: n, key: i } = this.getTargetAndKey(t, r.path), a = {
      ...this.buildBaseOptions(r),
      view: "color"
    };
    if (typeof n[i] == "object") {
      const o = {
        [i]: `#${n[i].getHexString()}`
      };
      e.addBinding(o, i, a).on("change", (s) => {
        n[i].set(s.value), this.onChange(i);
      });
      return;
    }
    this.addBindingWithCallback(e, n, i, a);
  }
  bindList(e, t, r) {
    const { target: n, key: i } = this.getTargetAndKey(t, r.path), a = this.buildBaseOptions(r);
    if (r.options && r.options.length > 0) {
      const s = typeof r.options[0] == "string" ? r.options.map((l) => ({ text: l, value: l })) : r.options;
      a.options = s.reduce((l, p) => (l[p.text] = p.value, l), {});
    }
    const o = this.addBindingWithCallback(e, n, i, a);
    (i === "wrapS" || i === "wrapT") && o.on("change", (s) => {
      n.wrapS = s.value, n.wrapT = s.value, n.needsUpdate = !0;
    });
  }
  bindReadonly(e, t, r) {
    const n = r.path.split(".").pop() || r.path;
    let i = this.getValueFromPath(t, r.path);
    r.path === "name" && !i && (i = "(unnamed)");
    const a = {
      ...this.buildBaseOptions(r),
      readonly: !0
    };
    e.addBinding({ [n]: i }, n, a);
  }
  bingImage(e, t, r) {
    const { target: n, key: i } = this.getTargetAndKey(t, r.path);
    n[i] && e.addBinding(n, i, {
      label: r.label ?? "Image",
      view: "texture",
      height: 80
    });
  }
  getTargetAndKey(e, t) {
    const r = t.split("."), n = this.getValueFromPath(e, t, !0), i = r[r.length - 1];
    return { target: n, key: i };
  }
  getValueFromPath(e, t, r = !1) {
    const n = t.split("."), i = r ? n.length - 1 : n.length;
    let a = e;
    for (let o = 0; o < i; o++)
      a = a?.[n[o]];
    return a;
  }
  buildBaseOptions(e) {
    const t = { needsUpdate: e.needsUpdate ?? !1 };
    return e.label && (t.label = e.label), t;
  }
  addBindingWithCallback(e, t, r, n) {
    const i = e.addBinding(t, r, n);
    return i.on("change", (a) => {
      this.onChange(r), n.needsUpdate && (t.needsUpdate = !0);
    }), i;
  }
  propertyExists(e, t) {
    const r = t.split(".");
    let n = e;
    for (let i = 0; i < r.length - 1; i++)
      if (n = n?.[r[i]], n == null) return !1;
    return n != null && r[r.length - 1] in n;
  }
}
class E {
  constructor(e) {
    this.scene = e, this.helpers = /* @__PURE__ */ new Map();
  }
  addHelperToggles(e, t) {
    this.helperDescriptors(t).forEach(({ label: r, createFn: n }) => {
      this.addHelperToggle(e, r, t, n);
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
        const t = e, r = [
          { label: "Light Helper", createFn: () => new B(t, 1) }
        ];
        return t.castShadow && r.push({ label: "Shadow Camera", createFn: () => new h(t.shadow.camera) }), r;
      }
      case "OrthographicCamera":
      case "PerspectiveCamera":
        return [{ label: "Camera", createFn: () => new h(e) }];
      default:
        return [{ label: "Box", createFn: () => new C(e) }];
    }
  }
  helperKey(e, t) {
    return `${e.uuid}-${t}`;
  }
  enable(e, t, r) {
    const n = this.helperKey(e, t), i = r();
    this.scene.add(i), this.helpers.set(n, i);
  }
  disable(e, t) {
    const r = this.helperKey(e, t), n = this.helpers.get(r);
    n && (this.scene.remove(n), n.dispose(), this.helpers.delete(r));
  }
  addHelperToggle(e, t, r, n) {
    const i = this.helperKey(r, t), a = { show: this.helpers.has(i) };
    e.addBinding(a, "show", { label: t }).on("change", (s) => {
      s.value ? this.enable(r, t, n) : this.disable(r, t);
    });
  }
}
class L {
  constructor(e, t) {
    this.folders = /* @__PURE__ */ new Map(), this.selectedObject = null, this.propertiesTriggeringRefresh = [], this.propertiesTriggeringRebuild = ["castShadow"], this.isRefreshing = !1, this.extraProperties = {}, this.overriddenProperties = {}, this.pane = new g({ container: e, title: "Properties" }), this.pane.registerPlugin(P), this.helperManager = new E(t), this.propertyBinder = new T((r) => {
      this.isRefreshing || (this.propertiesTriggeringRefresh.includes(r) && this.pane.refresh(), this.propertiesTriggeringRebuild.includes(r) && setTimeout(() => this.refresh(), 0));
    });
  }
  addProperties(e, t) {
    const r = this.extraProperties[e] ?? [];
    this.extraProperties[e] = [...r, ...t];
  }
  overrideProperties(e, t) {
    this.overriddenProperties[e] = t;
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
  dispose() {
    this.clearBindings(), this.pane.dispose(), this.helperManager.dispose();
  }
  addProperies(e) {
    for (const t of Object.keys(d)) {
      const r = this.overriddenProperties[t] ?? d[t] ?? [], n = this.extraProperties[t] ?? [], i = [...r, ...n], a = this.pane.addFolder({ title: t, expanded: !0 });
      for (const o of i)
        this.propertyBinder.bind(a, e, o);
      a.children.length === 0 ? a.dispose() : this.folders.set(t, a);
    }
  }
  addHelpersFolder(e) {
    const t = this.pane.addFolder({ title: "Helpers", expanded: !0 });
    this.helperManager.addHelperToggles(t, e), t.children.length === 0 ? t.dispose() : this.folders.set("Helpers", t);
  }
  clearBindings() {
    for (this.folders.forEach((e) => e.dispose()), this.folders.clear(); this.pane.children.length > 0; )
      this.pane.children[0].dispose();
  }
}
let u = !1;
function F() {
  if (u) return;
  const c = document.createElement("style");
  c.textContent = _, document.head.appendChild(c), u = !0;
}
class M {
  constructor(e) {
    this.scene = e, this.panelsContainer = null, F();
    const { hierarchyContainer: t, propertyContainer: r } = this.createPanelContainers();
    this.hierarchyPanel = new O(t, this.onObjectSelected.bind(this)), this.propertyPanel = new L(r, this.scene), this.refresh();
  }
  createPanelContainers() {
    const e = document.createElement("div");
    e.id = "panels-container", document.body.appendChild(e), this.panelsContainer = e;
    const t = document.createElement("div");
    t.id = "hierarchy-panel", e.appendChild(t);
    const r = document.createElement("div");
    return r.id = "property-panel", e.appendChild(r), { hierarchyContainer: t, propertyContainer: r };
  }
  onObjectSelected(e) {
    this.propertyPanel.setSelectedObject(e);
  }
  refresh() {
    this.hierarchyPanel.refresh(this.scene);
  }
  update() {
    this.propertyPanel.helperManager.update();
  }
  selectObject(e) {
    this.hierarchyPanel.selectObject(e);
  }
  excludeFromTree(...e) {
    this.hierarchyPanel.excludeFromTree(...e);
  }
  addProperties(e, t) {
    this.propertyPanel.addProperties(e, t);
  }
  overrideProperties(e, t) {
    this.propertyPanel.overrideProperties(e, t);
  }
  dispose() {
    this.hierarchyPanel.dispose(), this.propertyPanel.dispose(), this.panelsContainer?.parentNode && (this.panelsContainer.parentNode.removeChild(this.panelsContainer), this.panelsContainer = null);
  }
}
export {
  d as DEFAULT_PROPERTIES,
  T as PropertyBinder,
  L as PropertyInspectorPanel,
  O as SceneHierarchyPanel,
  M as ThreeSceneInspector
};
//# sourceMappingURL=three-scene-inspector.es.js.map
