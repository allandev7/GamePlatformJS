let bruxa, cenario, musica, imgGotinha,
  imgCenario, imgTroll, imgGotinhaVoadora, imgGameOver, imgTelaInicial,
  fontTelaInicial, pontuacao, personagem;
let jogo;
let botaoGerenciador;
let telaInicial;
let cenaAtual = 'telaInicial';

let cenas;

const matrizInimigo = UtilsCode.gerarMatriz(7, 4, 105, 100);
const matrizPersonagem = UtilsCode.gerarMatriz(4, 4, 220, 270);
const matrizTroll = UtilsCode.gerarMatriz(6, 5, 400, 400);
matrizTroll.pop()
matrizTroll.pop()
const matrizGotinhaVoadora = UtilsCode.gerarMatriz(6, 3, 200, 150);
matrizGotinhaVoadora.pop()
matrizGotinhaVoadora.pop()

const inimigos = [];