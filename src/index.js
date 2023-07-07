import { Personagem } from "./modules/Personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/Mago.js";
import { Arqueiro } from "./modules/Arqueiro.js";
import { ArqueiroMago } from "./modules/Arqueiro-Mago.js";

const magoJhops = new Mago('Jhops', 10, 'Fogo', 6, 10);
const magoMerlin = new Mago('Merlin', 5, 'Gelo', 3, 5);
const robinHood = new Arqueiro('Robin Hood', 1, 3);
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'Vento', 4, 8);

const personagens = [magoJhops, magoMerlin, paladoxJhops, robinHood, arqueiroMagoChico];

new PersonagemView(personagens).render();

console.log(magoJhops)