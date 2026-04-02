'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  font-size: 18px;\n  position: relative;\n  cursor: pointer;\n  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);\n  color: ', ';\n  background: ', ';\n  box-shadow: ', ';\n\n  &:hover {\n    background: ', ';\n    color: ', ';\n  }\n'], ['\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  font-size: 18px;\n  position: relative;\n  cursor: pointer;\n  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);\n  color: ', ';\n  background: ', ';\n  box-shadow: ', ';\n\n  &:hover {\n    background: ', ';\n    color: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  left: calc(100% + 12px);\n  top: 50%;\n  transform: translateY(-50%);\n  background: rgba(15, 15, 20, 0.9);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.9);\n  white-space: nowrap;\n  z-index: 999;\n  pointer-events: none;\n'], ['\n  position: absolute;\n  left: calc(100% + 12px);\n  top: 50%;\n  transform: translateY(-50%);\n  background: rgba(15, 15, 20, 0.9);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.9);\n  white-space: nowrap;\n  z-index: 999;\n  pointer-events: none;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'toolbar-button__ButtonWrapper',
  componentId: 'sc-9uwfxb-0'
})(_templateObject, function (props) {
  return props.isActive ? '#6366f1' : 'rgba(255, 255, 255, 0.6)';
}, function (props) {
  return props.isActive ? 'rgba(99, 102, 241, 0.15)' : 'transparent';
}, function (props) {
  return props.isActive ? '0 0 12px rgba(99, 102, 241, 0.2)' : 'none';
}, function (props) {
  return props.isActive ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.08)';
}, function (props) {
  return props.isActive ? '#6366f1' : 'rgba(255, 255, 255, 0.95)';
});

var Tooltip = _styledComponents2.default.div.withConfig({
  displayName: 'toolbar-button__Tooltip',
  componentId: 'sc-9uwfxb-1'
})(_templateObject2);

var ToolbarButton = function (_Component) {
  _inherits(ToolbarButton, _Component);

  function ToolbarButton(props, context) {
    _classCallCheck(this, ToolbarButton);

    var _this = _possibleConstructorReturn(this, (ToolbarButton.__proto__ || Object.getPrototypeOf(ToolbarButton)).call(this, props, context));

    _this.state = { active: false };
    return _this;
  }

  _createClass(ToolbarButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var state = this.state,
          props = this.props;

      var isActive = props.active || state.active;

      return _react2.default.createElement(
        ButtonWrapper,
        {
          isActive: props.active,
          onMouseOver: function onMouseOver(event) {
            return _this2.setState({ active: true });
          },
          onMouseOut: function onMouseOut(event) {
            return _this2.setState({ active: false });
          },
          onClick: props.onClick
        },
        props.children,
        state.active ? _react2.default.createElement(
          Tooltip,
          null,
          props.tooltip
        ) : null
      );
    }
  }]);

  return ToolbarButton;
}(_react.Component);

exports.default = ToolbarButton;


ToolbarButton.propTypes = {
  active: _propTypes2.default.bool.isRequired,
  tooltip: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func.isRequired
};