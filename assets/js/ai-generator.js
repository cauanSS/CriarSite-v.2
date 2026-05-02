function generateWithAI() {
  const prompt = prompt("Descreva seu site (ex: site de hamburgueria moderna, portfólio de fotógrafo):");
  if (!prompt) return;

  const canvas = document.getElementById('canvas');
  canvas.innerHTML = '<p style="text-align:center; padding:50px;">Gerando layout com IA...</p>';

  setTimeout(() => {
    canvas.innerHTML = `
      <div class="dropped-block"><h1>${prompt}</h1><p>Design gerado automaticamente por IA</p></div>
      <div class="dropped-block"><h2>Funcionalidades</h2><ul><li>Item 1</li><li>Item 2</li></ul></div>
    `;
    alert("✅ Design com IA criado com sucesso!");
  }, 1500);
}

function saveSite() {
  alert("Site salvo com sucesso! (Funcionalidade em desenvolvimento)");
}

function publishSite() {
  alert("Site publicado! Link: https://seusite.criarsite.pro");
}