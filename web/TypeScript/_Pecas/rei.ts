import { PecaBase } from "./PecaBase";
import { eImagePecas } from "../_ObjectValue/imagePecas.enum";


export class Rei extends PecaBase {
    image: eImagePecas = eImagePecas.REI;    
    
    protected formulasMovimento: string[] = [
        ,"+1W C( 1 | *)"
        ,"-1W C( 1 | *)"
        ,"+1Z C( 1 | *)"
        ,"-1Z C( 1 | *)"
        ,"+1Y C( 1 | *)"
        ,"-1Y C( 1 | *)"
        ,"+1X C( 1 | *)"
        ,"-1X C( 1 | *)"
    ];
    protected formulasMovimentoEspecial: string[]= [];
    protected formulasMovimentoCaptura: string[]= [];
    
    movimento(): void {
        throw new Error("Method not implemented.");
    }
    
    IsPossibilidadeCaptura(): number[] {
        throw new Error("Method not implemented.");
    }


}