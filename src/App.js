import React, { Component } from 'react';
import './App.css';
import './grid_row.css';
import { SearchBar } from './SearchBar/SearchBar';
import { Article } from './Article';
import { getArticles } from './GetArticles';

// Stateful parent component (all other components are stateless children)
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

  // Calls getArticles, which requests articles from NewsAPI, then updates articles in state
  setArticles() {
    let self = this;
    getArticles(this.state.query, this.state.sort)
      .then(function(newArticles) {
        self.setState({
          articles: newArticles
        })
      })
  }

  // Updates query and sort in state, which then triggers an update to articles
  setQueryAndSort(newQuery, newSort) {
    this.setState({
      query: newQuery,
      sort: newSort
    }, function() {
      this.setArticles();
    })
  }

  // Populates articles on the initial load
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
