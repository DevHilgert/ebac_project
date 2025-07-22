
document.addEventListener('DOMContentLoaded', function() {

    const formContato = document.getElementById('form-contato');
    const tabelaContatos = document.getElementById('tabela-contatos').getElementsByTagName('tbody')[0];

   
    formContato.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const telefone = document.getElementById('telefone').value.trim();

        if (nome && telefone) {
            const novaLinha = tabelaContatos.insertRow();

            const celulaNome = novaLinha.insertCell(0);
            const celulaTelefone = novaLinha.insertCell(1);

            celulaNome.textContent = nome;
            celulaTelefone.textContent = telefone;

            document.getElementById('nome').value = '';
            document.getElementById('telefone').value = '';
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});