import { ACTIONS } from "../contracts/actions.js";

export function renderHome() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div data-page="home">
      <h1>Criar Site</h1>
      <button data-action="${ACTIONS.CREATE_BLANK}">Criar do zero</button>
      <button data-action="${ACTIONS.CREATE_FROM_DESIGN}">Usar design</button>
    </div>
  `;
}

export function renderEditor() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div data-page="editor">
      <h2>Editor</h2>
      <div id="editor-canvas">
        <p data-editable="true">Clique para editar</p>
      </div>
    </div>
  `;
}