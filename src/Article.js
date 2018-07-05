import React, { Component } from 'react';
import './Article.css';

const stockNewsImage = "http://mediad.publicbroadcasting.net/p/michigan/files/styles/x_large/public/201601/newspaper_flickr_jon_s.jpg";

export class Article extends Component {
  render() {
    return(
      <div className="ArticleList grid-row">
        { this.props.articlesArray.map((article, index) =>
          <div key={article + index} className="article col-8-mobile col-4-desktop">
            <div className="article-image-container">
              <img className="article-image" src={ article.urlToImage || stockNewsImage } />
            </div>
            <div className="article-content-container">
              <h2 className="article-title">{ article.title }</h2>
              <p className="article-paragraph">{ article.description }</p>

              <a href={ article.url } target="_blank">
                <button className="article-button">Read More</button>
              </a>
            </div>
          </div>
        )}
      </div>
    )
  }
}
