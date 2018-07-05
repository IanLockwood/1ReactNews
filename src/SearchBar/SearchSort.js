import React, { Component } from 'react';

export class SearchSort extends Component {
  render() {
    return (
      <select id="SearchSort">
        <option value="">Sort Articles</option>
        <option value="sortBy=popularity&">Popular</option>
        <option value="sortBy=publishedAt&">Recent</option>
        <option value="sortBy=relevancy&">Relevant</option>
      </select>
    );
  }
}
