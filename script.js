fetch('produtos.json')
  .then(response => response.json())
  .then(produtos => {
    const container = document.getElementById('produtos');
    produtos.forEach(produto => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h2>${produto.nome}</h2>
        <p>Preço: ${produto.preco}</p>
        <p>Loja: ${produto.loja}</p>
        <a href="${produto.link}" target="_blank">Ver produto</a>
        <hr />
      `;
      container.appendChild(div);
    });
  });