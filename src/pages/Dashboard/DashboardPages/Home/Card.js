import React from 'react'
import { Link } from '@reach/router'

export const Card = ({
  border_color,
  module_name,
  img,
  text_color,
  bg_color,
  to
}) => {
  return (
    <>
      <Link to={to} className="w-full xl:w-1/3 lg:w-full min-w-max lg:w-1/2">
        <div
          className={`px-3 border-dashed ${bg_color} border-2 mx-10 my-7 ${border_color} py-5 px-2 rounded-lg hover:shadow-xl transform hover:scale-105 flex flex-row justify-center items-center cursor-pointer`}
        >
          <p className={`text-4xl ${text_color} font-bold text-center mr-5`}>
            {module_name}
          </p>
          <img src={img} alt="examenes_icon" className="w-28 h-28" />
        </div>
      </Link>
    </>
  )
}
