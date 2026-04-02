var _templateObject = _taggedTemplateLiteral(['\n  background: rgba(255, 255, 255, 0.03);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border-left: 1px solid rgba(255, 255, 255, 0.08);\n  display: block;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding-bottom: 20px;\n\n  &::-webkit-scrollbar { width: 4px; }\n  &::-webkit-scrollbar-track { background: transparent; }\n  &::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 2px; }\n  &::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }\n'], ['\n  background: rgba(255, 255, 255, 0.03);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border-left: 1px solid rgba(255, 255, 255, 0.08);\n  display: block;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding-bottom: 20px;\n\n  &::-webkit-scrollbar { width: 4px; }\n  &::-webkit-scrollbar-track { background: transparent; }\n  &::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 2px; }\n  &::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PanelElementEditor from './panel-element-editor/panel-element-editor';
import PanelGroupEditor from './panel-group-editor';
import PanelMultiElementsEditor from './panel-element-editor/panel-multi-elements-editor';
import PanelLayers from './panel-layers';
import PanelGuides from './panel-guides';
import PanelGroups from './panel-groups';
import PanelLayerElements from './panel-layer-elements';
import If from '../../utils/react-if';

var SidebarAside = styled.aside.withConfig({
  displayName: 'sidebar__SidebarAside',
  componentId: 'sc-dp2x5w-0'
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
    { key: ind, condition: el.condition, style: { position: 'relative' } },
    el.dom
  );
};

export default function Sidebar(_ref) {
  var state = _ref.state,
      width = _ref.width,
      height = _ref.height,
      sidebarComponents = _ref.sidebarComponents;


  var selectedLayer = state.getIn(['scene', 'selectedLayer']);

  //TODO change in multi-layer check
  var selected = state.getIn(['scene', 'layers', selectedLayer, 'selected']);

  var multiselected = selected.lines.size > 1 || selected.items.size > 1 || selected.holes.size > 1 || selected.areas.size > 1 || selected.lines.size + selected.items.size + selected.holes.size + selected.areas.size > 1;

  var selectedGroup = state.getIn(['scene', 'groups']).findEntry(function (g) {
    return g.get('selected');
  });

  var sorter = [{ index: 0, condition: true, dom: React.createElement(PanelGuides, { state: state }) }, { index: 1, condition: true, dom: React.createElement(PanelLayers, { state: state }) }, { index: 2, condition: true, dom: React.createElement(PanelLayerElements, { mode: state.mode, layers: state.scene.layers, selectedLayer: state.scene.selectedLayer }) }, { index: 3, condition: true, dom: React.createElement(PanelGroups, { mode: state.mode, groups: state.scene.groups, layers: state.scene.layers }) }, { index: 4, condition: !multiselected, dom: React.createElement(PanelElementEditor, { state: state }) },
  //{ index: 5, condition: multiselected, dom: <PanelMultiElementsEditor state={state} /> },
  { index: 6, condition: !!selectedGroup, dom: React.createElement(PanelGroupEditor, { state: state, groupID: selectedGroup ? selectedGroup[0] : null }) }];

  sorter = sorter.concat(sidebarComponents.map(function (Component, key) {
    return Component.prototype ? //if is a react component
    {
      condition: true,
      dom: React.createElement(Component, { state: state, key: key })
    } : { //else is a sortable toolbar button
      index: Component.index,
      condition: Component.condition,
      dom: React.createElement(Component.dom, { state: state, key: key })
    };
  }));

  return React.createElement(
    SidebarAside,
    {
      style: { width: width, height: height },
      onKeyDown: function onKeyDown(event) {
        return event.stopPropagation();
      },
      onKeyUp: function onKeyUp(event) {
        return event.stopPropagation();
      },
      className: 'sidebar'
    },
    sorter.sort(sortButtonsCb).map(mapButtonsCb)
  );
}

Sidebar.propTypes = {
  state: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};