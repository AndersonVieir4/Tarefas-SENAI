class Mamifero extends Animal{
    constructor(nome, comprimento, patas, cor, ambiente, velocidade, alimento){
   super(nome, comprimento, patas, cor, ambiente, velocidade)
   this.alimento = alimento
}

AlterarAlimento(alimento){
    this.calimento = alimento
}

RetornarAlimento(){
    return this.alimento
}

}