class Vida {
  constructor(total, inicial) {
    this.total = total
    this.inicial = inicial
    this.vidas = this.inicial

    this.largura = 25
    this.altura = 25
    this.xInicial = 20
    this.y = 20
  }

  draw() {
    for (let i = 0; i < this.vidas; i++) {
      const margin = i * 10;
      const position = this.xInicial * (1 + i);
      image(imgVida, position+margin, this.y, this.largura, this.altura);
    }
  }
  
  ganhaVida(){
    if(this.vidas < thiis.total){
      this.vidas++;
    }
  }
  
  perdeVida(){
    this.vidas--;
  }
}