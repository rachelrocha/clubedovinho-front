const INPUT_NUMERO = document.getElementById('card_numero');
const INPUT_TITULAR = document.getElementById('card_titular');
const INPUT_CVV = document.getElementById('card_cvv');
const SELECT_MES = document.getElementById('card_mes');
const SELECT_ANO = document.getElementById('card_ano');

const SPAN_NUMERO = document.getElementById('resultado_numero');
const SPAN_TITULAR = document.getElementById('resultado_nome');
const SPAN_ANO = document.getElementById('resultado_ano');
const SPAN_MES = document.getElementById('resultado_mes');
const SPAN_CVV = document.getElementById('resultado_cvv');


SELECT_ANO.innerHTML += `<option>2025</option>`;
SELECT_ANO.innerHTML += `<option>2026</option>`;
SELECT_ANO.innerHTML += `<option>2027</option>`;


let hoje = new Date ();

let anoFim = hoje.getFullYear() + 10;

for (let ano= hoje.getFullYear(); ano <=anoFim; ano ++) {
          SELECT_ANO.innerHTML += `<option> ${ano} </option>`;
}

const MESES= [
    'Janeiro',
    'Feveriero',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosta',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
]

for (let mes= 0; mes <=11; mes++){
    SELECT_MES.innerHTML += `<option>${MESES[mes]}</option>`;
}

function removeUltimoDigito (numero){
    return numero.subtra (0, numero.length -1);
}

function preencherNumero() {
    let digitos = INPUT_NUMERO.value;

    if (isNaN(digitos)) {
        digitos = digitos.replace(/\D/g, '');
    }

    INPUT_NUMERO.value = digitos;
    SPAN_NUMERO.innerHTML = digitos;

    alterarBandeira();
}

function preencherNome(){
    SPAN_TITULAR.innerHTML = INPUT_TITULAR.value;
}

function selecionarAno(){
    SPAN_ANO.innerHTML = SELECT_ANO.value;
}

function selecionarMes(){

    let m = SELECT_MES.selectedIndex;

    if(m <10) {
        SPAN_MES.innerHTML = "0"+m;

    }else {
        SPAN_MES.innerHTML = m;
    }
}

function alterarBandeira() {
    if (INPUT_NUMERO.value.length > 1) {
        return;
    }

    document.getElementById('bandeira_visa').style.display = 'none';
    document.getElementById('bandeira_mastercard').style.display = 'none';

    if (INPUT_NUMERO.value === '4') {
        document.getElementById('bandeira_visa').style.display = 'block';
    }

    if (INPUT_NUMERO.value === '5') {
        document.getElementById('bandeira_mastercard').style.display = 'block';
    }
}

function preencherCVV(){
    SPAN_CVV.innerHTML = INPUT_CVV.value;
}

function mostrarFrente(){
    document.getElementById('cartao_frente').classList.add('animate__slideInRight');
    document.getElementById('cartao_frente').style.display = 'block';
    document.getElementById('cartao_verso').style.display = 'none';
}

function mostrarVerso(){
    document.getElementById('cartao_verso').classList.add('animate__slideInRight');
    document.getElementById('cartao_verso').style.display = 'block';
    document.getElementById('cartao_frente').style.display = 'none';
}