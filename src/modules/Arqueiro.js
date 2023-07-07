import { Personagem } from "./Personagem.js";

export class Arqueiro extends Personagem {
  tipo = 'Arqueiro';
  destreza;

  constructor(nome, level, destreza) {
    super(nome, level);
    this.destreza = destreza;
  }

  obterInsignia() {
    if (this.destreza >= 5) {
      return `Dominador das Flechas`
    }
    return super.obterInsignia();
  }
}