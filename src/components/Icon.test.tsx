import { render, screen } from '@testing-library/react';

import Icon from './Icon';

describe('Test Icon', () => {
  it('Should render icon', () => {
    render(<Icon name="Sun" size={20} onClick={() => {}} color="red" />);
    const svg = screen.getAllByTestId('icon');
    expect(svg).toBeDefined();
  });
});
