import { LitElement, html } from "lit";
import "bootstrap/dist/css/bootstrap.min.css";

export class CardElement extends LitElement {
  static properties = {
    personajes: [],
  };
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();

    fetch("https://randomuser.me/api/?page=3&results=10&seed=abc")
      .then((resp) => resp.json())
      .then((data) => {
          this.personajes = data.results;
          console.log(this.personajes);
        });
  }

  render() {
    const personajesArray = [];
    for (const i of this.personajes) {
      personajesArray.push(html`
        <div class="col-md-4 mb-3">
          <div class="card-fluid" style="width: 18rem;">
            <img src="${i.picture.large}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${i.name.first} ${i.name.last}</h5>
              <p class="card-text">
                ${i.email}
              </p>
            </div>
          </div>
        </div>
      `);
    }
    return html`
      <div class="container">
        <div class="row mt-5">
            ${personajesArray}
        </div>
      </div>
    `;
  }
}

window.customElements.define("card-element", CardElement);
