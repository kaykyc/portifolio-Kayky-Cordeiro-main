// Array de textos para serem exibidos e reexibidos
var textos = [
    "Desenvolvedor Web",
    "Apaixonado por Tecnologia",
    "Teste",
    "Não sei", 
    "Olá"
];

// Índice do texto atual
var indiceTextoAtual = 0;

// Tempo de espera entre cada caractere (em milissegundos)
var tempoEspera = 70; // Tempo de espera entre os caracteres

// Elemento onde o texto será exibido
var elementoNome = document.getElementById('nome');

// Função para exibir o texto com efeito de digitação
function digitarTexto() {
    var textoAtual = "";
    var texto = textos[indiceTextoAtual];
    var i = 0;
    var intervalo = setInterval(function() {
        textoAtual += texto[i];
        elementoNome.textContent = textoAtual;
        elementoNome.style.color = '#FFFFFF'; // Define a cor enquanto digita
        i++;
        if (i >= texto.length) {
            clearInterval(intervalo);
            setTimeout(reescreverTexto, 100); // Espera 100 milissegundos antes de começar a reescrever o texto
        }
    }, tempoEspera);
}

// Função para reescrever o texto
function reescreverTexto() {
    var texto = textos[indiceTextoAtual];
    var i = texto.length - 1;
    var intervalo = setInterval(function() {
        var textoAtual = texto.substring(0, i + 1);
        elementoNome.textContent = textoAtual;
        elementoNome.style.color = '#FFFFFF'; // Define a cor enquanto reescreve
        i--;
        if (i < 0) {
            clearInterval(intervalo);
            indiceTextoAtual = (indiceTextoAtual + 1) % textos.length; // Avança para o próximo texto no array
            digitarTexto(); // Começa a exibir o próximo texto imediatamente
        }
    }, tempoEspera / 2); // Tempo de espera reduzido para a metade
}


// Inicia o efeito de digitação com o primeiro texto do array
digitarTexto();

function toggleOptions(id) {
    var options = document.getElementsByClassName('opcoes');
    for (var i = 0; i < options.length; i++) {
        if (options[i].id === id) {
            if (options[i].style.display === 'block') {
                options[i].style.display = 'none'; // Esconde as opções se estiverem visíveis
            } else {
                options[i].style.display = 'block'; // Mostra as opções se estiverem ocultas
            }
        } else {
            options[i].style.display = 'none'; // Esconde as outras opções
        }
    }
}

