import React, { Component } from 'react';
import './App.css';
import './grid_row.css';
import { SearchBar } from './SearchBar/SearchBar';
import { Article } from './Article';
import { getArticles } from './GetArticles';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      sort: "",
      articles: []
    }

    this.setArticles = this.setArticles.bind(this);
    this.setQueryAndSort = this.setQueryAndSort.bind(this);
  }

  setArticles() {
    let self = this;
    getArticles(this.state.query, this.state.sort)
      .then(function(newArticles) {
        self.setState({
          articles: newArticles
        })
      })
  }

  setQueryAndSort(newQuery, newSort) {
    this.setState({
      query: newQuery,
      sort: newSort
    }, function() {
      this.setArticles();
    })
  }

  componentDidMount() {
    this.setArticles();
  }

  render() {
    return (
      <div>
        <SearchBar setQueryAndSort={this.setQueryAndSort} />
        <Article articlesArray={this.state.articles} />
      </div>
    );
  }
}

export default App;
