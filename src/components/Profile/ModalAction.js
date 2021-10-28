import React from 'react'
import { useNavigate } from '@reach/router'

export const ModalAction = ({ children, ...props }) => {
	const navigate = useNavigate()
	console.log('button',props)

	const handleAction = () => {
			navigate(`${props.path}`, { replace: true })
	}

	return (
		<button
			type="button"
			className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
			onClick={handleAction}
		>
			{children}
		</button>
	)
}
