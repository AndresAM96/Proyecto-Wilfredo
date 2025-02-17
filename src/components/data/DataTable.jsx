import { useState } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

const DataTable = ({ data, columns, itemsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(item =>
    Object.values(item).some(val =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const displayedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <table>
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.accessor}>{col.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedData.map((row, index) => (
            <tr key={index}>
              {columns.map(col => (
                <td key={col.accessor}>{row[col.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Prev</button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};
DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    Header: PropTypes.string.isRequired,
    accessor: PropTypes.string.isRequired
  })).isRequired,
  itemsPerPage: PropTypes.number
};

export default DataTable;