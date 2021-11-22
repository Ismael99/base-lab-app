import React from 'react'
import { HeadExam } from './HeadExam'
import { ContentExam } from './ContentExam'
import { ExamFooter } from './ExamFooter'
import './pageStyle.css'

//Debode recibir un array en las props de los examenes realizados
//Hacer un map e imprimir varias veces el componente (una vez por cada examen)
class ExamenToPrint extends React.Component {
  render() {
    return (
      <div className="pages-content hidden">
        {this.props.examenesRealizadosOrden.map((examenRealizado, index) => {
          return (
            <div key={index}>
              <div className="page">
                <HeadExam {...this.props} />
                <ContentExam data={examenRealizado} />
                <ExamFooter />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ExamenToPrint
