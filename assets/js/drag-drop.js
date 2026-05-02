document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.block');
  const canvas = document.getElementById('canvas');

  blocks.forEach(block => {
    block.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', block.dataset.type);
    });
  });

  canvas.addEventListener('dragover', (e) => e.preventDefault());

  canvas.addEventListener('drop', (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('text/plain');
    
    const element = document.createElement('div');
    element.className = 'dropped-block';
    element.contentEditable = true;
    element.innerHTML = `<h2>${type.toUpperCase()}</h2><p>Clique para editar...</p>`;
    canvas.appendChild(element);
  });
});