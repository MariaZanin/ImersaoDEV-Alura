var numeroSecreto = parseInt(Math.random() * 1001 )

// enquanto o teste do While for verdadeiro, ele fica repetindo
//enquanto o chute for diferente do número secreto
while (chute != numeroSecreto){


var chute = prompt('Digite um número entre 1 e 1000: \n(Digite "sair" caso queira encerrar a brincadeira.)');
  //se o chute for igual ao número secreto, emitir um alert de 'acertou'//

if (chute == numeroSecreto){
    alert('Acertou!')
}
else if ( chute > numeroSecreto){
    alert('Errou... o número secreto é menor do que: '+chute)
}
else if (chute < numeroSecreto){
    alert('Errou... o número secreto é maior do que: ' + chute)
}
else if(chute == 'sair'){
    break;
}
}