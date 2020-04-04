class ListaFinancas {

    constructor() {
        this.financas = []
    }

    adiciona(financa) {
        this.financas.push(financa)
    }

    getFinanacas() {
        return this.financas
    }
}