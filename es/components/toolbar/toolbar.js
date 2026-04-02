var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  background: rgba(255, 255, 255, 0.03);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border-right: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 12px 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n'], ['\n  background: rgba(255, 255, 255, 0.03);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border-right: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 12px 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdSettings, MdUndo, MdDirectionsRun } from 'react-icons/md';
import { FaFile, FaMousePointer, FaPlus } from 'react-icons/fa';
import ToolbarButton from './toolbar-button';
import ToolbarSaveButton from './toolbar-save-button';
import ToolbarLoadButton from './toolbar-load-button';
import If from '../../utils/react-if';
import { MODE_IDLE, MODE_3D_VIEW, MODE_3D_FIRST_PERSON, MODE_VIEWING_CATALOG, MODE_CONFIGURING_PROJECT } from '../../constants';
import * as SharedStyle from '../../shared-style';
import styled from 'styled-components';

var iconTextStyle = {
  fontSize: '19px',
  textDecoration: 'none',
  fontWeight: 'bold',
  margin: '0px',
  userSelect: 'none'
};

var Icon2D = function Icon2D(_ref) {
  var style = _ref.style;
  return React.createElement(
    'p',
    { style: _extends({}, iconTextStyle, style) },
    '2D'
  );
};
var Icon3D = function Icon3D(_ref2) {
  var style = _ref2.style;
  return React.createElement(
    'p',
    { style: _extends({}, iconTextStyle, style) },
    '3D'
  );
};

var ToolbarAside = styled.aside.withConfig({
  displayName: 'toolbar__ToolbarAside',
  componentId: 'sc-xh1fss-0'
})(_templateObject);

var sortButtonsCb = function sortButtonsCb(a, b) {
  if (a.index === undefined || a.index === null) {
    a.index = Number.MAX_SAFE_INTEGER;
  }

  if (b.index === undefined || b.index === null) {
    b.index = Number.MAX_SAFE_INTEGER;
  }

  return a.index - b.index;
};

var mapButtonsCb = function mapButtonsCb(el, ind) {
  return React.createElement(
    If,
    {
      key: ind,
      condition: el.condition,
      style: { position: 'relative' }
    },
    el.dom
  );
};

var Toolbar = function (_Component) {
  _inherits(Toolbar, _Component);

  function Toolbar(props, context) {
    _classCallCheck(this, Toolbar);

    var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, props, context));

    _this.state = {};
    return _this;
  }

  _createClass(Toolbar, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.state.mode !== nextProps.state.mode || this.props.height !== nextProps.height || this.props.width !== nextProps.width || this.props.state.alterate !== nextProps.state.alterate;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          state = _props.state,
          width = _props.width,
          height = _props.height,
          toolbarButtons = _props.toolbarButtons,
          allowProjectFileSupport = _props.allowProjectFileSupport,
          _context = this.context,
          projectActions = _context.projectActions,
          viewer3DActions = _context.viewer3DActions,
          translator = _context.translator;


      var mode = state.get('mode');
      var alterate = state.get('alterate');
      var alterateColor = alterate ? SharedStyle.MATERIAL_COLORS[500].orange : '';

      var sorter = [{
        index: 0, condition: allowProjectFileSupport, dom: React.createElement(
          ToolbarButton,
          {
            active: false,
            tooltip: translator.t('New project'),
            onClick: function onClick(event) {
              return confirm(translator.t('Would you want to start a new Project?')) ? projectActions.newProject() : null;
            } },
          React.createElement(FaFile, null)
        )
      }, {
        index: 1, condition: allowProjectFileSupport,
        dom: React.createElement(ToolbarSaveButton, { state: state })
      }, {
        index: 2, condition: allowProjectFileSupport,
        dom: React.createElement(ToolbarLoadButton, { state: state })
      }, {
        index: 3, condition: true,
        dom: React.createElement(
          ToolbarButton,
          {
            active: [MODE_VIEWING_CATALOG].includes(mode),
            tooltip: translator.t('Open catalog'),
            onClick: function onClick(event) {
              return projectActions.openCatalog();
            } },
          React.createElement(FaPlus, null)
        )
      }, {
        index: 4, condition: true, dom: React.createElement(
          ToolbarButton,
          {
            active: [MODE_3D_VIEW].includes(mode),
            tooltip: translator.t('3D View'),
            onClick: function onClick(event) {
              return viewer3DActions.selectTool3DView();
            } },
          React.createElement(Icon3D, null)
        )
      }, {
        index: 5, condition: true, dom: React.createElement(
          ToolbarButton,
          {
            active: [MODE_IDLE].includes(mode),
            tooltip: translator.t('2D View'),
            onClick: function onClick(event) {
              return projectActions.setMode(MODE_IDLE);
            } },
          [MODE_3D_FIRST_PERSON, MODE_3D_VIEW].includes(mode) ? React.createElement(Icon2D, { style: { color: alterateColor } }) : React.createElement(FaMousePointer, { style: { color: alterateColor } })
        )
      }, {
        index: 6, condition: true, dom: React.createElement(
          ToolbarButton,
          {
            active: [MODE_3D_FIRST_PERSON].includes(mode),
            tooltip: translator.t('3D First Person'),
            onClick: function onClick(event) {
              return viewer3DActions.selectTool3DFirstPerson();
            } },
          React.createElement(MdDirectionsRun, null)
        )
      }, {
        index: 7, condition: true, dom: React.createElement(
          ToolbarButton,
          {
            active: false,
            tooltip: translator.t('Undo (CTRL-Z)'),
            onClick: function onClick(event) {
              return projectActions.undo();
            } },
          React.createElement(MdUndo, null)
        )
      }, {
        index: 8, condition: true, dom: React.createElement(
          ToolbarButton,
          {
            active: [MODE_CONFIGURING_PROJECT].includes(mode),
            tooltip: translator.t('Configure project'),
            onClick: function onClick(event) {
              return projectActions.openProjectConfigurator();
            } },
          React.createElement(MdSettings, null)
        )
      }];

      sorter = sorter.concat(toolbarButtons.map(function (Component, key) {
        return Component.prototype ? //if is a react component
        {
          condition: true,
          dom: React.createElement(Component, { mode: mode, state: state, key: key })
        } : { //else is a sortable toolbar button
          index: Component.index,
          condition: Component.condition,
          dom: React.createElement(Component.dom, { mode: mode, state: state, key: key })
        };
      }));

      return React.createElement(
        ToolbarAside,
        { style: { maxWidth: width, maxHeight: height }, className: 'toolbar' },
        sorter.sort(sortButtonsCb).map(mapButtonsCb)
      );
    }
  }]);

  return Toolbar;
}(Component);

export default Toolbar;


Toolbar.propTypes = {
  state: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  allowProjectFileSupport: PropTypes.bool.isRequired,
  toolbarButtons: PropTypes.array
};

Toolbar.contextTypes = {
  projectActions: PropTypes.object.isRequired,
  viewer2DActions: PropTypes.object.isRequired,
  viewer3DActions: PropTypes.object.isRequired,
  linesActions: PropTypes.object.isRequired,
  holesActions: PropTypes.object.isRequired,
  itemsActions: PropTypes.object.isRequired,
  translator: PropTypes.object.isRequired
};