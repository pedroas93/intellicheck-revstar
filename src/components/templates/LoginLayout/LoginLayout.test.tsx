import { render } from '@/tests/test-utils';

import { LoginLayout } from './LoginLayout';

describe('LoginLayout', () => {
  it('should render the heading', () => {
    render(<LoginLayout />);

    // Assert
    // screen.getByRole('heading', { name: /LoginLayout/i });
  });
});
