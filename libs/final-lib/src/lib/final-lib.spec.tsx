import { render } from '@testing-library/react';

import FinalLib from './final-lib';

describe('FinalLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FinalLib />);
    expect(baseElement).toBeTruthy();
  });
});
