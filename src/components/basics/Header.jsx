import React from 'react'

import logo from '../../img/logo.png';
import './Header.css'

export const Header = () => {
    return(
        <header className='header container'>
            <img src={logo}/>
        </header>
    )
}
