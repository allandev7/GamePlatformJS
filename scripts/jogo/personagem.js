class Personagem extends Animacao{
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
    frameRate(40);
    this.baseY= height - this.altura;
    this.y = this.baseY;
    this.gravidade = 3;
    this.velocidadePulo = 0;
    this.contPula = 0;
  }
  
  pula(){
    if(this.contPula <2){
      this.velocidadePulo = -30
      this.y -= 30;
      this.contPula++;
    }
  }
  
  aplicaGravidade(){
    this.y += this.velocidadePulo
    this.velocidadePulo += this.gravidade
    
    if(this.y > this.baseY){
          this.y = this.baseY;
          this.contPula = 0;
    }
  }
  
  estaColidindo(inimigo){
    const precisao = 0.7;
    return collideRectRect(
      this.x, 
      this.y,
      this.largura * precisao, 
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura* precisao,
      inimigo.altura * precisao);
  }
}