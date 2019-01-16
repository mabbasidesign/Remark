import React, { Component } from 'react';
import NewsItem from './news_list_item';

const NewsList = (props) => {

    const items = props.news.map((item) => {
        return (
            <div>
                <NewsItem item={item} key={item.id}/>
            </div>
        )
    })

    return (
        <div>
            {items}
        </div>
    );
}
 
export default NewsList;