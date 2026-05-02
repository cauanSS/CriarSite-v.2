function generateWithAI() {
  const prompt = prompt("Descreva o site (ex: restaurante japonês moderno, portfólio de designer):");
  if (!prompt) return;
  const canvas = document.getElementById('canvas');
  canvas.innerHTML = '<p style="text-align:center;padding:100px;color:#64748b;">Gerando layout premium com IA...</p>';
  setTimeout(() => {
    canvas.innerHTML = `
      <div class="dropped-block"><h1>${prompt}</h1><p>Design gerado com harmonia de cores e tipografia moderna.</p></div>
      <div class="dropped-block"><h2>Funcionalidades</h2><ul><li>Item premium</li></ul></div>
    `;
  }, 1400);
}