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
      query: "q=technology&",
      sort: "",
      articles: []
    }

    this.setArticles = this.setArticles.bind(this);
  }

  setArticles() {
    let self = this;
    getArticles(this.state.query, this.state.sort)
      .then(function(newArticles) {
        console.log(newArticles);
        self.setState({
          articles: newArticles
        })
      })
  }

  componentDidMount() {
    this.setArticles();
  }

  render() {
    return (
      <div>
        <SearchBar />
        <Article articlesArray={this.state.articles} />
      </div>
    );
  }
}

export default App;
