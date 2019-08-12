import { PecaBase } from "../_Pecas/PecaBase";
import { DomElementServico } from "../_Service/DomElemntService";

export interface ITabuleiroItem {
    isAliado:boolean;

    SetPeca(peca:PecaBase):void;
    GetPeca() : PecaBase;
    RemovePeca(): void;
    movimentoPeca(element:HTMLElement) :void;
    IsEmpyt() : boolean;
    SetDisplay() : void;
    GetCelulaDom():string;
    GetIdCelula():number;
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

    GetIdCelula(): number {
        return this.celulaId;
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

    movimentoPeca(element:HTMLElement) :void {
        this.celulaDom = element.dataset.idcelula;
    }

    SetDisplay(): void {
        let imageDisplay:string;

        if(this.item == null) {
            imageDisplay = "";
        }
        else {
            imageDisplay = this.item.image;
        }

        var element = DomElementServico.GetSeletor(`[data-idcelula=\'${this.celulaDom}\']`)[0];
        var pElement = <HTMLInputElement>element.children[0];
        pElement.innerHTML = imageDisplay;

        let textColor = this.isAliado ?  'texxt-dark' : 'text-white';
        DomElementServico.SetClass(pElement , textColor);
        
        console.log(pElement);
    }
}