import { Personagem } from "./modules/Personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/Mago.js";
import { Arqueiro } from "./modules/Arqueiro.js";

const magoJhops = new Mago('Jhops', 10, 'Fogo', 6, 10);
const magoMerlin = new Mago('Merlin', 5, 'Gelo', 3, 5);
const paladoxJhops = new Arqueiro('Paladox', 5, 10);
const robinHood = new Arqueiro('Robin Hood', 1, 3);

const personagens = [magoJhops, magoMerlin, paladoxJhops, robinHood];

new PersonagemView(personagens).render();

console.log(magoJhops)