import { eCodLog } from "../_Enum/eCodLog";

/**
 * Servico para minipular elemento do DOM
 */
export class DomElementServico {


    //#region LOG INFO CONSOLE 

    public static Log(mesg:string , codLog:eCodLog = eCodLog.INFO){
        let arrySwitch = [
            (mesg:string) : void => console.log(mesg),
            (mesg:string) : void => console.warn(mesg),
            (mesg:string) : void => console.error(mesg),
        ] 
    }

    //#endregion


    //#region RECUPERAR ELEMENTOS DOM

    /**
     * Recuperar elemento do DOM pelo seu id
     * @param id 
     */
    public static GetByID(id:string) : HTMLElement {
     
        return document.getElementById(id);
    }

    /**
     * Recuperar colecao de elementos do DOM pelo seu atributo class
     * @param classe 
     */
    public static GetByClass(classe:string) : HTMLCollectionOf<HTMLElement> {
     
        return <HTMLCollectionOf<HTMLElement>> document.getElementsByClassName(classe);
    }

    /**
     * Recupear No de lista de elementos DOM com base na query passada
     * @param query 
     */
    public static GetSeletor(query:string) : NodeListOf<HTMLElement> {
        return document.querySelectorAll(query);
    }

    //#endregion

    //#region MANIPULACAO DE CSS

    /**
     * Verificar se a classe existe no elemento
     * @param element 
     * @param classe 
     */
    public static AnyClass(element:HTMLElement , classe:string) : boolean {
        let classes = element.getAttribute('class').split(' ');

        return classes.filter( e => e == classe ).length >= 1;
    }

    /**
     * Adicionar uma classe css a uma colecao de elementos DOM
     * @param elements elemento DOM
     * @param classe nome da classe css a ser removida
     */
    public static SetClassCollection(elements:HTMLCollectionOf<HTMLElement> , classe:string ) : void {
            
        while(elements.length){

            DomElementServico.SetClass(elements.item(0) , classe);
        }
    }

    /**
     * Remove uma classe css de uma colecao de elementos DOM
     * @param elements elemento DOM
     * @param classe nome da classe css a ser removida
     */
    public static RemoveClassCollection(elements:HTMLCollectionOf<HTMLElement> , classe:string ) : void {

        while(elements.length) {

            DomElementServico.RemoveClass(elements.item(0) , classe);
        }
    }

    /**
     * Adicionar uma classe css a um elemento DOM
     * @param element elemento DOM
     * @param classe nome da classe css a ser adicionada
     */
    public static SetClass(element:HTMLElement , classe:string) : void {
        let classAtributes = element.getAttribute('class') + ` ${classe}`;

        element.setAttribute('class' , classAtributes);
    }
    
    /**
     * Remove uma classe css do elemento DOM
     * @param element elemento DOM
     * @param classe nome da classe css a ser adicionada
     */
    public static RemoveClass(element:HTMLElement , classe:string) : void {
        let classAtributes = element.getAttribute('class');

        element.setAttribute('class' , classAtributes.replace(` ${classe}` , ''));
    }

    //#endregion

}