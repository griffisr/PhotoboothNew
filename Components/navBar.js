    class NavBar extends HTMLElement {
        constructor(){
            super();
            this.attachShadow({mode: 'open'});
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            this.shadowRoot.querySelector('h3').innerText =
            this.getAttribute('name');
        }

        connectedCallback() {
            template.innerHTML = `
            <div><p>test</p></div>
           `;
        }
    


    }

    window.customElements.define('nav-bar', NavBar)