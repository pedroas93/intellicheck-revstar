import { render, screen } from '@/tests/test-utils';

import { Tabs } from '.';

describe('Tabs', () => {
  it('should render the heading', () => {
    render(<Tabs />);

    // Assert
    screen.getByRole('heading', { name: /Tabs/i });
  });
});
