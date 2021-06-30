import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({ children, light = false }) => {
  return <Styled.Container light={light}>{children}</Styled.Container>;
};

Heading.propTypes = {
  children: P.node.isRequired,
  light: P.bool.isRequired,
};
