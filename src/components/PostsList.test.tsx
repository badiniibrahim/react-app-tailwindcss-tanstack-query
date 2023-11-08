import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import PostsList from './PostList';
import i18n from '../i18n';

describe('PostsList Test', () => {
  it('Should display correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <PostsList
          posts={[
            { id: 0, title: 'title', body: 'body', userId: 0 },
            { id: 1, title: 'title-1', body: 'body-1', userId: 1 },
          ]}
          onPress={() => {}}
        />
      </I18nextProvider>,
    );
    const listItem = screen.getAllByTestId('post-item');
    expect(listItem.length).toBe(2);
  });
});
