import { render, screen } from '@/tests/test-utils';

import { Input } from '.';

describe('Input', () => {
  it('should render the heading', () => {
    render(<Input />);

    // Assert
    screen.getByRole('heading', { name: /Input/i });
  });
});
