// Quando o botão for selecionado, abre o modal confiurado no botão 'openModalBtn'
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão pelo ID
    var openModalBtn = document.getElementById('openModalBtn');
    
    // Adiciona um ouvinte de evento de clique ao botão
    openModalBtn.addEventListener('click', function() {
        // Seleciona o modal pelo ID e abre o modal
        var myModal = new bootstrap.Modal(document.getElementById('openModalBtn'));
        myModal.show();
    });
});

//fecha modal
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão pelo ID
    var tornarInvisivelBtn = document.getElementById('closeModalBtn');

    // Adiciona um ouvinte de evento de clique ao botão
    tornarInvisivelBtn.addEventListener('click', function() {
        // Seleciona a div pelo ID e modifica a propriedade CSS para torná-la invisível
        var minhaDiv = document.getElementById('closeModalBtn');
        minhaDiv.style.display = 'none';

        location.reload();
    });
});

// lógica para exibir alerta após o submit
document.addEventListener("DOMContentLoaded", function() {
    var meuFormulario = document.getElementById('meuFormulario');
    var alerta = document.getElementById('alerta');

    meuFormulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o comportamento padrão de envio do formulário

        if (Validate() === 0) {
            var formData = new FormData(meuFormulario);

            fetch('https://localhost:7227/client', {
                method: 'POST',
                body: formData
            })
        
        
             alerta.innerHTML = '<div class="alert alert-success" role="alert">Recebemos sua     solicitação com sucesso! Acompanhe seu e-mail :)</div>';
             setTimeout(function() {
                 alerta.innerHTML = '';
             }, 3500); // Remover alerta após 5 segundos
        
           
        } 
    });
});


function  Validate() {

    var nome = meuFormulario.Nome.value;
    var sobrenome = meuFormulario.Sobrenome.value;
    var email = meuFormulario.Email.value
    var telefone = meuFormulario.Telefone.value
    var pais = meuFormulario.Pais.value
    var estado = meuFormulario.Estado.value


    let erro = 0;

    if (nome == "" ||  sobrenome == ""  ||  email == "" ||  telefone == "" ||      pais == "" ||  estado == "") {
      erro = 1
    }

    return erro;
}

