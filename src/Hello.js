import React, { Component } from 'react';

export default class Hello extends Component {
  render() {
    return (
      <h1>Hello {this.props.user.firstName}!</h1>
    )
  }
}
