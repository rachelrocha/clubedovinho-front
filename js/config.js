const INPUT_CATEGORIA = document.getElementById('modulo_categoria');
const INPUT_CLIENTE = document.getElementById('modulo_cliente');
const INPUT_PAIS = document.getElementById('modulo_pais');
const INPUT_PRODUTO = document.getElementById('modulo_produto');
const INPUT_PEDIDO = document.getElementById('modulo_pedido');

const SPAN_QUANTIDADE = document.getElementById('resultado_quantidade');

let qtd= 0;

function mudarQuantidade(evento){
    if (evento.checked ===true) {
        qtd +=1;
    }else {
        qtd-=1;
    }
    SPAN_QUANTIDADE.innerHTML = qtd;
}


function habilitarDarkmode(event){

    if (event.checked === false){
        localStorage.setItem('darkmode', 'nao');
        location.href = "";
        return;
    }

    localStorage.setItem('darkmode', 'sim');

    document.getElementsByTagName("head")[0].innerHTML += `
    
    <link rel="stylesheet" href="../css/darkmode.css">
    
    `;


}