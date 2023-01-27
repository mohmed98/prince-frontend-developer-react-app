import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CapsuleDetails from '../components/CapsuleDetails';


const initialProps = {
  open: true,
  isLoading: true, 
  loadingFailed: false,
  capsuleInfo: {},
  handleClose: jest.fn()
}

describe('Capsules Details component', () => {

  const renderComponent = (props) => {
    return render(
      <CapsuleDetails {...props} />
    )
  }

  it('should render capsule details component correctly', () => {
    renderComponent(initialProps);

    expect(screen.getByText(/Capsule details/i)).toBeInTheDocument();
    expect(screen.queryByText(/Loading details failed/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/missions/i)).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Close/i })).toBeInTheDocument();
  });

  it('should display loading failed text correctly', () => {
    renderComponent({...initialProps, loadingFailed: true});

    expect(screen.getByText(/Loading details failed/i)).toBeInTheDocument();
    expect(screen.queryByText(/missions/i)).not.toBeInTheDocument();
  });

  it('should call handleclose when close button is clicked', () => {
    renderComponent(initialProps);

    const closeBtn = screen.getByRole('button', { name: /close/i });
    expect(closeBtn).toBeInTheDocument();
    fireEvent.click(closeBtn);
    expect(initialProps.handleClose).toHaveBeenCalledTimes(1);
  });

})
