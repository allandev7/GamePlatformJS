class Personagem{
  constructor(imagem){
    this.imagem = imagem;
    this.matriz = [
      [0,0],
      [220,0],
      [440,0],
      [0,270],
      [220,270],
      [440,270],
      [660,270],
      [0,540],
      [220,540],
      [440,540],
      [660,540],
      [0,810],
      [220,810],
      [440,810],
      [660,810]
    ];
    this.currentFrame = 0;
    frameRate(40);
  }
  
  exibe(){
    image(bruxa, 0, height-150,110,135,this.matriz[this.currentFrame][0],this.matriz[this.currentFrame][1],220,270);
  }
  
  move(){
    this.currentFrame++;
    
    if (this.currentFrame>= this.matriz.length - 1){
      this.currentFrame = 0;
    }
  }
}