import React from 'react';
import Button from './button';

const STYLE = {
  borderColor: '#ef4444',
  backgroundColor: 'rgba(239, 68, 68, 0.2)',
  color: '#ef4444'
};

const STYLE_HOVER = {
  backgroundColor: '#ef4444',
  borderColor: '#dc2626',
  color: '#FFF'
};

export default function FormDeleteButton({children, ...rest}) {
  return <Button style={STYLE} styleHover={STYLE_HOVER} {...rest}>{children}</Button>
}
