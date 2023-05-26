const form = document.getElementById('form-agenda');
const nome = [];
const telefone = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone');

    if (telefone.includes(inputTelefone.value)) {
        alert(`Este telefone ${inputTelefone.value} já existe`);
    } else {
        nome.push(inputNomeContato.value);
        telefone.push(inputTelefone.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';
    
        linhas = linha;
    }

    inputNomeContato.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML += linhas;
}


