import React from 'react';
import PropTypes from 'prop-types';

const STYLE = {
  color: 'rgba(255, 255, 255, 0.95)',
  fontWeight: 300,
};

export default function ContentTitle({children, style = {}, ...rest}) {
  return <h1 style={{...STYLE, ...style}} {...rest}>{children}</h1>
}

ContentTitle.propsType = {
  style: PropTypes.object
};
