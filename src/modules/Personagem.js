export class Personagem {
  nome;
  vida;
  mana;
  level;
  tipo;

  obterInsignia() {
    if (this.level >= 5) {
      return `Implacável ${this.tipo}`
    }
    return `${this.tipo} Iniciante`
  }

}