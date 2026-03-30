import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const PanelWrapper = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  user-select: none;
`;

const PanelHeader = styled.h3`
  font-size: 11px;
  color: ${props => props.isHovered ? '#6366f1' : 'rgba(255, 255, 255, 0.6)'};
  padding: 8px 15px;
  margin: 0;
  background: rgba(255, 255, 255, 0.03);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
`;

const PanelContent = styled.div`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 0;
  background: rgba(0, 0, 0, 0.15);
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const HeaderLeft = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export default class Panel extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      opened: props.hasOwnProperty('opened') ? props.opened : false,
      hover: false
    };
  }

  toggleOpen() {
    this.setState({opened: !this.state.opened});
  }

  toggleHover() {
    this.setState({hover: !this.state.hover});
  }

  render() {

    let { name, headComponents, children } = this.props;
    let { opened, hover } = this.state;

    return (
      <PanelWrapper>
        <PanelHeader
          isHovered={hover}
          onMouseEnter={() => this.toggleHover()}
          onMouseLeave={() => this.toggleHover()}
          onClick={() => this.toggleOpen()}
        >
          <HeaderLeft>
            {name}
            {headComponents}
          </HeaderLeft>
          {
            opened ?
              <FaAngleUp /> :
              <FaAngleDown />
          }
        </PanelHeader>

        <PanelContent isOpen={opened}>
          {children}
        </PanelContent>
      </PanelWrapper>
    )
  }
}

Panel.propTypes = {
  name: PropTypes.string.isRequired,
  headComponents: PropTypes.array,
  opened: PropTypes.bool
};
