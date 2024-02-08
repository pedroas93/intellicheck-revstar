import { render, screen } from '@/tests/test-utils';

import { BreadCrumb } from '.';

describe('BreadCrumb', () => {
  it('should render the heading', () => {
    render(<BreadCrumb />);

    // Assert
    screen.getByRole('heading', { name: /BreadCrumb/i });
  });
});
