import React, { Component } from 'react';

export class SearchButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleButtonClick();
  }

  render() {
    return (
      <button id="SearchButton" onClick={this.handleClick}>Search</button>
    );
  }
}
