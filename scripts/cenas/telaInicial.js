class TelaInicial{
  constructor(){
    
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imgTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    textFont(fontTelaInicial);
    textSize(50);
    textAlign(CENTER);
    text('As aventuras de ', width/2, height/2 - 300);
    textSize(100);
    text('Bruxa', width/2, height/2 - 225);
  }
  
  _botao(){
    botaoGerenciador.draw();
  }
}