var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import Button from './button';

var STYLE = {
  borderColor: '#ef4444',
  backgroundColor: 'rgba(239, 68, 68, 0.2)',
  color: '#ef4444'
};

var STYLE_HOVER = {
  backgroundColor: '#ef4444',
  borderColor: '#dc2626',
  color: '#FFF'
};

export default function FormDeleteButton(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['children']);

  return React.createElement(
    Button,
    _extends({ style: STYLE, styleHover: STYLE_HOVER }, rest),
    children
  );
}