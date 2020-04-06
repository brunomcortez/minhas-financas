class FinancaController {
    constructor(){
        this.inputItem = document.querySelector("#item")
        this.listaFinancas = new ListaFinancas()
        this.financasView = new FinancasView(document.querySelector("#financasView"))
    }

    adiciona(evento){
        evento.preventDefault()
        this.listaFinancas.adiciona(new Financa())
        this.listaFinancas.adiciona(this.criaFinanca())
        this.financasView.update()
    }    

    criaFinanca() {
        return new Financa(this.inputItem.value, "06/04/2020", 1, 200)
    }

}