import { TabuleiroItem } from "./tabuleiroItem";
import { CelulasIdsValue, CelulasIds, CelulaId } from "../_ObjectValue/celulasTabuleiro";
import { Peao } from "../_Pecas/Peao";


export interface ITabuleiro {
    itemSelectDOM: HTMLInputElement;
    campos: TabuleiroItem[];
    nome: string;
    itemSelect(element: Element): void;
    RecuperarReferenciaId(celulaId: string): CelulaId;
    RecuperarReferenciaReferencia(referencia: number): CelulaId;
}


export class Tabuleiro implements ITabuleiro {


    private num_campos = 64;

    itemSelectDOM: HTMLInputElement;
    campos: TabuleiroItem[] = [];
    nome: string;
    CelulasIds: CelulasIds = CelulasIdsValue;

    constructor() {
        this.carregarCamposr();
        this.carregarPeoes();
    }

    carregarCamposr() {
        for (let i = 0; i < this.num_campos; i++) {
            let celulaDom = this.RecuperarReferenciaReferencia(i + 1);

            this.campos[i] = new TabuleiroItem(i, celulaDom.id);
        }
    }

    private RemoverSelecaoItens(): void {
        var elements = document.getElementsByClassName('item-ative');

        for (let i = 0; i < elements.length; i++) {

            let element: HTMLInputElement = <HTMLInputElement>elements.item(i);
            let classAtributes = element.getAttribute('class');

            element.setAttribute('class', classAtributes.replace(' item-ative', ''));
        }
    }


    itemSelect(element: HTMLInputElement): void {

        this.RemoverSelecaoItens();

        let classAtributes = element.getAttribute('class');
        classAtributes += ` item-ative`;

        console.log(classAtributes);
        element.setAttribute('class', classAtributes);

        let idItemCelula = element.dataset.idcelula
        let tabuleiroItem = this.RecuperaItemTabuleiro(idItemCelula);
        
        let camposMovimento = tabuleiroItem.GetPeca().verificarCamposMovimento(tabuleiroItem.GetCelulaDom());

        this.itensMovimentos(camposMovimento);

        this.itemSelectDOM = element;
    }

    private itensMovimentos(celulaIds:string[]) : void {
        celulaIds.forEach( celula => {
           let element = <HTMLInputElement>document.querySelectorAll(`[data-idcelula=\'${celula}\']`)[0];

           this.SetClass(element , 'item-possivel-movimento');
        });
    }

    private SetClass(element:HTMLInputElement , classe:string ) : void {
        let classAtributes = element.getAttribute('class') + ` ${classe}`;

        element.setAttribute('class' , classAtributes);
    }

    private RemoveClass(element:HTMLInputElement , classe:string) : void {
        let classAtributes = element.getAttribute('class');

        element.setAttribute('class' , classAtributes.replace(` ${classe} ` , ''));
    }


    private RecuperaItemTabuleiro(celulaId:string) : TabuleiroItem {
        let celulaRefere = this.RecuperarReferenciaId(celulaId);
        
        return this.campos[celulaRefere.referencia - 1];
    
    }

    RecuperarReferenciaId(celulaId: string): CelulaId {
        try {
            return this.CelulasIds.celula.filter(e => e.id == celulaId)[0];

        } catch (error) {
            throw new Error(`Não foi possivel localizar a celula escolhida`);
        }
    }

    RecuperarReferenciaReferencia(referencia: number): CelulaId {
        try {
            return this.CelulasIds.celula.filter(e => e.referencia == referencia)[0];

        } catch (error) {
            throw new Error(`Não foi possivel localizar a celula escolhida`);
        }
    }

    private carregarPeoes(): void {
        let item: TabuleiroItem = this.campos[26];

        item.SetPeca(new Peao());
        item.SetDisplay();
    }
}
