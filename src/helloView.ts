import template from './template.html';

const templateEl = document.createElement('template');
templateEl.innerHTML = template;
class HelloView extends HTMLElement {
  private buttonEl: HTMLElement | null = null;
  private valueEl: HTMLElement | null = null;

  static get observedAttributes() {
    return ['value'];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.appendChild(templateEl.content.cloneNode(true));
    this.valueEl = shadow.getElementById('root__value');
    this.buttonEl = shadow.getElementById('root__button');
    if (this.buttonEl === null) {
      return;
    }
    this.buttonEl.addEventListener('click', this.handleClick);
  }

  public attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (this.valueEl === null) {
      return;
    }
    switch (name) {
      case 'value':
        this.valueEl.textContent = newValue;
        break;
    }
  }

  public disconnectedCallback() {
    if (this.buttonEl === null) {
      return;
    }
    this.buttonEl.removeEventListener('click', this.handleClick);
  }

  private handleClick = () => {
    this.dispatchEvent(new CustomEvent('increment'));
  };
}
window.customElements.define('hello-view', HelloView);
