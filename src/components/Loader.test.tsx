import { render, screen } from '@testing-library/react';

import Loader from './Loader';

describe('Test Loader', () => {
  it('Should render text and img', () => {
    render(<Loader />);
    const img = screen.getByRole('img');
    const text = screen.getByText(/Request is in progress Please wait.../i);
    expect(text).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});
