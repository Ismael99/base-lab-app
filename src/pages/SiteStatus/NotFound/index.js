import React from 'react'
import { Link } from '@reach/router'
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/outline'
import './index.css'
export const NotFound = () => {
  return (
    <>
      <div class="error-page">
        <div>
          <h1 data-h1="404">404</h1>
          <p data-p="PAGE NOT FOUND">PAGE NOT FOUND</p>
        </div>
      </div>
    </>
  )
}
