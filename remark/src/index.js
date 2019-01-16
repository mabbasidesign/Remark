import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

// COMPONENTS
import Header from '../src/components/header';
import NewsList from  './components/news_list_item'

class App extends Component {

    state = {
        news: JSON,
        filtered: []
    }

    getKeyword = (event) => {
        let keyword = event.target.value;
        let filtered = this.state.news.filter(item => {
            return item.title.indexOf(keyword) > -1
        });
        this.setState({
            filtered
        })
    }


    render() { 
        return ( 
            <div>
                <Header keyword={this.getKeyword} />
            </div>
         );
    }
}
 
export default App;




ReactDOM.render(<App />, document.getElementById('root'));
