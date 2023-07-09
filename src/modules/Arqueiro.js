import { Personagem } from "./Personagem.js";

export class Arqueiro extends Personagem {
  static tipo = 'Arqueiro';
  static descricao = 'Ágil e furtivo, o arqueiro é um especialista em emboscadas.';
  destreza;

  constructor(nome, destreza) {
    super(nome);
    this.destreza = destreza;
  }

  obterInsignia() {
    if (this.destreza >= 5) {
      return `Dominador das Flechas`
    }
    return super.obterInsignia();
  }
}