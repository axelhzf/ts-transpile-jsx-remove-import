import React, { Component } from 'react';
import Label from 'Label';
import PropTypes from 'prop-types';

export default class Button extends Component {

  static propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
  };

  render() {
    const { label, ...rest } = this.props;
    return (
      <div {...rest}>
        <Label text={label} />
      </div>
    )
  }

}
