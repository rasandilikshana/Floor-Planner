var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdNavigateNext } from 'react-icons/md';
import * as SharedStyle from '../../shared-style';

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

var STYLE_TITLE = {
  width: '100%',
  position: 'absolute',
  textAlign: 'center',
  display: 'block',
  marginBottom: '.5em',
  padding: '1em',
  textTransform: 'capitalize',
  color: 'rgba(255, 255, 255, 0.95)'
};

var STYLE_TITLE_HOVERED = _extends({}, STYLE_TITLE, {
  fontSize: '1.4em',
  transform: 'translateY(-60px)',
  color: '#6366f1',
  marginTop: '0.5em'
});

var STYLE_NEXT_HOVER = {
  position: 'absolute',
  color: '#6366f1',
  fontSize: '5em',
  width: '100%'
};

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

var CatalogPageItem = function (_Component) {
  _inherits(CatalogPageItem, _Component);

  function CatalogPageItem(props) {
    _classCallCheck(this, CatalogPageItem);

    var _this = _possibleConstructorReturn(this, (CatalogPageItem.__proto__ || Object.getPrototypeOf(CatalogPageItem)).call(this, props));

    _this.state = { hover: false };
    return _this;
  }

  _createClass(CatalogPageItem, [{
    key: 'changePage',
    value: function changePage(newPage) {
      this.context.projectActions.changeCatalogPage(newPage, this.props.oldPage.name);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var page = this.props.page;
      var hover = this.state.hover;

      return React.createElement(
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
        hover ? React.createElement(
          'div',
          { style: CONTAINER_DIV },
          React.createElement(
            'b',
            { style: STYLE_TITLE_HOVERED },
            page.label
          ),
          React.createElement(MdNavigateNext, { style: STYLE_NEXT_HOVER })
        ) : React.createElement(
          'div',
          { style: CONTAINER_DIV },
          React.createElement(
            'b',
            { style: STYLE_TITLE },
            page.label
          )
        )
      );
    }
  }]);

  return CatalogPageItem;
}(Component);

export default CatalogPageItem;


CatalogPageItem.propTypes = {
  page: PropTypes.object.isRequired,
  oldPage: PropTypes.object.isRequired
};

CatalogPageItem.contextTypes = {
  projectActions: PropTypes.object.isRequired
};