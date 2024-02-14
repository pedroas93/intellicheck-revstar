import { render } from '@/tests/test-utils';

import { FormsPass } from '.';

describe('FormsPass', () => {
  it('should render the heading', () => {
    render(<FormsPass />);

    // Assert
    // screen.getByRole('heading', { name: /FormsPass/i });
  });
});
