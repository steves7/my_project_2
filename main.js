const form = document.getElementById("form-contato");
const nome = [];
const numero= [];

let linhas = "";

form.addEventListener("submit", function (e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha(){
    const inputNomeContato = document.getElementById("nome-contato");
    const inputNumeroContato = document.getElementById("numero-contato");

if (nome.includes(inputNomeContato.value)){
    alert (`O nome ${inputNomeContato.value} ja foi cadastrado`);
} else{
    nome.push(inputNomeContato.value);
    numero.push(inputNumeroContato.value);

    let linha = "<tr>";
    linha += `<th>${inputNomeContato.value}</th>`;
    linha += `<th>${inputNumeroContato.value}</th>`;

    linha += "</tr>";

    linhas += linha;
}
inputNomeContato.value = "";
inputNumeroContato.value = "";
}

function atualizaTabela (){
    const bodyTabela = document.getElementById("tbody");
    bodyTabela.innerHTML = linhas;
}

