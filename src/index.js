import { Personagem } from "./modules/Personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/Mago.js";

const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago');
const personagemJose = new Personagem('Jose', 3, 'Arqueiro');

const personagens = [personagemPedrinho, personagemJose];

new PersonagemView(personagens).render();

console.log(personagemJose.vida);
console.log(new Mago('gelo', 7, 8))