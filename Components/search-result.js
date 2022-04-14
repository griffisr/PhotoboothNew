
const template = document.querySelector('template');
const templateContent = template.content;
document.body.appendChild(templateContent);

customElements.define('foo-paragraph',
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.querySelector('template');
      let templateContent = template.content;
      const shadowRoot = this.attachShadow({
          mode: 'open'
        })
        .appendChild(templateContent.cloneNode(true));
    }
  })
