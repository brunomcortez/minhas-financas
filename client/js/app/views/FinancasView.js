
import { View } from './View'
import { DateHelper } from '../helpers/DateHelper'

export class FinancasView extends View {
  constructor(elemento) {
    super(elemento)
  }

  template(model) {

    return `<table class="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Data</th>
            <th scope="col">#</th>
            <th scope="col">$</th>
            <th scope="col">=</th>
          </tr>
        </thead>
        <tbody>
            ${model.financas.map(
      financa => {
        return `<tr>
                    <td>${financa.item}</td>
                    <td>${DateHelper.dataParaTexto(financa.data)}</td>
                    <td>${financa.quantidade}</td>
                    <td>${financa.valor}</td>
                    <td>${financa.total}</td>
                  </tr>`
      }
    ).join("")
      }
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4"></td>
            <td>${model.financas.reduce((acc, financa) => acc + financa.total, 0.0)}</td>
          </tr>
        </tfoot>
      </table>`
  }

}