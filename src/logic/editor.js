import { setProject } from "../core/state.js";
import { renderEditor } from "./render.js";

export function createBlankProject() {
  setProject({
    pages: [],
    components: []
  });

  renderEditor();
}

export function createFromDesign() {
  setProject({
    pages: ["home"],
    components: []
  });

  renderEditor();
}

export function enableTextEditing(element) {
  element.contentEditable = true;
  element.focus();

  element.addEventListener("blur", () => {
    element.contentEditable = false;
  }, { once: true });
}