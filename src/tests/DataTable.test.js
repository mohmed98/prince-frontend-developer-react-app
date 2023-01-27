import React from 'react';
import { render, screen } from '@testing-library/react';

import DataTable from '../components/DataTable';


const initialProps = {
  tableHeaders: [
    { id: 'id', label: 'ID' },
    { id: 'serial', label: 'Serial' },
    { id: 'type', label: 'Type' },
  ],
  tableData: [],
  isLoading: true, 
  onRowClick: jest.fn()
}

describe('DataTable component', () => {

  const renderDataTable = (props) => {
    return render(
      <DataTable {...props} />
    )
  }

  it('should render datatable component correctly', () => {
    renderDataTable(initialProps);

    expect(screen.queryByText(/no data to display/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Serial/i)).not.toBeInTheDocument();
  });

  it('should display no data to display for empty table data', () => {
    renderDataTable({...initialProps, isLoading: false});

    expect(screen.getByText(/no data to display/i)).toBeInTheDocument();
    expect(screen.getByText(/Serial/i)).toBeInTheDocument();
  });

  it('should display data in table data', () => {
    renderDataTable({
      ...initialProps, 
      isLoading: false,
      tableData: [
        {id: 1, serial: '2ns', type: 'Org'}
      ]
    });

    expect(screen.getByText(/Org/i)).toBeInTheDocument();
    expect(screen.getByText(/2ns/i)).toBeInTheDocument();
  });

})
