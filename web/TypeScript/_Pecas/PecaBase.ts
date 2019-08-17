import { eImagePecas } from "../_ObjectValue/imagePecas.enum";
import { letras } from "../_ObjectValue/celulasTabuleiro";
import { eCodTipoMovimento } from "../_Enum/eCodTipoMovimento";
import { ArgsMovimento } from "../_ObjectValue/ArgsMovimento";
import { CamposMovimento } from "../_Domain/camposMovimento";




export abstract class PecaBase {
    [x: string]: any;

    private pilhaMovimento: string[];

    nome: string;

    abstract image: eImagePecas;

    protected abstract formulasMovimento: string[];
    protected abstract formulasMovimentoEspecial: string[];
    protected abstract formulasMovimentoCaptura: string[];

    GetMovimento(): string[] {
        return this.formulasMovimento;
    }

    GetMovimentoEspecial(): string[] {
        return this.formulasMovimentoEspecial;
    }

    GetMovimentoCaptura(): string[] {
        return this.formulasMovimentoCaptura;
    }

    abstract movimento(): void;
    abstract IsPossibilidadeCaptura(): number[];

    verificarCamposMovimento(celulaId: string): CamposMovimento {
        this.pilhaMovimento = this.formulasMovimento;


        let response: CamposMovimento = new CamposMovimento();

        this.pilhaMovimento.forEach(agrMovimento => {

            let objectArgs: ArgsMovimento = new ArgsMovimento(agrMovimento, this);

            response.movimentoYtop.push(...this.movimentoEixoYTop(objectArgs, celulaId).filter(e => e != celulaId && e != undefined));
            response.movimentoYBottom.push(...this.movimentoEixoYBottm(objectArgs, celulaId).filter(e => e != celulaId && e != undefined));
            response.movimentoXLeft.push(...this.movimentoEixoXLeft(objectArgs, celulaId).filter(e => e != celulaId && e != undefined));
            response.movimentoXRight.push(...this.movimentoEixoXRight(objectArgs, celulaId).filter(e => e != celulaId && e != undefined));
            response.movimentoWLeft.push(...this.movimentoEixoWLeft(objectArgs, celulaId).filter(e => e != celulaId && e != undefined));
            response.movimentoWRight.push(...this.movimentoEixoWRight(objectArgs, celulaId).filter(e => e != celulaId && e != undefined));
            response.movimentoZLeft.push(...this.movimentoEixoZLeft(objectArgs, celulaId).filter(e => e != celulaId && e != undefined));
            response.movimentoZLeft.push(...this.movimentoEixoZRight(objectArgs, celulaId).filter(e => e != celulaId && e != undefined));
        });

        return response;
    }

    private validarExpressao(arg: string) {

    }

    //#region MOVIMENTO EIXO Z 

    private movimentoEixoZRight(argsMovimento: ArgsMovimento, celulaId: string): string[] {
        if (argsMovimento.tipoMovimento == eCodTipoMovimento.SIMPLES) {
            return this.movimentoEixoZRightSimples(argsMovimento, celulaId);
        }

        return [];
    }
    
    private movimentoEixoZRightSimples(argsMovimento: ArgsMovimento, celulaId: string): string[] {
        let expressaoMovimento = argsMovimento.argsMovimento[0];

        let oper: string = expressaoMovimento[0];
        let mov: string = expressaoMovimento[1];
        let Eixo: string = expressaoMovimento[2];
        let response: string[] = [];

        if (oper == "+" && Eixo == "Z") {

            let col: number;

            if (mov == "*")
                col = -1;
            else
                col = parseInt(mov);

            let i = parseInt(celulaId[1]);
            let l = letras.indexOf(celulaId[0])

            while (i < 8 && i > 0 && l < letras.length) {
                i++;
                l++;
                col--;

                if (letras[l] != undefined && i != 0) {

                    let celulaId = `${letras[l]}${i}`;
                    response.push(celulaId);

                    if (col == 0)
                        break;

                } else {
                    break;
                }
            }
        }

        return response;
    }

    private movimentoEixoZLeft(argsMovimento: ArgsMovimento, celulaId: string): string[] {
        if (argsMovimento.tipoMovimento == eCodTipoMovimento.SIMPLES) {
            return this.movimentoEixoZLeftSimples(argsMovimento, celulaId);
        }

        return [];
    }

    private movimentoEixoZLeftSimples(argsMovimento: ArgsMovimento, celulaId: string): string[] {
        let expressaoMovimento = argsMovimento.argsMovimento[0];

        let oper: string = expressaoMovimento[0];
        let mov: string = expressaoMovimento[1];
        let Eixo: string = expressaoMovimento[2];
        let response: string[] = [];

        if (oper == "-" && Eixo == "Z") {

            let col: number;

            if (mov == "*")
                col = -1;
            else
                col = parseInt(mov);

            let i = parseInt(celulaId[1]);
            let l = letras.indexOf(celulaId[0])

            while (i >= 1 && l > 0) {
                i--;
                l--;
                col--;

                if (letras[l] != undefined && i != 0) {

                    let celulaId = `${letras[l]}${i}`;
                    response.push(celulaId);

                    if (col == 0)
                        break;

                } else {
                    break;
                }
            }
        }

        return response;
    }
    

    //#endregion

    //#region MOVIMENTO EiXO W

    private movimentoEixoWRight(argsMovimento: ArgsMovimento, celulaId: string): string[] {

        if (argsMovimento.tipoMovimento == eCodTipoMovimento.SIMPLES) {
            return this.movimentoEixoWRightSimples(argsMovimento, celulaId);
        }

        return [];
    }

    private movimentoEixoWRightSimples(argsMovimento: ArgsMovimento, celulaId: string): string[] {
        let expressaoMovimento = argsMovimento.argsMovimento[0];

        let oper: string = expressaoMovimento[0];
        let mov: string = expressaoMovimento[1];
        let Eixo: string = expressaoMovimento[2];
        let response: string[] = [];

        if (oper == "+" && Eixo == "W") {

            let col: number;

            if (mov == "*")
                col = -1;
            else
                col = parseInt(mov);

            let i = parseInt(celulaId[1]);
            let l = letras.indexOf(celulaId[0])

            while (i < 8 && i > 0 &&  l >= 1) {
                i++;
                l--;
                col--;
                if (letras[l] != undefined && i != 0) {
                    let celulaId = `${letras[l]}${i}`;
                    response.push(celulaId);

                    if (col == 0)
                        break;
                } else {
                    break;
                }
            }

        }

        return response;
    }

    private movimentoEixoWLeft(argsMovimento: ArgsMovimento, celulaId: string): string[] {

        if (argsMovimento.tipoMovimento == eCodTipoMovimento.SIMPLES) {
            return this.movimentoEixoWLeftSimples(argsMovimento, celulaId);
        }

        return [];
    }

    private movimentoEixoWLeftSimples(argsMovimento: ArgsMovimento, celulaId: string): string[] {
        let expressaoMovimento = argsMovimento.argsMovimento[0];

        let oper: string = expressaoMovimento[0];
        let mov: string = expressaoMovimento[1];
        let Eixo: string = expressaoMovimento[2];
        let response: string[] = [];

        if (oper == "-" && Eixo == "W") {

            let col: number;

            if (mov == "*")
                col = -1;
            else
                col = parseInt(mov);

            let i = parseInt(celulaId[1]);
            let l = letras.indexOf(celulaId[0])

            while (i >= 1 && l <= letras.length) {
                i--;
                l++;
                col--;
                if (letras[l] != undefined && i != 0) {
                    let celulaId = `${letras[l]}${i}`;
                    response.push(celulaId);

                    if (col == 0)
                        break;
                } else {
                    break;
                }
            }
        }

        return response;
    }

    //#endregion

    //#region EIXO X LEFT

    private movimentoEixoXLeft(argsMovimento: ArgsMovimento, celulaId: string): string[] {
        if (argsMovimento.tipoMovimento == eCodTipoMovimento.SIMPLES) {
            return this.movimentoEixoXLeftSimples(argsMovimento, celulaId);
        }

        return [];
    }

    private movimentoEixoXLeftSimples(argsMovimento: ArgsMovimento, celulaId: string): string[] {
        let expressaoMovimento = argsMovimento.argsMovimento[0];

        let oper: string = expressaoMovimento[0];
        let mov: string = expressaoMovimento[1];
        let Eixo: string = expressaoMovimento[2];
        let response: string[] = [];

        if (oper == "-" && Eixo == "X") {

            if (mov == "*")
                return this.continuoXLeft(celulaId);

            let row = parseInt(celulaId[1]);
            let col = parseInt(mov);
            let atualCol = parseInt(celulaId[1]);

            for (let i = 1; i > col && i > 0; i--) {

                response.push(`${celulaId[0]}${atualCol + (row++)}`);
            }
        }

        return response;
    }

    protected continuoXLeft(celulaId: string): string[] {
        let response: string[] = [];
        let row: number = parseInt(celulaId[1]);

        for (let i = row; i >= 1; i--) {
            response.push(`${celulaId[0]}${i}`);
        }

        return response;
    }

    //#endregion

    //#region EIXO X RIGHT

    private movimentoEixoXRight(argsMovimento: ArgsMovimento, celulaId: string): string[] {
        if (argsMovimento.tipoMovimento == eCodTipoMovimento.SIMPLES) {
            return this.movimentoEixoXRightSimples(argsMovimento, celulaId);
        }

        return [];
    }

    private movimentoEixoXRightSimples(argsMovimento: ArgsMovimento, celulaId: string): string[] {
        let expressaoMovimento = argsMovimento.argsMovimento[0];

        let oper: string = expressaoMovimento[0];
        let mov: string = expressaoMovimento[1];
        let Eixo: string = expressaoMovimento[2];
        let response: string[] = [];

        if (oper == "+" && Eixo == "X") {

            if (mov == "*")
                return this.continuoXRight(celulaId);

            let row = celulaId[0];
            let col = parseInt(mov);
            let atualCol = parseInt(celulaId[1]);
            let indexofRow = letras.indexOf(row);

            for (let i = atualCol; indexofRow > col && indexofRow <= 8; indexofRow++) {

                response.push(`${celulaId[0]}${celulaId[i]}`);
            }
        }

        return response;
    }

    protected continuoXRight(celulaId: string): string[] {
        let response: string[] = [];
        let row: number = parseInt(celulaId[1]);

        for (let i = row; i <= 8; i++) {
            response.push(`${celulaId[0]}${i}`);
        }

        return response;
    }

    //#endregion

    //#region EIXO Y TOP

    /**
     * Verificar campos disponiveis no eixo Y TOP
     * @param expressaoMovimento 
     * @param celulaId 
     */
    protected movimentoEixoYTop(argsMovimento: ArgsMovimento, celulaId: string): string[] {

        if (argsMovimento.tipoMovimento == eCodTipoMovimento.SIMPLES) {
            return this.movimentoEixoYTopSimples(argsMovimento, celulaId);
        }

        return [];
    }

    protected movimentoEixoYTopSimples(argsMovimento: ArgsMovimento, celulaId: string): string[] {

        let expressaoMovimento = argsMovimento.argsMovimento[0];

        let oper: string = expressaoMovimento[0];
        let mov: string = expressaoMovimento[1];
        let Eixo: string = expressaoMovimento[2];
        let response: string[] = [];

        if (oper == "+" && Eixo == "Y") {

            if (mov == "*")
                return this.continuoYTop(celulaId);

            let row = celulaId[0];
            let col = parseInt(mov);
            let indexofRow = letras.indexOf(row);

            let novoEixoY = (indexofRow - col) > 0 ? (indexofRow - col) : 0;

            for (let i = indexofRow; indexofRow > novoEixoY; indexofRow--) {
                response.push(`${letras[indexofRow - 1]}${celulaId[1]}`);
            }
        }
        return response;
    }

    protected continuoYTop(celulaId: string): string[] {
        let response: string[] = [];
        let row: number = letras.indexOf(celulaId[0]) + 1;

        for (let i = row; i > 0; i--) {
            response.push(`${letras[i - 1]}${celulaId[1]}`);
        }

        return response;
    }

    //#endregion

    //#region EIXO Y BOTTOM

    protected movimentoEixoYBottm(argsMovimento: ArgsMovimento, celulaId: string): string[] {

        if (argsMovimento.tipoMovimento == eCodTipoMovimento.SIMPLES) {
            return this.movimentoEixoYBottomSimples(argsMovimento, celulaId);
        }

        return [];
    }

    protected movimentoEixoYBottomSimples(argsMovimento: ArgsMovimento, celulaId: string): string[] {
        let expressaoMovimento = argsMovimento.argsMovimento[0];

        let oper: string = expressaoMovimento[0];
        let mov: string = expressaoMovimento[1];
        let Eixo: string = expressaoMovimento[2];
        let response: string[] = [];

        if (oper == "-" && Eixo == "Y") {

            if (mov == "*")
                return this.continuoYBottom(celulaId);

            let row = letras.indexOf(celulaId[0]);
            let col = parseInt(mov);
            let l = parseInt(celulaId[1]);

            for (let i = 1; i <= col && i > 0; i--) {

                response.push(`${letras[row + i]}${celulaId[1]}`);
            }
        }

        return response;
    }

    protected continuoYBottom(celulaId: string): string[] {
        let response: string[] = [];
        let row: number = letras.indexOf(celulaId[0]) + 1;

        for (let i = row; i <= letras.length; i++) {
            response.push(`${letras[i - 1]}${celulaId[1]}`);
        }

        return response;
    }

    //#endregion

}









