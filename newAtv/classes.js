class Animal {
    constructor(nome, comprimento, patas, cor, ambiente, velocidade){
    this.nome= nome,
    this.comprimento = comprimento,
    this.patas = patas,
    this.cor = cor,
    this.ambiente = ambiente,
    this.velocidade = velocidade
}

AlterarNome(nome){
    this.nome = nome
}

AlterarNome(comprimento){
    this.comrpimento = comprimento
}

AlterarNome(patas){
    this.patas = patas
}

AlterarNome(cor){
    this.cor = cor
}

AlterarNome(ambiente){
    this.ambiente = ambiente
}

AlterarNome(velocidade){
    this.velocidade = velocidade
}
Dados(obj){
    console.table(obj);
}
}