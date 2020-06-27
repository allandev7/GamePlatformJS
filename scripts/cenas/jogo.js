class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = [{
        inimigo: 0,
        velocidade: 15
      },
      {
        inimigo: 1,
        velocidade: 20
      },
      {
        inimigo: 1,
        velocidade: 15
      },
      {
        inimigo: 2,
        velocidade: 20
      }
    ]
  }

  setup() {
    cenario = new Cenario(imgCenario, 7);
    personagem = new Personagem(matrizPersonagem, bruxa, 0, 30, 110, 135, 220, 270);

    vida = new Vida(5, 3);

    pontuacao = new Pontuacao();

    const gotinha = new Inimigo(matrizInimigo, imgGotinha, width - 52, 30, 52, 52, 104, 104, 10, 100);
    const gotinhaVoadora = new Inimigo(matrizGotinhaVoadora, imgGotinhaVoadora, width - 52, 200, 100, 75, 200, 150, 10, 100);
    const troll = new Inimigo(matrizTroll, imgTroll, width + 200, 0, 200, 200, 400, 400, 10, 100);
    inimigos.push(gotinha, troll, gotinhaVoadora);
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

    vida.draw();

    pontuacao.exibe();
    pontuacao.adicionarPontos();

    personagem.exibe();
    personagem.aplicaGravidade();
    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];

    inimigo.velocidade = linhaAtual.velocidade;


    inimigo.exibe();
    inimigo.move();
    if (!UtilsCode.inimigoPresent(inimigo)) {
      inimigo.reaparece();

      this.indice++;
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }
    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.tornarInvencivel();

      if (vida.vidas === -1) {
        image(imgGameOver, width / 2 - 200, height / 2);
        noLoop()
      }
    }
  }
}