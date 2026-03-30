import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {MdNavigateBefore} from 'react-icons/md';
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

const STYLE_BACK = {
  position: 'absolute',
  color: 'rgba(255, 255, 255, 0.6)',
  fontSize: '5em',
  width: '100%'
};

const STYLE_BACK_HOVER = {
  ...STYLE_BACK,
  color: '#6366f1'
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

export default class CatalogTurnBackPageItem extends Component {

  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  changePage(newPage) {
    this.context.projectActions.goBackToCatalogPage(newPage)
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
        <div style={CONTAINER_DIV}>
          <MdNavigateBefore style={ !hover ? STYLE_BACK : STYLE_BACK_HOVER}/>
        </div>

      </div>
    );
  }
}

CatalogTurnBackPageItem.propTypes = {
  page: PropTypes.object.isRequired
};

CatalogTurnBackPageItem.contextTypes = {
  projectActions: PropTypes.object.isRequired
};
