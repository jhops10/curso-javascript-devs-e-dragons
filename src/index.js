import { Personagem } from "./modules/Personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/Mago.js";

const magoJhops = new Mago('Jhops', 10, 'fogo', 6, 10);
const magoMerlin = new Mago('Merlin', 5, 'gelo', 3, 5);

const personagens = [magoJhops, magoMerlin];

new PersonagemView(personagens).render();

console.log(magoJhops)