import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ToggleBtn = styled.div`
  width: 5.5em;
  text-align: center;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  margin: -1px 5px 0 5px;
  border-radius: 4px;
  display: inline-block;
  font-size: clamp(11px, 0.8vw, 16px);
  padding: 1px 0;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${props => props.isActive ? '#6366f1' : 'rgba(255, 255, 255, 0.4)'};
  background: ${props => props.isActive ? 'rgba(99, 102, 241, 0.2)' : 'transparent'};
  border-color: ${props => props.isActive ? 'rgba(99, 102, 241, 0.3)' : 'transparent'};

  &:hover {
    color: ${props => props.isActive ? '#6366f1' : 'rgba(255, 255, 255, 0.8)'};
    background: ${props => props.isActive ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.05)'};
  }
`;

export default class FooterToggleButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: this.props.toggleState || false
    };
  }

  toggle(e) {
    let isActive = !this.state.active;
    this.setState({ active: isActive });

    if (isActive)
    {
      this.props.toggleOn();
    }
    else
    {
      this.props.toggleOff();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if( this.state.active != nextState.active ) return true;
    if( this.props.toggleState != nextProps.toggleState ) return true;

    return false;
  }

  componentWillReceiveProps(nextProps) {
    if( nextProps.toggleState != this.props.toggleState  )
      this.state.active = nextProps.toggleState;
  }

  render() {

    return (
      <ToggleBtn
        isActive={this.state.active}
        onClick={e => this.toggle(e)}
        title={this.props.title}
      >
        {this.props.text}
      </ToggleBtn>
    );
  }
}

FooterToggleButton.propTypes = {
  state: PropTypes.object.isRequired,
  toggleOn: PropTypes.func.isRequired,
  toggleOff: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  toggleState: PropTypes.bool,
  title: PropTypes.string
};

FooterToggleButton.contextTypes = {
  projectActions: PropTypes.object.isRequired,
  viewer2DActions: PropTypes.object.isRequired,
  viewer3DActions: PropTypes.object.isRequired,
  linesActions: PropTypes.object.isRequired,
  holesActions: PropTypes.object.isRequired,
  itemsActions: PropTypes.object.isRequired,
  translator: PropTypes.object.isRequired,
};
