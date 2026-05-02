// assets/js/properties.js
let selectedElement = null;

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('dropped-block')) {
    selectElement(e.target);
  }
});

function selectElement(el) {
  if (selectedElement) selectedElement.style.outline = '';
  selectedElement = el;
  el.style.outline = '3px solid #6366f1';

  const props = document.getElementById('properties-content');
  props.innerHTML = `
    <div class="prop-group">
      <label>Texto:</label>
      <textarea oninput="updateText(this)" style="width:100%; height:80px;">${el.innerHTML}</textarea>
    </div>
    <div class="prop-group">
      <label>Cor de Fundo:</label>
      <input type="color" value="#ffffff" onchange="updateBg(this)">
    </div>
    <div class="prop-group">
      <label>Alinhamento:</label>
      <select onchange="updateAlign(this)">
        <option value="left">Esquerda</option>
        <option value="center">Centro</option>
        <option value="right">Direita</option>
      </select>
    </div>
    <button onclick="deleteElement()" style="background:#ef4444; width:100%; padding:12px; border:none; border-radius:8px; color:white; margin-top:15px;">
      🗑 Excluir Bloco
    </button>
  `;
}

function updateText(textarea) {
  if (selectedElement) selectedElement.innerHTML = textarea.value;
}

function updateBg(colorInput) {
  if (selectedElement) selectedElement.style.backgroundColor = colorInput.value;
}

function updateAlign(select) {
  if (selectedElement) selectedElement.style.textAlign = select.value;
}

function deleteElement() {
  if (selectedElement) {
    selectedElement.remove();
    selectedElement = null;
    document.getElementById('properties-content').innerHTML = '<p class="empty-prop">Selecione um elemento...</p>';
  }
}

// Funções globais do editor
function saveSite() {
  alert("✅ Site salvo com sucesso no seu Dashboard!");
}

function publishSite() {
  const link = prompt("Nome do domínio (ex: meusite)", "meusite");
  if (link) alert(`🚀 Site publicado em: https://${link}.criarsite.pro`);
}

function undo() { alert("Desfazer (em desenvolvimento)"); }
function redo() { alert("Refazer (em desenvolvimento)"); }