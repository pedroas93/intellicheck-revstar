import { render, screen } from '@/tests/test-utils';

import { AuthenticateCode } from '.';

describe('AuthenticateCode', () => {
  it('should render successfully', () => {
    render(<AuthenticateCode />);

    // Assert
    // For example, checking if a certain text content is present
    expect(screen.getByText(/some text in your component/i)).toBeInTheDocument();
  });
});
