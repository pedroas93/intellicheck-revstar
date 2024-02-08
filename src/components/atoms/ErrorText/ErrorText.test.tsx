import { render, screen } from '@/tests/test-utils';

import { ErrorText } from '.';

describe('ErrorText', () => {
  it('should render the heading', () => {
    render(<ErrorText />);

    // Assert
    screen.getByRole('heading', { name: /ErrorText/i });
  });
});
