import React from 'react'
import { Link } from '@reach/router'

export const Card = ({ border_color, module_name, img, text_color, to }) => {
  return (
    <>
      <Link to={to}>
        <div
          className={`border-dashed bg-${border_color}-100 border-2 mx-10 my-7 border-${border_color}-400 py-5 px-2 rounded-lg hover:shadow-xl transform hover:scale-105 flex flex-row justify-center items-center cursor-pointer`}
        >
          <p
            className={`text-4xl text-${text_color}-500 font-bold text-center mr-5`}
          >
            {module_name}
          </p>
          <img src={img} alt="examenes_icon" className="w-28 h-28" />
        </div>
      </Link>
    </>
  )
}
