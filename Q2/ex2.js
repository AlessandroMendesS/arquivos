let total = 0;

function atualizarTotal() {
  document.getElementById("total").textContent = total;
}

function adicionar() {
  const nome = document.getElementById("operador").value.trim();
  const qtd = parseInt(document.getElementById("pecas").value);

  if (nome === "" || isNaN(qtd)) return;

  const li = document.createElement("li");
  li.textContent = `${nome} - ${qtd} peças `;

  const btnExcluir = document.createElement("button");
  btnExcluir.textContent = "Excluir";
  btnExcluir.onclick = function () {
    li.remove();
    total -= qtd;
    atualizarTotal();
  };

  li.appendChild(btnExcluir);
  document.getElementById("lista").appendChild(li);

  total += qtd;
  atualizarTotal();

  document.getElementById("operador").value = "";
  document.getElementById("pecas").value = "";
}