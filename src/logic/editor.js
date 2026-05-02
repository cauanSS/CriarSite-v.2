import { setProject } from "../core/state.js";
import { showPage } from "../core/router.js";

export function createBlankProject() {
  setProject({
    pages: [],
    components: []
  });

  showPage("editor");
}

export function createFromDesign() {
  setProject({
    pages: ["home"],
    components: []
  });

  showPage("editor");
}

export function enableTextEditing(element) {
  element.contentEditable = true;
  element.focus();

  element.addEventListener("blur", () => {
    element.contentEditable = false;
  }, { once: true });
}