import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá Mundo" />);
    const heading = screen.getByRole('heading', { name: 'Olá Mundo' });
    expect(heading).toBeInTheDocument();
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render logo image', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá Mundo" srcImg="image.jpg" />,
    );
    const heading = screen.getByRole('heading', { name: 'Olá Mundo' });
    expect(heading).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Olá Mundo' })).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Olá Mundo" srcImg="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
