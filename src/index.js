const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
}

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function getRandomBlock() {
    const blocks = ['RETA', 'CURVA', 'CONFRONTO'];
    const index = Math.floor(Math.random() * blocks.length);
    return blocks[index];
}

function logRollResult(characterName, attributeName, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${attributeName} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);

        let block = getRandomBlock();
        console.log(`Bloco: ${block}`);

        let diceResult1 = rollDice();
        let diceResult2 = rollDice();

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === 'RETA') {
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

            logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE);
            logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE);
        }

        if (block === 'CURVA') {
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

            logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
            logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE);
        }

        if (block === 'CONFRONTO') {
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;

            console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`);

            logRollResult(character1.NOME, "poder", diceResult1, character1.PODER);
            logRollResult(character2.NOME, "poder", diceResult2, character2.PODER);

            const penaltyType = Math.random() < 0.5 ? 'casco' : 'bomba';
            const penaltyPoints = penaltyType === 'casco' ? 1 : 2;

            if (powerResult1 > powerResult2) {
                if (character2.PONTOS > 0) {
                    character2.PONTOS -= Math.min(penaltyPoints, character2.PONTOS);
                    console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu ${penaltyPoints} ponto(s) com um ${penaltyType} 🐢💥`);
                }

                if (Math.random() < 0.5) {
                    character1.PONTOS++;
                    console.log(`${character1.NOME} ganhou um TURBO! (+1 ponto extra) 🚀`);
                }

            } else if (powerResult2 > powerResult1) {
                if (character1.PONTOS > 0) {
                    character1.PONTOS -= Math.min(penaltyPoints, character1.PONTOS);
                    console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu ${penaltyPoints} ponto(s) com um ${penaltyType} 🐢💥`);
                }

                if (Math.random() < 0.5) {
                    character2.PONTOS++;
                    console.log(`${character2.NOME} ganhou um TURBO! (+1 ponto extra) 🚀`);
                }

            } else {
                console.log('Confronto empatado. Nenhum ponto perdido.');
            }
        }

        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.NOME} marcou um ponto!`);
            character1.PONTOS++;
        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(`${character2.NOME} marcou um ponto!`);
            character2.PONTOS++;
        }

        console.log('------------------------------');
    }
}

function declareWinner(character1, character2) {
    console.log('Resultado final:');
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

    if (character1.PONTOS > character2.PONTOS)
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
    else if (character2.PONTOS > character1.PONTOS)
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
    else
        console.log(`${character1.NOME} e ${character2.NOME} empataram! 🤝`);
}

(async function main() {
    console.log(`🏁🚨 Corrida entre o ${player1.NOME} e ${player2.NOME} começando...\n`);
    await playRaceEngine(player1, player2);
    declareWinner(player1, player2);
})();
