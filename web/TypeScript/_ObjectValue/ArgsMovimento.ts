import { eCodTipoMovimento } from "../_Enum/eCodTipoMovimento";
import { PecaBase } from "../_Pecas/PecaBase";

export class ArgsMovimento {
    
    tipoMovimento:eCodTipoMovimento;
    argsMovimento:string[];
    argsCaptura:string[];
    capturaLinhaMovimento:boolean;

    constructor(args:string , pessaBase:PecaBase){

        if(args.indexOf('C(') >= 1){
            this.capturaLinhaMovimento = true;
            this.argsCaptura = [this.RecuperarArgumentosCaptura(args)];
        }
        else {
            this.argsCaptura = pessaBase.GetMovimentoCaptura();
        }

        this.argsMovimento = this.RecuperarArgsMovimento(args)
        this.tipoMovimento = <eCodTipoMovimento>this.argsMovimento.length;
    }

    private RecuperarArgsMovimento(arg:string) : string[] {
        if(this.capturaLinhaMovimento){
            let i = arg.indexOf('C');
        
            arg = arg.substring(0 , i);
        }

        return arg.split(' ').filter( e => e != "");
    }

    private RecuperarArgumentosCaptura(arg:string) : string {
        let inicio = arg.indexOf('C(');
        let fim = arg.indexOf(')');

        return arg.substring( inicio , fim + 1);
    }
}