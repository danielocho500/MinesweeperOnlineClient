import React, { useEffect, useState } from 'react'

export const Square = ({id, diff, handleClick, positionX, positionY, type}) => {
    
    const [state, setstate] = useState('')
    const [value, setvalue] = useState('');

    const handleClass = () => {
        switch (type) {
            case 'x':
                return `valid ${diff}-square`
            case 0:
                return `valid checked ${diff}-square`
            case 1:
                return `number checked one ${diff}-square `
            case 2:
                return `number checked two ${diff}-square `
            case 3:
                return `number checked three ${diff}-square `
            case 4:
                return `number checked four ${diff}-square `
            case 5:
                return `number checked five ${diff}-square `
            case 6:
                return `number checked six ${diff}-square `
            default:
                break;
        }
        
    }

    return(
        <div id={id} className={handleClass()} onClick={() => {handleClick(positionX, positionY)}}>
            {
                (type != 0 && type != 'x') 
                ?
                    <p>{type}</p>
                :
                    ''
            }
        </div>
    )
}
