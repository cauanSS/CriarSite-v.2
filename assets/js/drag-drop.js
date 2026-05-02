document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.block');
  const canvas = document.getElementById('canvas');

  blocks.forEach(block => {
    block.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', block.dataset.type);
    });
  });

  canvas.addEventListener('dragover', e => e.preventDefault());

  canvas.addEventListener('drop', e => {
    e.preventDefault();
    const type = e.dataTransfer.getData('text/plain');
    
    const element = document.createElement('div');
    element.className = 'dropped-block';
    element.contentEditable = true;
    
    // Templates básicos por tipo
    if (type === 'hero') {
      element.innerHTML = `<h1 style="font-size:3rem; text-align:center;">Título Impactante</h1><p style="text-align:center; font-size:1.3rem;">Subtítulo com chamada para ação</p>`;
    } else if (type === 'features') {
      element.innerHTML = `<h2>Funcionalidades</h2><ul><li>✅ Recurso 1</li><li>✅ Recurso 2</li></ul>`;
    } else {
      element.innerHTML = `<h2>${type.toUpperCase()}</h2><p>Conteúdo editável - clique para alterar</p>`;
    }
    
    canvas.appendChild(element);
  });
});