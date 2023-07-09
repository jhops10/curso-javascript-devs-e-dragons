export class Personagem {
  nome;
  vida = 100;
  mana = 100;
  level;
  tipo;

  constructor(nome, level) {
    this.nome = nome;
    this.level = level;

  }

  obterInsignia() {
    if (this.level >= 5) {
      return `Implacável ${this.constructor.tipo}`
    }
    return `${this.constructor.tipo} Iniciante`
  }

}