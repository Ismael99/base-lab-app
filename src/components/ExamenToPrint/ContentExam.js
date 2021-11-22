import React from 'react'
export const ContentExam = ({ data }) => {
  const { examen_realizado_resultados = [], examen_realizado_examen } = data
  return (
    <div className="content-exam">
      <div className="flex flex-col px-5 pt-1">
        <div className="flex-row">
          <p className="font-bold text-center underline">
            {examen_realizado_examen}
          </p>
        </div>
        <div className="flex flex-col justify-between mt-5 uppercase">
          <div className="w-full flex flex-row text-sm mb-3">
            <p className="w-2/5 font-bold">Campo</p>
            <p className="w-2/5 font-bold">Resultado</p>
            <p className="w-1/5 font-bold text-center">Rango normal</p>
          </div>
          {examen_realizado_resultados.map((resultado, index) => {
            return (
              <div className={`flex flex-row w-full mb-1 text-xs`} key={index}>
                <p className="w-2/5 mr-1 font-bold break-words">{`${resultado.label}: `}</p>
                <p className="w-2/5 break-words">{resultado.value}</p>
                <p className="w-1/5 text-center break-words">
                  {resultado.rn ?? ''}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
