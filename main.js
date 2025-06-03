const form = document.getElementById('forIn');
const nome = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarlinha();

})

function adicionarlinha(){
    const InputNome = document.getElementById('NomeUs');
    const InputNumero = document.getElementById('Numero');

    if (nome.includes(InputNome.value)){
        alert(`O contato: ${InputNome.value} ja foi inserido`);
    } else {
        nome.push(InputNome.value);
        numero.push(parseFloat(InputNumero.value));

        let linha = '<tr>';
        linha += `<td>${InputNome.value}</td>`;
        linha += `<td>${InputNumero.value}</td>`;
        linha += '</tr>';

        linhas += linha;

        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }
}