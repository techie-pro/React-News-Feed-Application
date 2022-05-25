import React from 'react';

export const NewsSingle = ({ news }) => {
  return (
    <div class='col s4'>
      <div class='card'>
        <div class='card-image'>
          <img src={news.urlToImage} alt={news.title} />
          <span class='card-title'>{news.source.title}</span>
          <div className='card-content'>
            <p>{news.description}</p>
          </div>
        </div>
        <div class='card-action'>
          <a href={news.url} target='_blank' rel='noreferrer'>
            More Feed
          </a>
        </div>
      </div>
    </div>
  );
};
