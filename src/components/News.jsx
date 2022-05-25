import React, { Component } from 'react';
import { NewsSingle } from './NewsSingle';
export class News extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    const url =
      'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=pasteYourAPIKey';
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        this.setState(
          () => {
            return { news: data.articles };
          },
          () => {
            console.log(this.state.news);
          }
        )
      )
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className='row'>
        {this.state.news.map((item) => (
          <NewsSingle key={item.url} news={item} />
        ))}
      </div>
    );
  }
}

export default News;
