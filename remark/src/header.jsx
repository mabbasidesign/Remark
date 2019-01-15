import React, { Component } from 'react';


class Header extends Component {

    state = {  }

    inputChanhandler = () => {
        console.log('I was clicked')
    }

    render() { 
        return ( 
            <header>
                <div
                    className='logo'
                    onClick={this.inputChanhandler}
                >Logo </div>
                <input type="text"/>
            </header>
         );
    }
}
 
export default Header;