import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function NavSearch({ title, children }) {
  return (
    <Container>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        {children}
      </div>
    </Container>
  );
}

NavSearch.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
