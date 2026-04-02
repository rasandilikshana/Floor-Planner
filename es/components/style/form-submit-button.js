var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import Button from './button';

var STYLE = {
  borderColor: '#6366f1',
  backgroundColor: '#6366f1',
  color: '#FFF'
};

var STYLE_HOVER = {
  borderColor: '#8b5cf6',
  backgroundColor: '#8b5cf6',
  color: '#FFF',
  boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)'
};

export default function FormSubmitButton(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['children']);

  return React.createElement(
    Button,
    _extends({ type: 'submit', style: STYLE, styleHover: STYLE_HOVER }, rest),
    children
  );
}