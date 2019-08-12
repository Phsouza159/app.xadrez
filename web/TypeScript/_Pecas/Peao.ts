import { PecaBase } from "./PecaBase";
import { eImagePecas } from "../_ObjectValue/imagePecas.enum";


export class Peao extends PecaBase {

    protected formulasMovimentoEspecial: string[] = [
        "+2Y"
    ];
    protected formulasMovimentoCaptura: string[] = [
        ,"+1Y +1X C(2)"
        ,"+1Y -1X C(2)"
    ];
    protected formulasMovimento: string[] = [
        "+1Y"
    ];

    image:eImagePecas = eImagePecas.PEAO;    
    

    movimento(): void {
        throw new Error("Method not implemented.");
    }
     
    IsPossibilidadeCaptura(): number[] {
        throw new Error("Method not implemented.");
    }
}