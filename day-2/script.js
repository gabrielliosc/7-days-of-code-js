const name_ = prompt("Qual o seu nome?");
const age = prompt("Quantos anos você tem?");
const lang = prompt("Qual linguagem de programação você está estudando?");

const answerElement = document.getElementById('answer')
console.log(answerElement)

answerElement.innerHTML = `<p>Olá ${name_}, você tem ${age} anos e já está aprendendo ${lang}!</p>`

const like = prompt(`Você gosta de estudar ${lang}? Responda com o número 1 para SIM ou 2 para NÃO.`)

const likeInt = parseInt(like)

if (like === 1){
    alert('Muito bom! Continue estudando e você terá muito sucesso')
} else if (like === 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
} else {
    alert('Valor que foi inserido é inválido')
}
