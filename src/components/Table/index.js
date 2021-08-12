import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import PropTypes from 'prop-types'
import { TableBody } from './TableBody'
import { TableHeaders } from './TableHeaders'
import { TableActions } from './TableActions'
import { TableActionsLogs } from './TableActionsLogs'
import { TableSearch } from './TableSearch'
import { useTableSearch } from '../../hooks/useTableSearch'
import './index.css'

export const Table = ({
  data,
  headers,
  keys,
  PER_PAGE = 8,
  idKey,
  addActions = true,
  actionType = 'standar'
}) => {
  const ActionTypeRender = (actionType) => {
    switch (actionType) {
      case 'standar':
        return TableActions
      case 'logs':
        return TableActionsLogs
      default:
        return TableActions
    }
  }

  const ActionRender = ActionTypeRender(actionType)

  // table search state
  const [searchResult, search, handleSearchResult] = useTableSearch(data)
  // paginator state
  const [currentPage, setCurrentPage] = useState(0)
  // Paginator handler
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage)
  }

  // const offset = currentPage * PER_PAGE
  const offset = search.length > 0 ? 0 : currentPage * PER_PAGE
  const currentPageData = searchResult
    .slice(offset, offset + PER_PAGE)
    .map((row, keyRow) => (
      <tr key={keyRow} className="border-b border-gray-200 hover:bg-gray-100">
        {keys.map((keyName, key) => {
          return (
            <td
              key={key}
              className={`px-6 py-3 ${
                key < 1 ? ' text-center ' : ' text-center '
              } whitespace-nowrap`}
            >
              <div
                className={`flex items-center ${
                  key < 1 ? ' justify-left ' : ' justify-center '
                }`}
              >
                <span className="font-medium">
                  {keyName.includes('created_at') ||
                  keyName.includes('updated_at')
                    ? new Date(row[keyName]).toUTCString()
                    : row[keyName]}
                </span>
              </div>
            </td>
          )
        })}
        {addActions && <ActionRender key={keyRow} data={row} idKey={idKey} />}
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
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
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
