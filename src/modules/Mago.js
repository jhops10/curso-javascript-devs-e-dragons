import { Personagem } from "./Personagem.js";

export class Mago extends Personagem {
  static descricao = 'Usa seu conhecimento oculto para controlar as forças naturais.';
  static tipo = 'Mago';
  elementoMagico;
  levelMagico;
  inteligencia;

  constructor(nome, elementoMagico, levelMagico, inteligencia) {
    super(nome);
    this.elementoMagico = elementoMagico;
    this.levelMagico = levelMagico;
    this.inteligencia = inteligencia;
  }

  obterInsignia() {
    if (this.levelMagico >= 5 && this.inteligencia >= 5) {
      return `Mestre do ${this.elementoMagico}`
    }
    return super.obterInsignia();
  }
}
