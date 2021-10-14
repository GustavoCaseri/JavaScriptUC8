let dataevento = new Date (2021, 12, 5);
let dataAtual = new Date (2021, 10, 14);
let palestrantes = ["Carlos", "Thiago"];
let participantes = ["João", "Lucas", "Luis", "Ana"]; 
let user = "Gustavo";
let idade = 18;

if (dataevento >= dataAtual){
    console.log("Data permitida");
} else {
    console.log("Data não permitida");
}

if (idade >= 18){
    console.log("Idade permitada");
} else {
    console.log("Idade não permitida");
}

let quantidadeParticipantes = participantes.length;
if (quantidadeParticipantes > 100){
    console.log("Número maximo de participantes");
} else {
    console.log("Número de participantes permitido")
}