import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumns } from '.';

import mock from './mock';

describe('<GridTwoColumns />', () => {
  it('should render two columns grid', () => {
    const { container } = renderTheme(
      <GridTwoColumns {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
