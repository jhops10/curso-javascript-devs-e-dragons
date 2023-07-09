import { Personagem } from "./modules/Personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/Mago.js";
import { Arqueiro } from "./modules/Arqueiro.js";
import { ArqueiroMago } from "./modules/Arqueiro-Mago.js";
import { Guerreiro } from "./modules/Guerreiro.js";


const magoMerlin = new Mago('Merlin', 5, 'Gelo', 3, 5);
const robinHood = new Arqueiro('Robin Hood', 1, 3);
const burstArrow = new ArqueiroMago('Burst Arrow', 7, 10, 'Vento', 4, 8);
const knightEternal = new Guerreiro('Eternal Knight', 6)

const personagens = [magoMerlin, robinHood, burstArrow, knightEternal];

new PersonagemView(personagens).render();

