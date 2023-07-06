export class Personagem {
  nome;
  vida;
  mana;
  level;
  tipo;

  constructor(nome, level, tipo) {
    this.nome = nome;
    this.level = level;
    this.tipo = tipo;
  }

  obterInsignia() {
    if (this.level >= 5) {
      return `Implacável ${this.tipo}`
    }
    return `${this.tipo} Iniciante`
  }

}