import { render } from '@/tests/test-utils';

import { Toggle } from '.';

describe('Toggle', () => {
  it('should render the heading', () => {
    render(<Toggle />);

    // Assert
    // screen.getByRole('heading', { name: /Toggle/i });
  });
});
