'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _md = require('react-icons/md');

var _sharedStyle = require('../../shared-style');

var SharedStyle = _interopRequireWildcard(_sharedStyle);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STYLE_BOX = {
  width: '14em',
  height: '14em',
  padding: '0.625em',
  background: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  cursor: 'pointer',
  position: 'relative',
  boxShadow: 'none',
  borderRadius: '10px',
  transition: 'all .2s ease-in-out',
  alignSelf: 'center',
  justifySelf: 'center'
};

var STYLE_BOX_HOVER = _extends({}, STYLE_BOX, {
  background: 'rgba(99, 102, 241, 0.1)',
  borderColor: 'rgba(99, 102, 241, 0.3)',
  boxShadow: '0 0 20px rgba(99, 102, 241, 0.15)',
  transform: 'translateY(-2px)'
});

var STYLE_BACK = {
  position: 'absolute',
  color: 'rgba(255, 255, 255, 0.6)',
  fontSize: '5em',
  width: '100%'
};

var STYLE_BACK_HOVER = _extends({}, STYLE_BACK, {
  color: '#6366f1'
});

var CONTAINER_DIV = {
  background: 'rgba(0, 0, 0, 0.3)',
  marginBottom: '5px',
  border: 'solid 1px rgba(255, 255, 255, 0.06)',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '6px'
};

var CatalogTurnBackPageItem = function (_Component) {
  _inherits(CatalogTurnBackPageItem, _Component);

  function CatalogTurnBackPageItem(props) {
    _classCallCheck(this, CatalogTurnBackPageItem);

    var _this = _possibleConstructorReturn(this, (CatalogTurnBackPageItem.__proto__ || Object.getPrototypeOf(CatalogTurnBackPageItem)).call(this, props));

    _this.state = { hover: false };
    return _this;
  }

  _createClass(CatalogTurnBackPageItem, [{
    key: 'changePage',
    value: function changePage(newPage) {
      this.context.projectActions.goBackToCatalogPage(newPage);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var page = this.props.page;
      var hover = this.state.hover;

      return _react2.default.createElement(
        'div',
        {
          style: hover ? STYLE_BOX_HOVER : STYLE_BOX,
          onClick: function onClick(e) {
            return _this2.changePage(page.name);
          },
          onMouseEnter: function onMouseEnter(e) {
            return _this2.setState({ hover: true });
          },
          onMouseLeave: function onMouseLeave(e) {
            return _this2.setState({ hover: false });
          }
        },
        _react2.default.createElement(
          'div',
          { style: CONTAINER_DIV },
          _react2.default.createElement(_md.MdNavigateBefore, { style: !hover ? STYLE_BACK : STYLE_BACK_HOVER })
        )
      );
    }
  }]);

  return CatalogTurnBackPageItem;
}(_react.Component);

exports.default = CatalogTurnBackPageItem;


CatalogTurnBackPageItem.propTypes = {
  page: _propTypes2.default.object.isRequired
};

CatalogTurnBackPageItem.contextTypes = {
  projectActions: _propTypes2.default.object.isRequired
};