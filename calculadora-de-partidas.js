
function calculator (totalWins, totalDefeats) {

    let level;
    let balance = totalWins - totalDefeats;

    if (totalWins <= 10) {
        level = "Ferro";
    } else if (totalWins <= 20) {
        level = "Bronze";
    } else if (totalWins <= 50) {
        level = "Prata";
    } else if (totalWins <= 80) {
        level = "Ouro";
    } else if (totalWins <= 90) {
        level = "Diamante";
    } else if (totalWins <= 100) {
        level = "Lendário";
    } else {
        level = "Imortal";
    }

    let status = [balance,level];

    return status;
}

let balanceAndLevel = calculator(100,50);

console.log(`O Herói tem saldo de ${balanceAndLevel[0]} está no nível de ${balanceAndLevel[1]}`);