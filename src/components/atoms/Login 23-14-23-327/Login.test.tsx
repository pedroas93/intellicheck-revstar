import { render, screen } from '@/tests/test-utils';

import { Login } from '.';

describe('Login', () => {
  it('should render the heading', () => {
    render(<Login />);

    // Assert
    screen.getByRole('heading', { name: /Login/i });
  });
});
