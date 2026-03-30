import React from 'react';
import Button from './button';

const STYLE = {
  borderColor: '#6366f1',
  backgroundColor: '#6366f1',
  color: '#FFF'
};

const STYLE_HOVER = {
  borderColor: '#8b5cf6',
  backgroundColor: '#8b5cf6',
  color: '#FFF',
  boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)'
};

export default function FormSubmitButton({children, ...rest}) {
  return <Button type="submit" style={STYLE} styleHover={STYLE_HOVER} {...rest}>{children}</Button>
}
