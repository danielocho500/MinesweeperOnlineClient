import React from 'react'
import Swal from 'sweetalert2';

import './Menu.css'

import solo from './../../img/solo.svg'
import multi from './../../img/multiplayer.svg'
import { ScreenType } from '../helper/ScreenType';

export const Menu = ({setScreen}) => {

    const handleMultiplayer = () => {
        Swal.fire('In development.... :c')
    }

    const handleSolo = () => {
        setScreen(ScreenType.MenuDifficulty);
    }

    return(
        <div className='container'>
            <h1 className='title'>Select a mode</h1>
            <div className="grid-menu">
                <div className="menu-item">
                    <h2> Solo </h2>
                    <div className='menu-img'>
                        <img src={solo}/>
                    </div>
                    <button type="button" className="btn btn-secondary" onClick={handleSolo}>Play</button>
                </div>

                <div className="menu-item">
                    <h2> Multiplayer </h2>
                    <div className='menu-img'>
                        <img src={multi}/>
                    </div>
                    <button type="button" className="btn btn-secondary" onClick={handleMultiplayer}>Play</button>
                </div>
            </div>
        </div>
    )
}
