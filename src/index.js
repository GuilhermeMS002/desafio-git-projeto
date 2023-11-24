// Classificador de nivel de Herói

// Definição de variaveis 
let nomePersonagem = "Carlinhos"
let nivelPersonagem = ""
let quantidadeXp = 2002

// estrutura de decisões, utilizado: if, else if e else
if (quantidadeXp <= 1000) {
    nivelPersonagem = "Ferro"
} else if ((quantidadeXp > 1000) & (quantidadeXp <= 2000)) {
    nivelPersonagem = "Bronze"
} else if ((quantidadeXp > 2000) & (quantidadeXp <= 5000)) {
    nivelPersonagem = "Prata Ouro"
} else if ((quantidadeXp > 5000) & (quantidadeXp <= 8000)) {
    nivelPersonagem = "platina Diamante"
} else if ((quantidadeXp > 8000) & (quantidadeXp <= 9000)) {
    nivelPersonagem = "Ascendente"
} else if ((quantidadeXp > 9000) & (quantidadeXp <= 10000)) {
    nivelPersonagem = "Imortal"
} else {
    nivelPersonagem = "Radiante"
}

// saída da mensagem
console.log("O heroi de nome " + nomePersonagem + ", está no nivel de " + nivelPersonagem)