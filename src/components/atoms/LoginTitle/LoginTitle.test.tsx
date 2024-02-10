import { render } from '@/tests/test-utils';

import { LoginTitle } from '.';

describe('LoginTitle', () => {
  it('should render the heading', () => {
    render(<LoginTitle />);

    // Assert
    // screen.getByRole('heading', { name: /LoginTitle/i });
  });
});
