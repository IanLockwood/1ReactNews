import React, { Component } from 'react';
import { SearchInput } from './SearchInput';
import { SearchSort } from './SearchSort';
import { SearchButton } from './SearchButton';
import './SearchBar.css';

export class SearchBar extends Component {
  render() {
    return (
      <div className="grid-row SearchBar">
        <SearchInput />
        <SearchSort />
        <SearchButton />
      </div>
    );
  }
}
