/* Faça um programa para calcular o valor de uma viagem;

 Você terá 3 variáveis, sendo elas: 
 1 - Preço do Etanol;
 2 - Preço da Gasolina;
 3 - O tipo de combustivel que está no seu carro;
 4 - Gasto médio de combustivel do carro por KM;
 5 - Distancia em KM da viagem;
 5 - 
 */

 const precoGasolina = 5.05;
 const precoEtanol = 4.41;
 const kmPorLitros = 12;
 const distanciaEmKm = 145;
 const tipoCombustivel = 'Gasolina';

 const litrosConsumidos = distanciaEmKm / kmPorLitros;

 if ( tipoCombustivel == 'Etanol'){
     const valorGasto = litrosConsumidos * precoGasolina; 
     console.log(valorGasto.toFixed(2));
 }else{
     const valorGasto = litrosConsumidos * precoEtanol;
     console.log(valorGasto.toFixed(2));
 }
