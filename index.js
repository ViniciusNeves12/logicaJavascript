const imparPar = numero =>{
    let resposta; 
    if(numero == 0){
        console.log(`o número ${numero} é neutro!!`);
    
    }else if(numero % 2 == 0){
        resposta = `O número ${numero} é par!!!`;
    }else{
        resposta = `O número ${numero} é impar!!!`;
    }

    return resposta;
}

const ePrimo = numero => {
    let divisor = 2;
    let reposta;
    while(numero % divisor != 0)
        divisor++;

    if(numero == divisor)
        reposta = `O número ${numero} é primo`;
    else
        resposta =  `O número ${numero} não é primo`;

    return resposta;
};

const fibonacci = numeroLimite => {
    let sequencia = []
    var f1 = 1;
    var f2 = 0;
    var f3 = 0;

    while(f3 < numeroLimite){
        sequencia.push(f3)

        f3 = f2 + f1;
        f1 = f2;
        f2 = f3;
    }
    return sequencia;   
}

const calculaIMC = (altura, peso) => {
    let imc = peso / (altura * altura);
    let resultado;
    if(imc < 18.5){
        resultado = `Seu IMC é: ${imc} você está abaixo do peso -- `;
    }
    if(18.5 <= imc && imc <= 24.99){
        resultado = `Seu IMC é: ${imc} você está com peso normal/adequado -- `;
    }
    if(25 <= imc && imc <= 29.99){
        resultado = `Seu IMC é: ${imc} você está com sobrepeso -- `;
    }
    if(imc >= 30){
        resultado = `Seu IMC é: ${imc} você está em obesidade -- `;
    }
    resultado +="O IMC adequado é de 18,5 a 24,99 -- ";
    return resultado;
}

const inverteString = texto =>{
    return texto.split('').reverse().join('');
}

const calculaDiaNatal = () => {
    let diaAtual = new Date();
    let diaNatal = new Date("2022-12-25 00:00:00");

    let diferencaEmTempo = Math.abs(diaAtual-diaNatal);
    let tempoEmDia = 1000 * 60 * 60 * 24;
    let diferencaEmDia = Math.ceil(diferencaEmTempo / tempoEmDia);
    
    return `Faltam ${diferencaEmDia} dias para o  natal`;
}

console.log(calculaDiaNatal());