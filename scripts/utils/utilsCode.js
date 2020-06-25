class UtilsCode {
  static gerarMatriz(linhas, colunas, largura, altura){
    let matriz = [];
    let alturaCont = 0;
    let larguraCont = 0;
    for (let l = 0; l < linhas; l ++){
      for (let c = 0; c < colunas; c ++){
            matriz.push([larguraCont,alturaCont]);
            larguraCont+=largura;
      }
      larguraCont = 0;
      alturaCont += altura;
    }
    return matriz;
  }
  
  static inimigoPresent(inimigos){
    let retorno = false;
    inimigos.forEach(inimigo=>{
      if(inimigo.x> -inimigo.largura && inimigo.x < width){
        retorno = true;
      }
    });
    return retorno;
  }

}