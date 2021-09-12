import React from 'react'
const NUM_RESULT = 20
export const ContentExam = ({ data }) => {
  const { examen_realizado_resultados = [], examen_realizado_examen } = data
  const results_cols = []
  for (let i = 0; i < 2; i++) {
    results_cols[i] = examen_realizado_resultados.slice(
      NUM_RESULT * i,
      NUM_RESULT * (i + 1)
    )
  }
  return (
    <div className="content-exam">
      <div className="flex flex-col px-5 pt-1">
        <div className="flex-row">
          <p className="font-bold text-center">{examen_realizado_examen}</p>
        </div>
        <div className="flex flex-row justify-between mt-5 uppercase">
          {results_cols.map((col, index) => {
            return (
              <div className="flex flex-col w-1/2" key={index}>
                {col.map((resultado, index) => {
                  return (
                    <div
                      className="flex flex-row mb-1 w-full text-xs"
                      key={index}
                    >
                      <p className="font-bold mr-1 w-full">{`${resultado.label}: `}</p>
                      <p className="w-full">{resultado.value}</p>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
        <div className="flex flex-col"></div>
      </div>
    </div>
  )
}
