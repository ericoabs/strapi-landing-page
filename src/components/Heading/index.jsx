import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({ children, colorDark = true, as = 'h1' }) => {
  return (
    <Styled.Container colorDark={colorDark} as={as}>
      {children}
    </Styled.Container>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool.isRequired,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};
