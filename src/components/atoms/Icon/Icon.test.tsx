import { render, screen } from '@/tests/test-utils';

import { Icon } from '.';

describe('Icon', () => {
  it('should render the heading', () => {
    render(<Icon />);

    // Assert
    screen.getByRole('heading', { name: /Icon/i });
  });
});
