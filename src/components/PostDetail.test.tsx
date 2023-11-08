/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react';

import PostDetail from './PostDetail';

describe('PostDetail Test', () => {
  it('Should display correctly', () => {
    render(
      <PostDetail post={{ id: 0, title: 'title', body: 'body', userId: 0 }} />,
    );
    const title = screen.getByText(/title/i);
    const body = screen.getByText(/body/i);
    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();
  });
});
