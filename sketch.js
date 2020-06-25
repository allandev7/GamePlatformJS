let bruxa, cenario, musica, imgGotinha,
    imgCenario, imgTroll,imgGotinhaVoadora, imgGameOver,
    pontuacao;

const matrizInimigo = UtilsCode.gerarMatriz(7,4,105,100);
const matrizPersonagem = UtilsCode.gerarMatriz(4,4,220,270);
const matrizTroll = UtilsCode.gerarMatriz(6,5,400,400);
matrizTroll.pop()
matrizTroll.pop()
const matrizGotinhaVoadora = UtilsCode.gerarMatriz(6,3,200,150);
matrizGotinhaVoadora.pop()
matrizGotinhaVoadora.pop()

const inimigos = [];

function preload(){
  imgCenario = loadImage('imagens/cenario/floresta.png');
  bruxa = loadImage('imagens/personagem/correndo.png');
  imgGotinha = loadImage('imagens/inimigos/gotinha.png');
  imgGotinhaVoadora = loadImage('imagens/inimigos/gotinha-voadora.png');
  imgTroll = loadImage('imagens/inimigos/troll.png');
  imgGameOver = loadImage('imagens/assets/game-over.png');
  musica = loadSound('sons/trilha_jogo.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
}

function keyPressed(){
  if(key == "ArrowUp"){
    personagem.pula();
    somPulo.play()
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  musica.loop();

  cenario = new Cenario(imgCenario, 3);
  personagem = new Personagem(matrizPersonagem, bruxa, 0,30, 110, 135, 220, 270);
  
  pontuacao = new Pontuacao();
  
  const gotinha = new Inimigo (matrizInimigo, imgGotinha, width - 52,30, 52, 52, 104,     104,10,10);
  const gotinhaVoadora = new Inimigo (matrizGotinhaVoadora, imgGotinhaVoadora, width - 52,200, 100, 75, 200, 150,10,5000);
  const troll = new Inimigo (matrizTroll, imgTroll, width + 200,0, 200, 200, 400, 400,10,1500);
  inimigos.push(gotinha, gotinhaVoadora, troll)
}

function draw() {
      console.log(UtilsCode.inimigoPresent(inimigos))

  cenario.exibe();
  cenario.move();

  pontuacao.exibe();
  pontuacao.adicionarPontos();
  
  personagem.exibe();
  personagem.aplicaGravidade();
  inimigos.forEach(x => {
    x.exibe();
    x.move();
    if(personagem.estaColidindo(x)){
      image(imgGameOver, width/2 - 200,height/2);
      noLoop()
    }
  });
  
}
