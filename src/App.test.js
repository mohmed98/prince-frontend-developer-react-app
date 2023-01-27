import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';


describe('App component', () => {

  it('should render app component correctly', () => {
    render(
        <Provider store={store}>
          <App />
        </Provider>
    );

    const statusFilter = screen.getByRole('textbox', { name: /status/i });
    expect(statusFilter).toBeInTheDocument();
    expect(statusFilter).toHaveValue('');

    fireEvent.change(statusFilter, {target: {value: 'm'}});
    expect(statusFilter).toHaveValue('m');

    expect(screen.getByText(/Copyright © spacex 2023./i)).toBeInTheDocument();
  });

});