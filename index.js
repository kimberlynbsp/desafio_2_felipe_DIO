let vitorias= 81
let derrotas= 22

if (vitorias <= 10){
    console.log("Minha heroína tem saldo de " + vitorias + " vitórias e é nível ferro");
}
else if (vitorias >= 11 && vitorias <= 20){
    console.log("Minha heroína tem saldo de " + vitorias + " vitórias e é nível bronze")
 }
 else if (vitorias >= 21 && vitorias <= 50){
    console.log("Minha heroína tem saldo de " + vitorias + " vitórias e é nível prata")
 }
 else if (vitorias >= 51 && vitorias <= 80){
    console.log("Minha heroína tem saldo de " + vitorias + " vitórias e é nível ouro")
 }
 else if (vitorias >= 81 && vitorias <= 90){
    console.log("Minha heroína tem saldo de " + vitorias + " vitórias e é nível diamante")
 }
 else if (vitorias >= 91 && vitorias <= 100){
    console.log("Minha heroína tem saldo de " + vitorias  + " vitórias e é nível lendário")
 }
 else if (vitorias >= 101 ){
    console.log("Minha heroína tem saldo de " + vitorias + " vitórias e é nível imortal")
 }

 function totalDePartidas ( vitorias, derrotas){
    let somaTotalDePartidas= vitorias+derrotas
    return somaTotalDePartidas
}
