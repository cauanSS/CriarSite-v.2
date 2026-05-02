import { ACTIONS } from "../contracts/actions.js";
import { createBlankProject, createFromDesign, enableTextEditing } from "./editor.js";

// ações (botões do Grok)
document.addEventListener("click", (e) => {
  const action = e.target.dataset.action;

  if (!action) return;

  switch (action) {
    case ACTIONS.CREATE_BLANK:
      createBlankProject();
      break;

    case ACTIONS.CREATE_FROM_DESIGN:
      createFromDesign();
      break;
  }
});

// edição de texto (elementos do Grok)
document.addEventListener("click", (e) => {
  if (e.target.dataset.editable === "true") {
    enableTextEditing(e.target);
  }
});