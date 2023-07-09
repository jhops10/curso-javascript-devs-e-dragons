import { Arqueiro } from "./Arqueiro.js";
import { Mago } from "./Mago.js";
import { Personagem } from "./Personagem.js";

export class ArqueiroMago extends Personagem {
  static tipo = 'ArqueiroMago';
  static descricao = 'Ele é capaz de conjurar feitiços enquanto dispara flechas com precisão mortal.'
  ladoArqueiro;
  ladoMago;

  constructor(nome, level, destreza, elementoMagico, levelMagico, inteligencia) {
    super(nome, level);
    this.ladoArqueiro = new Arqueiro(nome, level, destreza);
    this.ladoMago = new Mago(nome, level, elementoMagico, levelMagico, inteligencia);
  }

  obterInsignia() {
    return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
  }
}