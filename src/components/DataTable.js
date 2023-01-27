import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';

import { TableLoader } from './skeletonLoaders';


export default function DataTable({
  tableHeaders,
  tableData,
  onRowClick,
  isLoading
}) {

  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  return (
    <>
      {
        isLoading ? (
          <TableLoader />
        ) : (
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {tableHeaders.map((header) => (
                      <TableCell
                        key={header.id}
                        align={header?.align}
                        style={{ minWidth: header?.minWidth }}
                      >
                        {header.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                {tableData.length === 0 ? (
                  <tbody style={{ padding: 10, display: 'flex', justifyContent: 'center' }}>
                    <tr>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>
                        <span>No data to display</span>
                      </td>
                    </tr>
                  </tbody>
                ) : (
                  <>
                    <TableBody>
                      {tableData
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, i) => {
                          return (
                            <TableRow hover
                              tabIndex={-1}
                              key={i}
                              onClick={onRowClick ? () => onRowClick(row) : null}
                              sx={{ cursor: 'pointer' }}
                            >
                              {tableHeaders.map((header) => {
                                const value = row[header.id];
                                return (
                                  <TableCell key={header.id} align={header.align}>
                                    {header.render
                                      ? header.render(value)
                                      : value}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </>
                )}
              </Table>
            </TableContainer>
            {tableData.length !== 0 && (
              <TablePagination
                rowsPerPageOptions={[10]}
                component="div"
                count={tableData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={(e, page) => setPage(page)}
              />
            )}
          </Paper>
        )
      }
    </>
  );
}

DataTable.propTypes = {
  tableHeaders: PropTypes.array.isRequired,
  tableData: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onRowClick: PropTypes.func
};