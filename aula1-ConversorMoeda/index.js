var valorEmDolar = 1.00;
var cotacaoDoDolar = 4.90;
var cotacaoDoEuro = 5.35;
const nomeUsuario = 'Maria Luiza'

var valorEmRealDolar = 
valorEmDolar * cotacaoDoDolar;

var valorEmRealEuro = valorEmDolar * cotacaoDoEuro; 

valorEmRealDolar = valorEmRealDolar.toFixed(2);

valorEmRealEuro = valorEmRealEuro.toFixed(2);



alert("Olá, "+ nomeUsuario +". " +  "O valor convertido de US$ "+ +valorEmDolar+" é de "+ "R$ " +valorEmRealDolar+ ".");

alert("Olá, "+ nomeUsuario +". " +  "O valor convertido de €"+ +valorEmDolar+" é de "+ "R$ " +valorEmRealEuro+ ".");









