# 🏁 Corrida Maluca com Mario & Luigi

Um mini-jogo divertido baseado em sorte, atributos e confrontos! Desenvolvido em **JavaScript**, simula uma corrida entre dois personagens clássicos: **Mario** e **Luigi**.

---

## 🚗 Sobre o Projeto

Este projeto é uma simulação de corrida por turnos entre dois personagens com diferentes atributos. A cada rodada, é sorteado um tipo de bloco da pista, e os jogadores rolam dados para competir em velocidade, manobrabilidade ou confronto direto. Vence quem somar mais pontos ao final das rodadas!

---

## 📦 Funcionalidades

- Sorteio aleatório de blocos de pista: **reta**, **curva** ou **confronto**.
- Atributos individuais para cada personagem:
  - **VELOCIDADE**
  - **MANOBRABILIDADE**
  - **PODER**
- Rolagem de dados para simular os desafios de cada rodada.
- Sistema de **confronto com penalidade** (casco ou bomba) e chance de **turbo bônus**.
- Exibição de logs detalhados de cada rodada.
- Cálculo e exibição do vencedor ao final da corrida.

---

## 🎮 Regras do Jogo

### 🟢 Blocos possíveis

- **RETA**: Ganha quem tiver maior `VELOCIDADE` + dado.
- **CURVA**: Ganha quem tiver maior `MANOBRABILIDADE` + dado.
- **CONFRONTO**: 
  - Ganha quem tiver maior `PODER` + dado.
  - O perdedor sofre **um ataque aleatório**:
    - `casco 🐢`: perde 1 ponto.
    - `bomba 💣`: perde 2 pontos.
  - O vencedor do confronto tem **50% de chance** de ganhar um **turbo** e somar +1 ponto extra.

---

## 👥 Personagens

```javascript
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
