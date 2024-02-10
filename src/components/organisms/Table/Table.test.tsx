import { render } from '@/tests/test-utils';

import { Table } from '.';

describe('Table', () => {
  it('should render the heading', () => {
    render(<Table />);

    // Assert
    // screen.getByRole('heading', { name: /Table/i });
  });
});
