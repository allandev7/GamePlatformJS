class Pontuacao {
  constructor(){
    this.pontos = 0
  }
  
  exibe(){
    textAlign(RIGHT)
    fill('#fff')
    textSize(40)
    text('Pontos: ' +parseInt(this.pontos), width - 30, 50);
  }
  
  adicionarPontos(){
    this.pontos+= 0.1;
  }
}