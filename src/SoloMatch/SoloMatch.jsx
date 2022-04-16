import React from 'react'

export const SoloMatch = ({match}) => {

    const {bombs, height, width} = match

    return(
        <div className='board container'>
            bombs: {bombs} <br/>
            height: {height} <br/>
            width: {width} <br/>
        </div>
    )
}
