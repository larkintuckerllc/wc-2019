(() => {
  class HelloWorld extends HTMLElement {
    private buttonEl: HTMLElement | null = null;
    private value = 0;
    private valueEl: HTMLElement | null = null;

    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'closed' });
      const styleEl = document.createElement('style');
      styleEl.textContent = `
      #root {
        text-align: center;
      }
      `;
      const rootEl = document.createElement('div');
      rootEl.id = 'root';
      this.valueEl = document.createElement('div');
      this.valueEl.id = 'root__value';
      this.valueEl.textContent = this.value.toString();
      this.buttonEl = document.createElement('button');
      this.buttonEl.id = 'root__button';
      this.buttonEl.textContent = 'Increment';
      this.buttonEl.addEventListener('click', this.handleClick);
      shadow.appendChild(styleEl);
      rootEl.appendChild(this.valueEl);
      rootEl.appendChild(this.buttonEl);
      shadow.appendChild(rootEl);
    }

    public disconnectedCallback() {
      if (this.buttonEl === null) {
        return;
      }
      this.buttonEl.removeEventListener('click', this.handleClick);
    }

    private handleClick = () => {
      if (this.valueEl === null) {
        return;
      }
      this.value += 1;
      this.valueEl.textContent = this.value.toString();
    };
  }
  window.customElements.define('hello-world', HelloWorld);
})();
