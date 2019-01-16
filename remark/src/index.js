import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';

// COMPONENTS
import Header from '../src/components/header';
// import NewsList from  './components/news_list_item'
import NewsList from './components/news_list';

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
                <NewsList news={this.state.filtered.length === 0 ? this.state.news : this.state.filtered}>
                    <h3>
                        The news are:
                    </h3>
                 </NewsList>
            </div>
         );
    }
}


export default App;

ReactDOM.render(<App />, document.getElementById('root'));
