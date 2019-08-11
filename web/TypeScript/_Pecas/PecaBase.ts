import { eImagePecas } from "../_ObjectValue/imagePecas.enum";
import { letras } from "../_ObjectValue/celulasTabuleiro";


export abstract class PecaBase {

    private pilhaMovimento:string[];

    nome:string;

    abstract image:eImagePecas;

    protected abstract formulasMovimento:string[];
    protected abstract formulasMovimentoEspecial:string[];
    protected abstract formulasMovimentoCaptura:string[];

    abstract movimento() : void;
    abstract IsPossibilidadeCaptura() : number[];

    verificarCamposMovimento(celulaId:string) : string[] {
        this.pilhaMovimento = this.formulasMovimento;

        let response:string[] = [];
        
        this.pilhaMovimento.forEach( agrMovimento => {

            let yTop:string[] = this.movimentoEixoYTop(agrMovimento , celulaId);
            //let yBottom:string[];
            //let xLeft:string[];
            //let xRight:string[];
            //let yxTopLeft:string[];
            //let yxbottomLeft:string[];
            //let yxTopRight:string[];
            //let yxbottomRight:string[];

            response.push(... yTop);
        });

        return response;
    }
    /**
     * Verificar campos disponiveis no eixo Y TOP
     * @param expressaoMovimento 
     * @param celulaId 
     */
    protected movimentoEixoYTop(expressaoMovimento: string , celulaId:string) : string[] {
        let oper:string = expressaoMovimento[0];
        let mov = expressaoMovimento[1];
        let Eixo:string = expressaoMovimento[2];
        let response:string[] = [];
        
        if(oper == "+" && Eixo == "Y"){
            
            let row = celulaId[0];
            let col = parseInt(mov);
            let indexofRow = letras.indexOf(row);
    
            let novoEixoY = (indexofRow - col) > 0 ? (indexofRow - col) : 0;
    
            for(let i = indexofRow ; indexofRow > novoEixoY ; indexofRow-- ) {
                response.push(`${letras[indexofRow - 1]}${celulaId[1]}`);
            }
        }
        return response;
    }


}