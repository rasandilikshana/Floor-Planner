var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  user-select: none;\n'], ['\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  user-select: none;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 11px;\n  color: ', ';\n  padding: 8px 15px;\n  margin: 0;\n  background: rgba(255, 255, 255, 0.03);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.06);\n  }\n'], ['\n  font-size: 11px;\n  color: ', ';\n  padding: 8px 15px;\n  margin: 0;\n  background: rgba(255, 255, 255, 0.03);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.06);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.6);\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  padding: 0;\n  background: rgba(0, 0, 0, 0.15);\n  display: ', ';\n'], ['\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.6);\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  padding: 0;\n  background: rgba(0, 0, 0, 0.15);\n  display: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  gap: 4px;\n'], ['\n  display: flex;\n  align-items: center;\n  gap: 4px;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

var PanelWrapper = styled.div.withConfig({
  displayName: 'panel__PanelWrapper',
  componentId: 'sc-1u0i9ar-0'
})(_templateObject);

var PanelHeader = styled.h3.withConfig({
  displayName: 'panel__PanelHeader',
  componentId: 'sc-1u0i9ar-1'
})(_templateObject2, function (props) {
  return props.isHovered ? '#6366f1' : 'rgba(255, 255, 255, 0.6)';
});

var PanelContent = styled.div.withConfig({
  displayName: 'panel__PanelContent',
  componentId: 'sc-1u0i9ar-2'
})(_templateObject3, function (props) {
  return props.isOpen ? 'block' : 'none';
});

var HeaderLeft = styled.span.withConfig({
  displayName: 'panel__HeaderLeft',
  componentId: 'sc-1u0i9ar-3'
})(_templateObject4);

var Panel = function (_Component) {
  _inherits(Panel, _Component);

  function Panel(props, context) {
    _classCallCheck(this, Panel);

    var _this = _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, props, context));

    _this.state = {
      opened: props.hasOwnProperty('opened') ? props.opened : false,
      hover: false
    };
    return _this;
  }

  _createClass(Panel, [{
    key: 'toggleOpen',
    value: function toggleOpen() {
      this.setState({ opened: !this.state.opened });
    }
  }, {
    key: 'toggleHover',
    value: function toggleHover() {
      this.setState({ hover: !this.state.hover });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          name = _props.name,
          headComponents = _props.headComponents,
          children = _props.children;
      var _state = this.state,
          opened = _state.opened,
          hover = _state.hover;


      return React.createElement(
        PanelWrapper,
        null,
        React.createElement(
          PanelHeader,
          {
            isHovered: hover,
            onMouseEnter: function onMouseEnter() {
              return _this2.toggleHover();
            },
            onMouseLeave: function onMouseLeave() {
              return _this2.toggleHover();
            },
            onClick: function onClick() {
              return _this2.toggleOpen();
            }
          },
          React.createElement(
            HeaderLeft,
            null,
            name,
            headComponents
          ),
          opened ? React.createElement(FaAngleUp, null) : React.createElement(FaAngleDown, null)
        ),
        React.createElement(
          PanelContent,
          { isOpen: opened },
          children
        )
      );
    }
  }]);

  return Panel;
}(Component);

export default Panel;


Panel.propTypes = {
  name: PropTypes.string.isRequired,
  headComponents: PropTypes.array,
  opened: PropTypes.bool
};