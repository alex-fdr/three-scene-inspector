export class SceneTreeSearch {
  readonly element: HTMLInputElement;

  constructor(paneElement: HTMLElement, private onChange: (query: string) => void) {
    this.element = document.createElement('input');
    this.element.type = 'text';
    this.element.placeholder = 'Search...';
    this.element.className = 'scene-tree-search';

    const titleBtn = paneElement.querySelector('.tp-rotv_b');
    if (titleBtn) {
      titleBtn.insertAdjacentElement('afterend', this.element);
    } else {
      paneElement.prepend(this.element);
    }

    this.element.addEventListener('input', () => {
      this.onChange(this.element.value.trim());
    });
  }

  dispose(): void {
    this.element.remove();
  }
}
