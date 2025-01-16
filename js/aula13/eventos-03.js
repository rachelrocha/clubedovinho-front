let notas = [];

let quantidade = Number (prompt('Quantas voce quer?'));

for (let n=1; n <= quantidade; n++) {
    notas[n] = Number(prompt ('Me informa a nota 0${n}'));
}

let boletim= '';

for (let n= 1; n <= quantidade; n++) {
    boletim+= 'Nota 0${n}: ${notas[n]}\n';
}

alert(boletim);

let total = 0;

for (let n=1; n <=  quantidade; n++){
    total += notas[n];
}

let media = total/ quantidade;