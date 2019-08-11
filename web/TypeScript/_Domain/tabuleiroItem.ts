import { PecaBase } from "../_Pecas/PecaBase";

export interface ITabuleiroItem {
    isAliado:boolean;

    SetPeca(peca:PecaBase):void;
    GetPeca() : PecaBase;
    RemovePeca(): void;
    movimentoPeca() :void;
    IsEmpyt() : boolean;
    SetDisplay() : void;
    GetCelulaDom():string;
}

export class TabuleiroItem implements ITabuleiroItem {
    
    private item:PecaBase;
    private isEmpyt:boolean;
    private celulaDom:string;
    private celulaId: number;

    isAliado:boolean;

    constructor(celulaId:number , celulaDom:string)
    {
        this.celulaId = celulaId;
        this.celulaDom = celulaDom;
        this.isEmpyt = true;
    }

    IsEmpyt() : boolean {
        return this.isEmpyt;
    }

    GetCelulaDom() : string {
        return this.celulaDom;
    }

    SetPeca(peca:PecaBase) : void {
        this.item = peca;
        this.isEmpyt = false;
    }

    GetPeca(): PecaBase {
        return this.item;
    }

    RemovePeca(): void {
        this.item = null;
        this.isEmpyt = true;
    }

    movimentoPeca() :void {

    }

    SetDisplay(): void {
        var element = <HTMLInputElement>document.querySelectorAll(`[data-idcelula=\'${this.celulaDom}\']`)[0];

        var pElement = <HTMLInputElement>element.children[0];
        
        pElement.innerHTML = this.item.image;
        
        console.log(pElement);
    }
}