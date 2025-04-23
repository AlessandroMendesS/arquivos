let clube = [];

function adicionarTime() {
    let inputClube = document.getElementById("clube");
    let nome = inputClube.value;

    if (nome === "") {
        alert("Inválido, Adicione um time Professor.");
        return;
    }

    let clubes = { nome };
    clube.push(clubes);
    inputClube.value = "";
}

function atualizarListaClubes() {
    let listaClubes = document.getElementById("listaClubes");
    listaClubes.innerHTML = "";
    clube.forEach(function (clubes) {
        let itemLista = document.createElement("li");
        itemLista.textContent = `${clubes.nome}`;
        listaClubes.appendChild(itemLista);
    });
}

function listarClubes() {
    atualizarListaClubes();
}

function vs() {
    if (clube.length % 2 !== 0) {
        alert("Não é possível gerar a tabela de jogos, pois o número de clubes é ímpar!");
        return;
    } else {
        let partidas = [];
        for (let i = 0; i < clube.length / 2; i++) { 
            partidas.push(`${clube[i].nome} x ${clube[clube.length - 1 - i].nome}`);
        }
        let listaPartidas = "<h2>Tabela de Jogos:</h2><ul>";
        for (let i = 0; i < partidas.length; i++) { 
            listaPartidas += `<li>${partidas[i]}</li>`;
        }
        listaPartidas += "</ul>";
        document.getElementById("jogos").innerHTML = listaPartidas; 
    }
}