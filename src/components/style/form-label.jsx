import React from 'react';

const BASE_STYLE = {
  display: "block",
  marginBottom: "5px",
  color: 'rgba(255, 255, 255, 0.6)'
};

export default function FormLabel({children, style, ...rest}) {
  return <label style={{...BASE_STYLE, style}} {...rest}>{children}</label>
}
