let imagemCenario, bruxa, cenario, musica, personagem;

function preload(){
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  bruxa = loadImage('imagens/personagem/correndo.png');
  musica = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(bruxa);
  musica.loop();
}

function draw() {
  cenario.exibe();
  personagem.exibe();
  cenario.move();
  personagem.move();
}
