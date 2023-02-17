// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt('Digite a altura'))
  const largura = Number(prompt('Digite a largura'))
  const area = altura * largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt('Digite o ano atual'))
  const anoDeNascimento = Number(prompt('Digite o ano do seu nascimento'))
  const idade = anoAtual - anoDeNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura).toFixed(2)
  return imc
}
calculaIMC(85, 1.8)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Digite seu nome:')
  const idade = Number(prompt('Digite sua idade:'))
  const email = prompt('Digite seu email:')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const primeiraCor = prompt('Digite sua cor favorita')
  const SegundaCor = prompt('Digite sua segunda cor favorita')
  const TerceiraCor = prompt('Digite sua terceira cor favorita')
  const coresFavoritas = [primeiraCor, SegundaCor, TerceiraCor]
  console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const teste = string.toUpperCase()
  return teste
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const calculo = custo / valorIngresso
  return calculo
}


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return primeiroElemento = array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return ultimoElemento = array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroArray = array[0]
  const ultimoArray = array[array.length - 1]
  array[0] = ultimoArray
  array[array.length - 1] = primeiroArray
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const idade = anoAtual - anoDeNascimento
  const teste = anoAtual - rg

  if (idade <= 20 && teste < 5) {
    console.log(false)
  } else if (idade > 20 && idade < 50 && teste < 10) {
    console.log(false)
  } else if (idade > 50 && teste < 15) {
    console.log(false)
  } else {
    console.log(true)
  }

}
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const anoBisexto = ano % 400 === 0 || ano % 4 === 0 && ano % 100 !== 0
  return anoBisexto
}
// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  if (idade === 'sim' && escolaridade === 'sim' && disponibilidade === 'sim') {
    console.log(true)
  } else {
    console.log(false)
  }

}
checaValidadeInscricaoLabenu()