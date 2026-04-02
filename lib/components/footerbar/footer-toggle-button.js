'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 5.5em;\n  text-align: center;\n  cursor: pointer;\n  user-select: none;\n  border: 1px solid transparent;\n  margin: -1px 5px 0 5px;\n  border-radius: 4px;\n  display: inline-block;\n  font-size: 12px;\n  padding: 1px 0;\n  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);\n  color: ', ';\n  background: ', ';\n  border-color: ', ';\n\n  &:hover {\n    color: ', ';\n    background: ', ';\n  }\n'], ['\n  width: 5.5em;\n  text-align: center;\n  cursor: pointer;\n  user-select: none;\n  border: 1px solid transparent;\n  margin: -1px 5px 0 5px;\n  border-radius: 4px;\n  display: inline-block;\n  font-size: 12px;\n  padding: 1px 0;\n  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);\n  color: ', ';\n  background: ', ';\n  border-color: ', ';\n\n  &:hover {\n    color: ', ';\n    background: ', ';\n  }\n']);

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

var ToggleBtn = _styledComponents2.default.div.withConfig({
  displayName: 'footer-toggle-button__ToggleBtn',
  componentId: 'sc-10pl4hc-0'
})(_templateObject, function (props) {
  return props.isActive ? '#6366f1' : 'rgba(255, 255, 255, 0.4)';
}, function (props) {
  return props.isActive ? 'rgba(99, 102, 241, 0.2)' : 'transparent';
}, function (props) {
  return props.isActive ? 'rgba(99, 102, 241, 0.3)' : 'transparent';
}, function (props) {
  return props.isActive ? '#6366f1' : 'rgba(255, 255, 255, 0.8)';
}, function (props) {
  return props.isActive ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.05)';
});

var FooterToggleButton = function (_Component) {
  _inherits(FooterToggleButton, _Component);

  function FooterToggleButton(props) {
    _classCallCheck(this, FooterToggleButton);

    var _this = _possibleConstructorReturn(this, (FooterToggleButton.__proto__ || Object.getPrototypeOf(FooterToggleButton)).call(this, props));

    _this.state = {
      active: _this.props.toggleState || false
    };
    return _this;
  }

  _createClass(FooterToggleButton, [{
    key: 'toggle',
    value: function toggle(e) {
      var isActive = !this.state.active;
      this.setState({ active: isActive });

      if (isActive) {
        this.props.toggleOn();
      } else {
        this.props.toggleOff();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.state.active != nextState.active) return true;
      if (this.props.toggleState != nextProps.toggleState) return true;

      return false;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.toggleState != this.props.toggleState) this.state.active = nextProps.toggleState;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        ToggleBtn,
        {
          isActive: this.state.active,
          onClick: function onClick(e) {
            return _this2.toggle(e);
          },
          title: this.props.title
        },
        this.props.text
      );
    }
  }]);

  return FooterToggleButton;
}(_react.Component);

exports.default = FooterToggleButton;


FooterToggleButton.propTypes = {
  state: _propTypes2.default.object.isRequired,
  toggleOn: _propTypes2.default.func.isRequired,
  toggleOff: _propTypes2.default.func.isRequired,
  text: _propTypes2.default.string.isRequired,
  toggleState: _propTypes2.default.bool,
  title: _propTypes2.default.string
};

FooterToggleButton.contextTypes = {
  projectActions: _propTypes2.default.object.isRequired,
  viewer2DActions: _propTypes2.default.object.isRequired,
  viewer3DActions: _propTypes2.default.object.isRequired,
  linesActions: _propTypes2.default.object.isRequired,
  holesActions: _propTypes2.default.object.isRequired,
  itemsActions: _propTypes2.default.object.isRequired,
  translator: _propTypes2.default.object.isRequired
};