function exibir(categoria) {
    let elementos = document.getElementsByClassName('prod');
    for (let i = 0; i < elementos.length; i++) {
        if (categoria === elementos[i].id) {
            elementos[i].style = "display: inline-block";
        }
        else {
            elementos[i].style = "display: none";
        }
    }

}

function exibirTodos() {

    let elementos = document.getElementsByClassName('prod');
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style = "display: inline-block";
    }
}

let destaque = (imagem) => {
    if (imagem.width === 260) {
        imagem.width = 120;
    }
    else {
        imagem.width = 260;
    }
}

let redimensiona = (imagem) => {
    if (imagem.width === 120) {
        imagem.width = 260;
    }
    else {
        imagem.width = 120;
    }
}
