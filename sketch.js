let imagemCenario, bruxa, cenario, musica, personagem, imgGotinha;

const matrizInimigo = UtilsCode.gerarMatriz(7,4,105,100);
const matrizPersonagem = UtilsCode.gerarMatriz(4,4,220,270);

function preload(){
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  bruxa = loadImage('imagens/personagem/correndo.png');
  imgGotinha = loadImage('imagens/inimigos/gotinha.png');
  musica = loadSound('sons/trilha_jogo.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
  console.log(UtilsCode.gerarMatriz(7,4,105,104));
}

function keyPressed(){
  if(key == "ArrowUp"){
    personagem.pula();
    somPulo.play()
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(matrizPersonagem, bruxa, 0, 110, 135, 220, 270);
  inimigo = new Inimigo (matrizInimigo, imgGotinha, width - 52, 52, 52, 104, 104);
  musica.loop();
}

function draw() {
  cenario.exibe();
  personagem.exibe();
  personagem.aplicaGravidade();
  cenario.move();
  inimigo.exibe();
  inimigo.move();
  if(personagem.estaColidindo(inimigo)){
    console.log('Colidiu');
    pause();
  }
}
