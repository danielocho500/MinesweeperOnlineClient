import React from 'react'

import logo from '../../img/logo.png';
import { ScreenType } from '../helper/ScreenType';
import './Header.css'

export const Header = ({setScreen}) => {
    return(
        <header className='header container'>
            <img src={logo} onClick={() => {setScreen(ScreenType.MenuMain)}}/>
        </header>
    )
}
