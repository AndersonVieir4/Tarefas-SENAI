class Peixe extends Animal{
    
    constructor(nome, comprimento, patas, cor, ambiente, velocidade, caracteristica){
        super(nome, comprimento, patas, cor, ambiente, velocidade)
        this.caracteristica = caracteristica
    }

AlterarCaracteristica(caracteristica){
    this.caracteristica = caracteristica
}

RetornarCaracteristica(caracteristica){
    this.caracteristica = caracteristica
}
}
