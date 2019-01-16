import React, { Component } from 'react';
import '../../css/styles.css'

const Header = (props) => {
    return (
        <header>
            <div className='logo'> Logo </div>
            <input
                onChange={props.keyword}
                type="text"
            />
        </header>
    );
}

export default Header;