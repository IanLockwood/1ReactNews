import React, { Component } from 'react';
import { SearchInput } from './SearchInput';
import { SearchSort } from './SearchSort';
import { SearchButton } from './SearchButton';
import './SearchBar.css';

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  // Scrapes the typed query and selected sort and sends it up to the stateful parent
  handleButtonClick(e) {
    const currentQuery = (document.getElementById("SearchInput").value);
    const currentSort = document.getElementById("SearchSort").value;
    this.props.setQueryAndSort(currentQuery, currentSort);
  }

  render() {
    return (
      <div className="grid-row" id="SearchBar">
        <SearchInput />
        <SearchSort />
        <SearchButton handleButtonClick={this.handleButtonClick} />
      </div>
    );
  }
}
