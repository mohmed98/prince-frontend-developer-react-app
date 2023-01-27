import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Notify from '../components/Notify';

const initialProps = {
  open: true,
  message: 'Notify me',
  notifyType: 'info',
  closeNotification: jest.fn()
}

describe('Notify component', () => {

  const renderNotify = (props) => {
    return render(
      <Notify {...props} />
    )
  }

  it('should render notify component correctly', () => {
    renderNotify(initialProps);

    expect(screen.getByText(/Notify me/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Close/i })).toBeInTheDocument();
  });

  it('should call closeNotification when close button is clicked', () => {
    renderNotify(initialProps);

    const closeBtn = screen.getByRole('button', { name: /close/i });
    expect(closeBtn).toBeInTheDocument();
    fireEvent.click(closeBtn);
    expect(initialProps.closeNotification).toHaveBeenCalledTimes(1);
  });

})
