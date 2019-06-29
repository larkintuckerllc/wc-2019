(() => {
  const template = document.createElement('template');
  template.innerHTML = `
  <style>
    #root {
      text-align: center;
    }
  </style>
  <div id="root">
    <span id="root__value"></span>
    <button id="root__button">Increment</button>
  </div>
  `;
  class HelloWorld extends HTMLElement {
    private buttonEl: HTMLElement | null = null;
    private value = 0;
    private valueEl: HTMLElement | null = null;

    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'closed' });
      shadow.appendChild(template.content.cloneNode(true));
      this.valueEl = shadow.getElementById('root__value');
      this.buttonEl = shadow.getElementById('root__button');
      if (this.valueEl === null || this.buttonEl === null) {
        return;
      }
      this.valueEl.textContent = this.value.toString();
      this.buttonEl.addEventListener('click', this.handleClick);
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
