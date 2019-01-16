import React, { Component } from 'react';
import '../css/styles.css';

const NewsItem = ({item}) => {
    return (
        <div className='news_item' key={item.id} >
            <h3>{item.title}</h3>
            <div>
                {item.feed}
            </div>
        </div> 
    );
}

export default NewsItem;