'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccentText = exports.GlassInput = exports.GlassButton = exports.GlassSurface = exports.GlassPanel = exports.glassMixin = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  background: ', ';\n  backdrop-filter: ', ';\n  -webkit-backdrop-filter: ', ';\n  border: ', ';\n'], ['\n  background: ', ';\n  backdrop-filter: ', ';\n  -webkit-backdrop-filter: ', ';\n  border: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  box-shadow: ', ';\n'], ['\n  ', '\n  box-shadow: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  border-radius: ', ';\n'], ['\n  ', '\n  border-radius: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  background: transparent;\n  border: 1px solid transparent;\n  color: ', ';\n  cursor: pointer;\n  transition: all ', ';\n  border-radius: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  outline: none;\n\n  &:hover {\n    background: ', ';\n    border-color: ', ';\n    color: ', ';\n  }\n\n  &:active {\n    background: ', ';\n  }\n'], ['\n  background: transparent;\n  border: 1px solid transparent;\n  color: ', ';\n  cursor: pointer;\n  transition: all ', ';\n  border-radius: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  outline: none;\n\n  &:hover {\n    background: ', ';\n    border-color: ', ';\n    color: ', ';\n  }\n\n  &:active {\n    background: ', ';\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: block;\n  width: 100%;\n  padding: 0 8px;\n  font-size: 13px;\n  line-height: 1.25;\n  color: ', ';\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid ', ';\n  border-radius: ', ';\n  outline: none;\n  height: 30px;\n  transition: border-color ', ';\n\n  &:focus {\n    border-color: ', ';\n    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15);\n  }\n\n  &::placeholder {\n    color: ', ';\n  }\n'], ['\n  display: block;\n  width: 100%;\n  padding: 0 8px;\n  font-size: 13px;\n  line-height: 1.25;\n  color: ', ';\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid ', ';\n  border-radius: ', ';\n  outline: none;\n  height: 30px;\n  transition: border-color ', ';\n\n  &:focus {\n    border-color: ', ';\n    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15);\n  }\n\n  &::placeholder {\n    color: ', ';\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  background: ', ';\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n'], ['\n  background: ', ';\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Mixin for glass effect — use in other styled-components with ${glassMixin}
var glassMixin = exports.glassMixin = (0, _styledComponents.css)(_templateObject, function (props) {
  return props.theme.glass.background;
}, function (props) {
  return props.theme.glass.backdropFilter;
}, function (props) {
  return props.theme.glass.WebkitBackdropFilter;
}, function (props) {
  return props.theme.glass.border;
});

// Glass Panel — for sidebar, toolbar containers
var GlassPanel = exports.GlassPanel = _styledComponents2.default.aside.withConfig({
  displayName: 'glass-primitives__GlassPanel',
  componentId: 'sc-4u42s2-0'
})(_templateObject2, glassMixin, function (props) {
  return props.theme.shadows.md;
});

// Glass Surface — for cards, inner panels
var GlassSurface = exports.GlassSurface = _styledComponents2.default.div.withConfig({
  displayName: 'glass-primitives__GlassSurface',
  componentId: 'sc-4u42s2-1'
})(_templateObject3, glassMixin, function (props) {
  return props.theme.radius.md;
});

// Glass Button — base interactive button with glass hover
var GlassButton = exports.GlassButton = _styledComponents2.default.button.withConfig({
  displayName: 'glass-primitives__GlassButton',
  componentId: 'sc-4u42s2-2'
})(_templateObject4, function (props) {
  return props.theme.colors.textSecondary;
}, function (props) {
  return props.theme.transition.default;
}, function (props) {
  return props.theme.radius.sm;
}, function (props) {
  return props.theme.colors.surfaceHover;
}, function (props) {
  return props.theme.colors.borderHover;
}, function (props) {
  return props.theme.colors.textPrimary;
}, function (props) {
  return props.theme.colors.surfaceActive;
});

// Glass Input — dark inset input with glowing focus
var GlassInput = exports.GlassInput = _styledComponents2.default.input.withConfig({
  displayName: 'glass-primitives__GlassInput',
  componentId: 'sc-4u42s2-3'
})(_templateObject5, function (props) {
  return props.theme.colors.textPrimary;
}, function (props) {
  return props.theme.colors.border;
}, function (props) {
  return props.theme.radius.sm;
}, function (props) {
  return props.theme.transition.fast;
}, function (props) {
  return props.theme.colors.accentPrimary;
}, function (props) {
  return props.theme.colors.textMuted;
});

// Accent Text — gradient text effect
var AccentText = exports.AccentText = _styledComponents2.default.span.withConfig({
  displayName: 'glass-primitives__AccentText',
  componentId: 'sc-4u42s2-4'
})(_templateObject6, function (props) {
  return props.theme.colors.accentGradient;
});