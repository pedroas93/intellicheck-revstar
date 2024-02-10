import { render } from '@/tests/test-utils';

import { Label } from '.';

describe('Label', () => {
  it('should render the heading', () => {
    render(<Label />);

    // Assert
    // screen.getByRole('heading', { name: /Label/i });
  });
});
