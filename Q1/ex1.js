
  function adicionar() {
    let input = document.getElementById("tarefa");
    let texto = input.value;

  
    if (texto === "") return;

    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = texto;

    let botaoFeito = document.createElement("button");
    botaoFeito.textContent = "Concluir";
    botaoFeito.style.color = '#000'
    botaoFeito.onclick = function () {
      span.classList.toggle("feito"); // faz o traço para conclusão da tarefaaaa, finalmente 
     
    };

    let botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";
    botaoEditar.style.backgroundColor = 'yellow'
    botaoEditar.style.color = '#000'
    botaoEditar.onclick = function () {
      let novoTexto = prompt("Editar tarefa:", span.textContent);
      if (novoTexto) span.textContent = novoTexto;
    };

    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.style.backgroundColor = 'red'
    botaoRemover.style.color = '#000'
    botaoRemover.onclick = function () {
      li.remove();
     
    };

    li.appendChild(span);
    li.appendChild(botaoFeito);
    li.appendChild(botaoEditar);
    li.appendChild(botaoRemover);

    document.getElementById("lista").appendChild(li);
    input.value = "";
   
  }

  function limparTudo() {
    document.getElementById("lista").innerHTML = "";
  }