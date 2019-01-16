import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';
import Header from '../src/components/header';
import NewsList from './components/news_list';
// import NewsList from '../src/components/News/news_list';
// import Header from '../src/components/News/header';
import User from '../src/components/user';

class App extends Component {

    state = {
        news: JSON,
        filtered: []
    }

    getkeyword = (event) => {
        let keyword = event.target.value;
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keyword) > -1
        });
        this.setState({ filtered })
    }

    render(){
       return (
           <div>
               <Header keyword={this.getkeyword} />
               <User />
               <NewsList news={this.state.filtered.length === 0 ? this.state.news: this.state.filtered} />
           </div>
       )
    }
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));
