export class Personagem {
  nome;
  vida = 100;
  mana = 100;
  #level;
  tipo;

  constructor(nome) {
    this.nome = nome;
    this.#level = 1;

  }

  get level() {
    return this.#level;
  }

  obterInsignia() {
    if (this.#level >= 5) {
      return `Implacável ${this.constructor.tipo}`
    }
    return `${this.constructor.tipo} Iniciante`
  }

  static verificarVencedor(personagem1, personagem2) {
    if (personagem1.level === personagem2.level) {
      return 'Empate!'
    }
    if (personagem1.level > personagem2.level) {
      return `${personagem1.constructor.tipo} ${personagem1.nome} foi o vencedor!`
    }
    return `${personagem2.constructor.tipo} ${personagem2.nome} foi o vencedor!`
  }

}