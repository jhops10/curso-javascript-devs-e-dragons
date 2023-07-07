import { Personagem } from "./modules/Personagem.js";
import { PersonagemView } from "./components/personagem-view.js";

const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago');
const personagemJose = new Personagem('Jose', 3, 'Arqueiro');

const personagens = [personagemPedrinho, personagemJose];

new PersonagemView(personagens).render();