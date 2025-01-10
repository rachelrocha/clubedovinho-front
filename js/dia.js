let numero = 1;

const SELECT_DIA = document.getElementById('select-dia');
const SELECT_MES = document.getElementById('select-mes');
const SELECT_ANO = document.getElementById('select-ano');


while (numero <=31) {

    SELECT_DIA.innerHTML += `<option> ${numero} </option>`;
    

    numero += 1;
}

let mes= 1;

do {
    SELECT_MES.innerHTML += `<option> ${mes} </option>`;

    mes++;

} while (mes <= 12);



for (let ano= 2025; ano >=1950; ano --) {
    if (ano % 2 !==0) {
        SELECT_ANO.innerHTML += `<option> ${ano} </option>`;
    }
}
