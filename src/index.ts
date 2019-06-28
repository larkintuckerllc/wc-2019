window.addEventListener('WebComponentsReady', () => {
  class HelloWorld extends HTMLElement {
    private flowerEl: HTMLElement | null = null;
    private redEl: HTMLElement | null = null;
    private blueEl: HTMLElement | null = null;

    constructor() {
      super();
      this.handleRedClick = this.handleRedClick.bind(this);
      this.handleBlueClick = this.handleBlueClick.bind(this);
      const shadowRootEl = this.attachShadow({ mode: 'closed' });
      shadowRootEl.innerHTML = `
        <style>
          #root {
            display: inline-block;
            font-size: 0px;
          }
          .block {
            display: inline-block;
            width: 100px;
            height: 100px;
          }
          .block--red {
            background-color: red;
          }
          .block--blue {
            background-color: blue;
          }
          #root__flower {
            font-size: 20px;
          }
        </style>
        <div id="root">
          <div id="root__red" class="block block--red"></div>
          <div id="root__blue" class="block block--blue"></div>
          <div id="root__flower">&nbsp;</div>
        </div>
      `;
      this.flowerEl = shadowRootEl.getElementById('root__flower');
      this.redEl = shadowRootEl.getElementById('root__red');
      this.blueEl = shadowRootEl.getElementById('root__blue');
      if (this.redEl === null || this.blueEl === null) {
        return;
      }
      this.redEl.addEventListener('click', this.handleRedClick);
      this.blueEl.addEventListener('click', this.handleBlueClick);
    }

    public disconnectedCallback() {
      if (this.redEl === null || this.blueEl === null) {
        return;
      }
      this.redEl.removeEventListener('click', this.handleRedClick);
      this.blueEl.removeEventListener('click', this.handleBlueClick);
    }

    private handleRedClick(e: MouseEvent) {
      if (this.flowerEl == null) {
        return;
      }
      this.flowerEl.innerHTML = 'Red';
    }

    private handleBlueClick(e: MouseEvent) {
      if (this.flowerEl == null) {
        return;
      }
      this.flowerEl.innerHTML = 'Blue';
    }
  }

  window.customElements.define('hello-world', HelloWorld);
  const rootEl = document.getElementById('root');
  if (rootEl === null) {
    return;
  }
  rootEl.appendChild(document.createElement('hello-world'));
  rootEl.appendChild(document.createElement('hello-world'));
});
