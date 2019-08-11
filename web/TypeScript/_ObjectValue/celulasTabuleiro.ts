export interface CelulaId {
    id:string;
    referencia:number;
}

export class CelulasIds {
    celula:CelulaId[];
} 

const letras = [ "A", "B", "C", "D", "E", "F", "G", "H" ];
const numColumns = letras.length;

var CelulasIdsValue:CelulasIds = new CelulasIds();


CelulasIdsValue.celula = [];
let contadorCelula = 1;

for(let row = 1 ; row <= letras.length ; row++)
    for(let col = 1; col <= numColumns ; col++){

        CelulasIdsValue.celula.push({ id: `${letras[row - 1 ]}${col}` , referencia : contadorCelula });
        contadorCelula++;
    }

console.log(CelulasIdsValue);


export { CelulasIdsValue , letras }