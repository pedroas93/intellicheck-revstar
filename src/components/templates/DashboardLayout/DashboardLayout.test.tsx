import { render } from '@/tests/test-utils';

import { DashboardLayout } from '.';

describe('DashboardLayout', () => {
  it('should render the heading', () => {
    render(<DashboardLayout />);

    // Assert
    // screen.getByRole('heading', { name: /DashboardLayout/i });
  });
});
