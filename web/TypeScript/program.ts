
import { Tabuleiro , ITabuleiro} from './_Domain/tabuleiro';

class _AppXadrez {
    tabuleiro:ITabuleiro;
    
    constructor(){
        this.tabuleiro = new Tabuleiro();
    }
}


var AppXadrez = new _AppXadrez();

export {
    AppXadrez
}