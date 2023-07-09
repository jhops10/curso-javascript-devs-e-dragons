import { Personagem } from "./Personagem.js";

export class Guerreiro extends Personagem {
  static tipo = 'Guerreiro';
  static descricao = 'Habilidoso e destemido, cujo foco principal é o combate corpo a corpo.';
  forca;

  constructor(nome, forca) {
    super(nome);
    this.forca = forca;
  }

  obterInsignia() {
    if (this.level >= 7 && this.forca >= 5) {
      return `Guerreiro Furioso`;
    }
    return super.obterInsignia();
  }
}