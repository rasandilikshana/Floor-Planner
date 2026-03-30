import React, { Component } from 'react';

const STYLE_INPUT = {
  display: 'block',
  width: '100%',
  padding: '0 8px',
  fontSize: '13px',
  lineHeight: '1.25',
  color: 'rgba(255, 255, 255, 0.95)',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  backgroundImage: 'none',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  outline: 'none',
  height: '30px',
  borderRadius: '6px',
  transition: 'border-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
};


export default class FormTextInput extends Component {

  constructor(props) {
    super(props);
    this.state = { focus: false };
  }

  render() {
    let { style, ...rest } = this.props;

    let textInputStyle = { ...STYLE_INPUT, ...style };
    if (this.state.focus) {
      textInputStyle.border = '1px solid #6366f1';
      textInputStyle.boxShadow = '0 0 0 2px rgba(99, 102, 241, 0.15)';
    }

    return <input
      onFocus={e => this.setState({ focus: true })}
      onBlur={e => this.setState({ focus: false })}
      style={textInputStyle}
      type="text"
      {...rest}
    />
  }
}

FormTextInput.defaultProps = {
  style: {}
};
