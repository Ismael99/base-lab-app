import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import PropTypes from 'prop-types'
import { TableBody } from './TableBody'
import { TableHeaders } from './TableHeaders'
import { TableActions } from './TableActions'
import { TableSearch } from './TableSearch'
import { useTableSearch } from '../../hooks/useTableSearch'
import './index.css'

export const Table = ({ data, headers, keys, PER_PAGE = 5, idKey }) => {
  // table search state
  const [searchResult, setData, search, handleSearchResult] = useTableSearch(
    data
  )
  useEffect(() => {
    setData(data)
  }, [data])
  // paginator state
  const [currentPage, setCurrentPage] = useState(0)
  console.log(data)
  console.log(searchResult)
  // Paginator handler
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage)
  }

  // const offset = currentPage * PER_PAGE
  const offset = search.length > 0 ? 0 : currentPage * PER_PAGE
  const currentPageData = searchResult
    .slice(offset, offset + PER_PAGE)
    .map((row, key) => (
      <tr key={key} className="border-b border-gray-200 hover:bg-gray-100">
        {keys.map((key, keyValue) => {
          if (keyValue < 1)
            return (
              <td
                key={keyValue}
                className="px-6 py-3 text-left whitespace-nowrap"
              >
                <div className="flex items-center">
                  <span className="font-medium">{row[key]}</span>
                </div>
              </td>
            )
          return (
            <td
              key={keyValue}
              className="px-6 py-3 text-center whitespace-nowrap"
            >
              <div className="flex items-center justify-center">
                <span className="font-medium">{row[key]}</span>
              </div>
            </td>
          )
        })}
        <TableActions key={key} data={row} idKey={idKey} />
      </tr>
    ))

  const pageCount = Math.ceil(searchResult.length / PER_PAGE)

  return (
    <>
      <div className="flex items-center justify-content">
        <div className="mx-auto">
          <TableSearch value={search} onChange={handleSearchResult} />
        </div>
      </div>
      <div className="sm:overflow-x-scroll lg:overflow-x-hidden">
        <div className="flex justify-center font-sans bg-gray-100">
          <div className="w-full lg:w-5/6">
            <div className="my-6 bg-white rounded shadow-md">
              <table className="w-full table-auto min-w-max">
                <TableHeaders headers={headers} />
                <TableBody>{currentPageData}</TableBody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ReactPaginate
        previousLabel={'\u2770 Previous'}
        nextLabel={'Next \u2771'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={
          'pagination my-5 w-1/2 text-xs flex flex-wrap flex-row md:text-md mx-auto'
        }
        previousLinkClassName={
          'pagination__link focus:outline-none hover:opacity-60'
        }
        nextLinkClassName={
          'pagination__link focus:outline-none hover:opacity-60'
        }
        disabledClassName={'pagination__link--disabled focus:outline-none'}
        activeClassName={'pagination__link--active focus:outline-none'}
      />
    </>
  )
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  PER_PAGE: PropTypes.number,
  headers: PropTypes.array.isRequired,
  keys: PropTypes.array.isRequired,
  idKey: PropTypes.string.isRequired
}
