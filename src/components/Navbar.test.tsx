import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import Navbar from './Navbar';
import i18n from '../i18n';

describe('Test Navbar', () => {
  it('Should display nav title', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Navbar />
      </I18nextProvider>,
    );
    const title = screen.getByText(/TanStack Query/i);
    expect(title).toBeInTheDocument();
  });

  it('Should render Navbar', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Navbar />
      </I18nextProvider>,
    );

    const svg = screen.getByTestId('icon');
    expect(svg).toBeInTheDocument();
  });

  it('Should render two images', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Navbar />
      </I18nextProvider>,
    );
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(2);
  });
});
