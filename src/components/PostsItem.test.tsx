import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import PostsItem from './PostsItem';
import i18n from '../i18n';

describe('PostsItem Test', () => {
  it('Should display correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <PostsItem
          post={{ id: 0, title: 'title', body: 'body', userId: 0 }}
          onPress={() => {}}
        />
      </I18nextProvider>,
    );
    const title = screen.getByText(/title/i);
    const body = screen.getByText(/body/i);
    const btn = screen.getByText(/See details/i);
    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });
});
