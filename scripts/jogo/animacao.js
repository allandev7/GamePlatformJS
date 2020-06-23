class Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
    this.matriz = matriz;
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.y = height - this.altura ;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    
    this.currentFrame = 0;
  }
  
   exibe(){
    image(this.imagem, this.x, this.y,this.largura,
          this.altura,this.matriz[this.currentFrame][0],this.matriz[this.currentFrame][1],this.larguraSprite,this.alturaSprite);
     this.anima();
  }
  
  anima(){
    this.currentFrame++;
    
    if (this.currentFrame>= this.matriz.length - 1){
      this.currentFrame = 0;
    }
  }
}