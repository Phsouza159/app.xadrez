import { TabuleiroItem } from "./tabuleiroItem";
import { CelulasIdsValue, CelulasIds, CelulaId } from "../_ObjectValue/celulasTabuleiro";
import { DomElementServico } from "../_Service/DomElemntService";
import { PecaBase } from "../_Pecas/PecaBase";
import { Peao, Torre, Rainha } from "../_Pecas/exportsPecas";
import { CamposMovimento } from "./camposMovimento";
import { Rei } from "../_Pecas/rei";


export interface ITabuleiro {
    itemSelectDOM: HTMLElement;
    campos: TabuleiroItem[];
    nome: string;
    itemSelect(element: Element): void;
    RecuperarReferenciaId(celulaId: string): CelulaId;
    RecuperarReferenciaReferencia(referencia: number): CelulaId;
}

/**
 * App Xadrez - Class principal
 */
export class Tabuleiro implements ITabuleiro {

    private num_campos = 64;

    itemSelectDOM: HTMLElement;
    campos: TabuleiroItem[] = [];
    nome: string;
    CelulasIds: CelulasIds = CelulasIdsValue;

    constructor() {
        this.carregarCamposr();
        this.carregarPeoes();
    }

    //#region MANIPULACAO ITENS TABULEIRO

    /**
     * Allimentar campos do tabuleiro com TabuleiroItem
     */
    private carregarCamposr() : void {
        for (let i = 0; i < this.num_campos; i++) {
            let celulaDom = this.RecuperarReferenciaReferencia(i + 1);

            this.campos[i] = new TabuleiroItem(i, celulaDom.id);
        }
    }

    /**
     * Recuperar TabuleiroItem com base na celula ID
     * @param celulaId 
     */
    private RecuperaItemTabuleiro(celulaId:string) : TabuleiroItem {
        let celulaRefere = this.RecuperarReferenciaId(celulaId);
        
        return this.campos[celulaRefere.referencia - 1];
    
    }

    /**
     * Recuperar referencia de CelulaId com base no id passado
     * @param celulaId 
     */
    RecuperarReferenciaId(celulaId: string): CelulaId {
        try {
            return this.CelulasIds.celula.filter(e => e.id == celulaId)[0];

        } catch (error) {
            throw new Error(`Não foi possivel localizar a celula escolhida`);
        }
    }

    /**
     * Recuperar referencia de CelulaId com base na referencia passada
     * @param referencia 
     */
    RecuperarReferenciaReferencia(referencia: number): CelulaId {
        try {
            return this.CelulasIds.celula.filter(e => e.referencia == referencia)[0];

        } catch (error) {
            throw new Error(`Não foi possivel localizar a celula escolhida`);
        }
    }

    //#endregion

    //#region  MANIPULACAO DE ITEM PELO TABULEIRO

    private RemoverSelecaoItens(): void {
        // remover itens ativos
        let elements = DomElementServico.GetByClass('item-ative');
        DomElementServico.RemoveClassCollection(elements , 'item-ative')
    
        // removee possiveis moviemento
        elements = DomElementServico.GetByClass('item-possivel-movimento');
        DomElementServico.RemoveClassCollection(elements , 'item-possivel-movimento')
    }

    /**
     * Recuperar TabuleiroItem referente ao elemento passado
     * @param element 
     * @throws Arrgumento invalid (data-idcelula) null
     */
    private RecuperarItemTabuleiroElement(element:HTMLElement) : TabuleiroItem{
       
        if( element.dataset.idcelula != null ){
        
            let idItemCelula = element.dataset.idcelula
            return this.RecuperaItemTabuleiro(idItemCelula);
        }

        throw new Error("não foi possivel localizar dataset data-idcelula");
    }


    /**
     * Ativar efeitos para o item selecionado no tabuleiro
     * @param element 
     */
    itemSelect(element: HTMLElement): void {

        if(DomElementServico.AnyClass(element , 'item-possivel-movimento')){

            this.ExecultarMovimento(element);
            return;
        }

        this.RemoverSelecaoItens();

        //marcar item tabuleiro
        DomElementServico.SetClass(element , 'item-ative');

        let tabuleiroItem = this.RecuperarItemTabuleiroElement(element);
        
        // marcar possiveis movimentos
        if(!tabuleiroItem.IsEmpyt()){

            let camposMovimento = tabuleiroItem.GetPeca().verificarCamposMovimento(tabuleiroItem.GetCelulaDom());
            let camposValidos = this.ValidarCamposMovimento(camposMovimento);
            
            console.log(camposMovimento);

            this.itensMovimentos(camposValidos);
        }

        this.itemSelectDOM = element;
    }


    private ValidarCamposMovimento(camposMovimento:CamposMovimento) : string[] {
        let response:string[] = [];

        response.push(...this.VericarListasCamposMovimentoEixo(camposMovimento.movimentoYtop));
        response.push(...this.VericarListasCamposMovimentoEixo(camposMovimento.movimentoXLeft));
        response.push(...this.VericarListasCamposMovimentoEixo(camposMovimento.movimentoXRight));
        response.push(...this.VericarListasCamposMovimentoEixo(camposMovimento.movimentoYBottom));
        response.push(...this.VericarListasCamposMovimentoEixo(camposMovimento.movimentoWLeft));
        response.push(...this.VericarListasCamposMovimentoEixo(camposMovimento.movimentoWRight));
        response.push(...this.VericarListasCamposMovimentoEixo(camposMovimento.movimentoZLeft));
        response.push(...this.VericarListasCamposMovimentoEixo(camposMovimento.movimentoZRight));

        return response;
    }

    /**
     * Validar possiveis campos 
     * @param campos lista celulas tabuleiro
     */
    private VericarListasCamposMovimentoEixo(campos:string[]) : string[] {
        let response:string[] = [];

        for(let campo of campos){
        
            let itemTabuleiro = this.RecuperarReferenciaId(campo);
            let tabuleiroItem = this.campos[itemTabuleiro.referencia - 1];
        
            if(tabuleiroItem.IsEmpyt() || !tabuleiroItem.isAliado){
                response.push(campo);
            }else {

                break;
            }
        }

        return response;
    }

    /**
     * Execultar movimento da peca
     * @param element 
     */
    private ExecultarMovimento(element:HTMLElement) : void {
        let casaAnterior = this.RecuperarItemTabuleiroElement(this.itemSelectDOM);
        let casaNova = this.RecuperarItemTabuleiroElement(element);

        if(!casaNova.IsEmpyt()){

        }

        casaNova.isAliado = casaAnterior.isAliado;
        casaNova.SetPeca(casaAnterior.GetPeca());
        casaAnterior.RemovePeca();

        casaNova.SetDisplay();
        casaAnterior.SetDisplay();

        this.RemoverSelecaoItens();
        this.itemSelectDOM = element;
    }

    /**
     * Ativar efeito para possiveis movimento do item escolhido
     * @param celulaIds 
     */
    private itensMovimentos(celulaIds:string[]) : void {
        celulaIds.forEach( celula => {
           let element = DomElementServico.GetSeletor(`[data-idcelula=\'${celula}\']`)[0];
           
           DomElementServico.SetClass(element , 'item-possivel-movimento');
        });
    }

    
    //#region  CARREGAR PECAS PELO TABULEIRO

    private carregarPeoes(): void {
        let item: TabuleiroItem = this.campos[26];
        
        item.isAliado = true;
        item.SetPeca(new Peao());
        item.SetDisplay();

        this.campos[26] = item;

        let torre : TabuleiroItem = this.campos[35];

        torre.isAliado = true;
        torre.SetPeca(new Torre());
        torre.SetDisplay();

        this.campos[35] = torre;

        let rainha : TabuleiroItem = this.campos[28];

        rainha.isAliado = true;
        rainha.SetPeca(new Rainha());
        rainha.SetDisplay();

        this.campos[28] = rainha;

        let rei : TabuleiroItem = this.campos[50];

        rei.isAliado = true;
        rei.SetPeca(new Rei());
        rei.SetDisplay();

        this.campos[50] = rei;
    }

    //#endregion
}
