class Inimigo extends Animacao{
   constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite,
               velocidade){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
     
     this.velocidade = random(10,30);
     this.x = width;
  }
  
  move(){
    this.x -= this.velocidade;
  }
  
  reaparece(){
      this.x = width;
  }
}