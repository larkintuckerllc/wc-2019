import { customElement, html, LitElement, property } from 'lit-element';
import './helloView';

@customElement('hello-world')
class HelloWorld extends LitElement {
  @property({ type: Number })
  private value = 0;

  public render() {
    return html`
      <hello-view
        @increment="${this.handleIncrement}"
        value="${this.value.toString()}"
      ></hello-view>
    `;
  }

  private handleIncrement() {
    this.value += 1;
  }
}
