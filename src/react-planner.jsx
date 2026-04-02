import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
import theme from './theme';

import Translator from './translator/translator';
import Catalog from './catalog/catalog';
import actions from './actions/export';
import {objectsMap} from './utils/objects-utils';
import {
  ToolbarComponents,
  Content,
  SidebarComponents,
  FooterBarComponents
} from './components/export';
import {VERSION} from './version';
import './styles/export';

const {Toolbar} = ToolbarComponents;
const {Sidebar} = SidebarComponents;
const {FooterBar} = FooterBarComponents;

// Responsive sizing: scale chrome proportionally on larger displays
const getToolbarW = (width) => Math.min(Math.max(56, Math.round(width * 0.032)), 96);
const getSidebarW = (width) => Math.min(Math.max(300, Math.round(width * 0.16)), 520);
const getFooterBarH = (height) => Math.min(Math.max(28, Math.round(height * 0.03)), 48);

const PlannerWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  background: ${props => props.theme.colors.background};
  position: relative;
  overflow: hidden;
`;

const GlobalStyle = createGlobalStyle`
  .react-planner-container {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgba(255, 255, 255, 0.95);
  }

  .react-planner-container *::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  .react-planner-container *::-webkit-scrollbar-track {
    background: transparent;
  }
  .react-planner-container *::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  .react-planner-container *::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .react-planner-container .react-tabs__tab-list {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    margin: 0;
    padding: 0;
  }
  .react-planner-container .react-tabs__tab {
    color: rgba(255, 255, 255, 0.5);
    border: 1px solid transparent;
    border-radius: 6px 6px 0 0;
    padding: 4px 12px;
    cursor: pointer;
    display: inline-block;
    list-style: none;
  }
  .react-planner-container .react-tabs__tab--selected {
    background: rgba(99, 102, 241, 0.15);
    color: #6366f1;
    border-color: rgba(255, 255, 255, 0.08);
    border-bottom-color: transparent;
  }
  .react-planner-container .react-tabs__tab-panel {
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }
`;

class ReactPlanner extends Component {

  getChildContext() {
    return {
      ...objectsMap(actions, actionNamespace => this.props[actionNamespace]),
      translator: this.props.translator,
      catalog: this.props.catalog,
    }
  }

  componentWillMount() {
    let {store} = this.context;
    let {projectActions, catalog, stateExtractor, plugins} = this.props;
    plugins.forEach(plugin => plugin(store, stateExtractor));
    projectActions.initCatalog(catalog);
  }

  componentWillReceiveProps(nextProps) {
    let {stateExtractor, state, projectActions, catalog} = nextProps;
    let plannerState = stateExtractor(state);
    let catalogReady = plannerState.getIn(['catalog', 'ready']);
    if (!catalogReady) {
      projectActions.initCatalog(catalog);
    }
  }

  render() {
    let {width, height, state, stateExtractor, ...props} = this.props;

    let toolbarW = getToolbarW(width);
    let sidebarW = getSidebarW(width);
    let footerBarH = getFooterBarH(height);

    let contentW = width - toolbarW - sidebarW;
    let toolbarH = height - footerBarH;
    let contentH = height - footerBarH;
    let sidebarH = height - footerBarH;

    let extractedState = stateExtractor(state);

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PlannerWrapper style={{height}} className="react-planner-container">
          <Toolbar width={toolbarW} height={toolbarH} state={extractedState} {...props} />
          <Content width={contentW} height={contentH} state={extractedState} {...props} onWheel={event => event.preventDefault()} />
          <Sidebar width={sidebarW} height={sidebarH} state={extractedState} {...props} />
          <FooterBar width={width} height={footerBarH} state={extractedState} {...props} />
        </PlannerWrapper>
      </ThemeProvider>
    );
  }
}

ReactPlanner.propTypes = {
  translator: PropTypes.instanceOf(Translator),
  catalog: PropTypes.instanceOf(Catalog),
  allowProjectFileSupport: PropTypes.bool,
  plugins: PropTypes.arrayOf(PropTypes.func),
  autosaveKey: PropTypes.string,
  autosaveDelay: PropTypes.number,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  stateExtractor: PropTypes.func.isRequired,
  toolbarButtons: PropTypes.array,
  sidebarComponents: PropTypes.array,
  footerbarComponents: PropTypes.array,
  customContents: PropTypes.object,
  softwareSignature: PropTypes.string
};

ReactPlanner.contextTypes = {
  store: PropTypes.object.isRequired,
};

ReactPlanner.childContextTypes = {
  ...objectsMap(actions, () => PropTypes.object),
  translator: PropTypes.object,
  catalog: PropTypes.object,
};

ReactPlanner.defaultProps = {
  translator: new Translator(),
  catalog: new Catalog(),
  plugins: [],
  allowProjectFileSupport: true,
  softwareSignature: `React-Planner ${VERSION}`,
  toolbarButtons: [],
  sidebarComponents: [],
  footerbarComponents: [],
  customContents: {},
};

//redux connect
function mapStateToProps(reduxState) {
  return {
    state: reduxState
  }
}

function mapDispatchToProps(dispatch) {
  return objectsMap(actions, actionNamespace => bindActionCreators(actions[actionNamespace], dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactPlanner);
