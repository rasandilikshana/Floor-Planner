import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 18px;
  position: relative;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${props => props.isActive ? '#6366f1' : 'rgba(255, 255, 255, 0.6)'};
  background: ${props => props.isActive ? 'rgba(99, 102, 241, 0.15)' : 'transparent'};
  box-shadow: ${props => props.isActive ? '0 0 12px rgba(99, 102, 241, 0.2)' : 'none'};

  &:hover {
    background: ${props => props.isActive ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.08)'};
    color: ${props => props.isActive ? '#6366f1' : 'rgba(255, 255, 255, 0.95)'};
  }
`;

const Tooltip = styled.div`
  position: absolute;
  left: calc(100% + 12px);
  top: 50%;
  transform: translateY(-50%);
  background: rgba(15, 15, 20, 0.9);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 4px 10px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;
  z-index: 999;
  pointer-events: none;
`;

export default class ToolbarButton extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { active: false };
  }

  render() {
    let { state, props } = this;
    let isActive = props.active || state.active;

    return (
      <ButtonWrapper
        isActive={props.active}
        onMouseOver={event => this.setState({ active: true })}
        onMouseOut={event => this.setState({ active: false })}
        onClick={props.onClick}
      >
        {props.children}
        {state.active ? <Tooltip>{props.tooltip}</Tooltip> : null}
      </ButtonWrapper>
    )
  }
}

ToolbarButton.propTypes = {
  active: PropTypes.bool.isRequired,
  tooltip: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
