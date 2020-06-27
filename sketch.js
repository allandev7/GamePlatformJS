

function keyPressed() {
  jogo.keyPress()
}

function setup() {
  musica.loop();
  createCanvas(windowWidth, windowHeight);
  jogo = new Jogo();
  jogo.setup();
  telaInicial = new TelaInicial();
  botaoGerenciador = new BotaoGerenciador('JOGAR', width/2, height/2);
  cenas = {
    jogo,
    telaInicial
  };
}

function draw() {
  cenas[cenaAtual].draw();
}