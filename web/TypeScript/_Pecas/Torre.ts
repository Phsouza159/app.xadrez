import { eImagePecas } from "../_ObjectValue/imagePecas.enum";
import { PecaBase } from "./PecaBase";


export class Torre extends PecaBase {
    
    image: eImagePecas = eImagePecas.TORRE;    
    
    protected formulasMovimento: string[] = [
        ,"+*X C( 1 | *)"
        ,"+*Y C( 1 | *)"
        ,"-*X C( 1 | *)"
        ,"-*Y C( 1 | *)"
    ];
    protected formulasMovimentoEspecial: string[] = [];
    protected formulasMovimentoCaptura: string[] = [];
    
    movimento(): void {
        throw new Error("Method not implemented.");
    }
    
    IsPossibilidadeCaptura(): number[] {
        throw new Error("Method not implemented.");
    }


}