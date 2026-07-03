// Função para aumentar e diminuir a fonte de forma geral
function changeFontSize(action) {
    const body = document.body;
    // Pega o tamanho atual da fonte computado pelo navegador
    let currentSize = parseFloat(window.getComputedStyle(body).fontSize);

    if (action === 'increase') {
        body.style.fontSize = (currentSize + 2) + 'px';
    } else if (action === 'decrease') {
        // Evita que a fonte fique infinitamente pequena e ilegível
        if (currentSize > 12) {
            body.style.fontSize = (currentSize - 2) + 'px';
        }
    }
}

// Função para ativar/desativar Alto Contraste
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// Função para mostrar/esconder a descrição de cada imagem de forma independente
function toggleDescription(descId) {
    const descElement = document.getElementById(descId);
    
    if (descElement.classList.contains('hidden')) {
        descElement.classList.remove('hidden');
    } else {
        descElement.classList.add('hidden');
    }
}
