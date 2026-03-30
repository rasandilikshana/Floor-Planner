import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {MdNavigateNext} from 'react-icons/md';
import * as SharedStyle from '../../shared-style';

const STYLE_BOX = {
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
  justifySelf: 'center',
};

const STYLE_BOX_HOVER = {
  ...STYLE_BOX,
  background: 'rgba(99, 102, 241, 0.1)',
  borderColor: 'rgba(99, 102, 241, 0.3)',
  boxShadow: '0 0 20px rgba(99, 102, 241, 0.15)',
  transform: 'translateY(-2px)'
};

const STYLE_TITLE = {
  width: '100%',
  position: 'absolute',
  textAlign: 'center',
  display: 'block',
  marginBottom: '.5em',
  padding: '1em',
  textTransform: 'capitalize',
  color: 'rgba(255, 255, 255, 0.95)'
};

const STYLE_TITLE_HOVERED = {
  ...STYLE_TITLE,
  fontSize: '1.4em',
  transform: 'translateY(-60px)',
  color: '#6366f1',
  marginTop: '0.5em'
};

const STYLE_NEXT_HOVER = {
  position: 'absolute',
  color: '#6366f1',
  fontSize: '5em',
  width: '100%',
};

const CONTAINER_DIV = {
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

export default class CatalogPageItem extends Component {

  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  changePage(newPage) {
    this.context.projectActions.changeCatalogPage(newPage, this.props.oldPage.name)
  }

  render() {
    let page = this.props.page;
    let hover = this.state.hover;

    return (
      <div
        style={hover ? STYLE_BOX_HOVER : STYLE_BOX}
        onClick={e => this.changePage(page.name)}
        onMouseEnter={e => this.setState({hover: true})}
        onMouseLeave={e => this.setState({hover: false})}
      >
        {hover ?
          <div style={CONTAINER_DIV}>
            <b style={STYLE_TITLE_HOVERED}>{page.label}</b>
            <MdNavigateNext style={STYLE_NEXT_HOVER}/>
          </div>
          :
          <div style={CONTAINER_DIV}>
            <b style={STYLE_TITLE}>{page.label}</b>
          </div>}

      </div>
    );
  }
}

CatalogPageItem.propTypes = {
  page: PropTypes.object.isRequired,
  oldPage: PropTypes.object.isRequired,
};

CatalogPageItem.contextTypes = {
  projectActions: PropTypes.object.isRequired
};
