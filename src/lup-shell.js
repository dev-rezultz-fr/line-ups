import { LitElement, html, css } from "lit-element";
import { lupStyles } from "./lup-styles.js";
import "@material/mwc-snackbar";

class LupShell extends LitElement {
  static get properties() {
    return {
      page: Object,
      loading: Boolean
    };
  }
  firstUpdated() {}
  constructor() {
    super();
    this.page = null;
    this.loading = false;
  }
  static get styles() {
    return [
      lupStyles,
      css`
        section > .view {
          display: none;
          z-index: 1;
        }
        section > .view[active] {
          display: block;
        }
        slot {
          z-index: 1001;
        }
      `
    ];
  }
  render() {
    return html`
      <section id="content">
        coucou
      </section>
      <mwc-snackbar id="toast"></mwc-snackbar>
    `;
  }
  _toast(t) {
    this.shadowRoot.getElementById("toast").labelText = t;
    this.shadowRoot.getElementById("toast").open();
  }
  goto(loc) {
    loc = loc || window.location;
    this.shadowRoot.getElementById("toast").innerHTML = loc;
  }
}
customElements.define("lup-shell", LupShell);
