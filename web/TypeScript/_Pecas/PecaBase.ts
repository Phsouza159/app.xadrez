import { eImagePecas } from "../_ObjectValue/imagePecas.enum";
import { letras } from "../_ObjectValue/celulasTabuleiro";
import { eCodTipoMovimento } from "../_Enum/eCodTipoMovimento";
import { ArgsMovimento } from "../_ObjectValue/ArgsMovimento";




export abstract class PecaBase {

    private pilhaMovimento:string[];

    nome:string;

    abstract image:eImagePecas;

    protected abstract formulasMovimento:string[];
    protected abstract formulasMovimentoEspecial:string[];
    protected abstract formulasMovimentoCaptura:string[];

    GetMovimento() : string[] {
        return this.formulasMovimento;
    }

    GetMovimentoEspecial() : string[] {
        return this.formulasMovimentoEspecial;
    }

    GetMovimentoCaptura() : string[] {
        return this.formulasMovimentoCaptura;
    }

    abstract movimento() : void;
    abstract IsPossibilidadeCaptura() : number[];

    verificarCamposMovimento(celulaId:string) : string[] {
        this.pilhaMovimento = this.formulasMovimento;

        let response:string[] = [];
        
        this.pilhaMovimento.forEach( agrMovimento => {

            let objectArgs:ArgsMovimento = new ArgsMovimento(agrMovimento , this);

            let yTop:string[] = this.movimentoEixoYTop( objectArgs , celulaId);
            //let yBottom:string[];
            //let xLeft:string[];
            //let xRight:string[];
            //let yxTopLeft:string[];
            //let yxbottomLeft:string[];
            //let yxTopRight:string[];
            //let yxbottomRight:string[];

            response.push(... yTop);
        });

        return response.filter(e => e != celulaId);
    }

    private validarExpressao(arg:string) {

    }

    //#region EIXO Y TOP

    /**
     * Verificar campos disponiveis no eixo Y TOP
     * @param expressaoMovimento 
     * @param celulaId 
     */
    protected movimentoEixoYTop(argsMovimento:ArgsMovimento , celulaId:string) : string[] {
        
        if(argsMovimento.tipoMovimento == eCodTipoMovimento.SIMPLES){
            return this.movimentoEixoYTopSimples(argsMovimento , celulaId);
        }
        
        return [];
    }

    protected movimentoEixoYTopSimples(argsMovimento:ArgsMovimento , celulaId:string) : string[] {

        let expressaoMovimento = argsMovimento.argsMovimento[0];

        let oper:string         = expressaoMovimento[0];
        let mov:string          = expressaoMovimento[1];
        let Eixo:string         = expressaoMovimento[2];
        let response:string[]   = [];
        
        if(oper == "+" && Eixo == "Y"){
            
            if(mov == "*")
                return this.continuoYTop(celulaId);

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

    protected continuoYTop(celulaId:string) : string[] {
        let response:string[] = [];
        let row:number = letras.indexOf(celulaId[0]) + 1;

        for( let i = row ; i > 0 ; i--){
            response.push(`${letras[i - 1]}${celulaId[1]}`);
        }

        return response;
    }

    //#endregion
}









