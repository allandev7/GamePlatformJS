class Jogo {
  constructor() {
    this.inimigoAtual = 0
  }

  setup() {
    musica.loop();

    cenario = new Cenario(imgCenario, 7);
    personagem = new Personagem(matrizPersonagem, bruxa, 0, 30, 110, 135, 220, 270);

    pontuacao = new Pontuacao();

    const gotinha = new Inimigo(matrizInimigo, imgGotinha, width - 52, 30, 52, 52, 104, 104, 10, 100);
    const gotinhaVoadora = new Inimigo(matrizGotinhaVoadora, imgGotinhaVoadora, width - 52, 200, 100, 75, 200, 150, 10, 100);
    const troll = new Inimigo(matrizTroll, imgTroll, width + 200, 0, 200, 200, 400, 400, 10, 100);
    inimigos.push(gotinha, gotinhaVoadora, troll);
  }

  keyPress() {
    if (key == "ArrowUp") {
      personagem.pula();
      somPulo.play()
    }
  }

  draw() {
    cenario.exibe();
    cenario.move();

    pontuacao.exibe();
    pontuacao.adicionarPontos();

    personagem.exibe();
    personagem.aplicaGravidade();

    const inimigo = inimigos[this.inimigoAtual];
    inimigo.exibe();
    inimigo.move();
    if (!UtilsCode.inimigoPresent(inimigo)) {
      this.inimigoAtual = parseInt(random(0, inimigos.length));
      if (this.inimigoAtual > inimigos.length - 1) {
        this.inimigoAtual = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      image(imgGameOver, width / 2 - 200, height / 2);
      noLoop()
    }
  }
}