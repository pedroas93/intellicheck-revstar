import { render } from '@/tests/test-utils';

import { Modal } from '.';

describe('Modal', () => {
  it('should render the heading', () => {
    render(<Modal />);

    // Assert
    // screen.getByRole('heading', { name: /Modal/i });
  });
});
