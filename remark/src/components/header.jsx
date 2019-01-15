import React, { Component } from 'react';


class Header extends Component {

    state = {  }

    inputChanhandler = () => {
        console.log('I was clicked')
    }

    handleChange = (event) => {
        console.log(event.target.value)
    }

    render() { 
        return ( 
            <header>
                <div
                    className='logo'
                    onClick={this.inputChanhandler}
                >Logo </div>
                <input 
                    type="text"
                    onChange={(e) => this.handleChange(e)}
                />
            </header>
         );
    }
}
 
export default Header;