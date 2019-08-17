import { PecaBase } from "./PecaBase";
import { eImagePecas } from "../_ObjectValue/imagePecas.enum";



export class Rainha extends PecaBase {
    
    image:eImagePecas = eImagePecas.RAINHA;    
    
    protected formulasMovimento: string[] = [
        ,"+*W C( 1 | *)"
        ,"-*W C( 1 | *)"
        ,"+*Z C( 1 | *)"
        ,"-*Z C( 1 | *)"
        ,"+*Y C( 1 | *)"
        ,"-*Y C( 1 | *)"
        ,"+*X C( 1 | *)"
        ,"-*X C( 1 | *)"
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