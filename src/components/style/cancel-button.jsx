import React from 'react';
import Button from './button';

const STYLE = {
  borderColor: 'rgba(255, 255, 255, 0.08)',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  color: 'rgba(255, 255, 255, 0.6)'
};

const STYLE_HOVER = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderColor: 'rgba(255, 255, 255, 0.15)',
  color: 'rgba(255, 255, 255, 0.95)'
};

export default function CancelButton({children, ...rest}) {
  return <Button style={STYLE} styleHover={STYLE_HOVER} {...rest}>{children}</Button>
}
