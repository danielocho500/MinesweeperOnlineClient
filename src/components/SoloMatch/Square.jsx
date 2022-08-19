import React, { useEffect, useState } from 'react'

export const Square = ({id, diff, handleClick, positionX, positionY, isActive, value, isFlag, handleFlag}) => {

    const handleClass = () => {

        if(isActive){
            switch (value) {
                case "b":
                    return `valid one ${diff}-square`
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
                case 7:
                    return `number checked six ${diff}-square `
                case 8:
                    return `number checked six ${diff}-square `
                default:
                    break;
            }
        }
        else{
            if(isFlag){
                return `valid ${diff}-square flag`
            }
            else if(value == 'b'){
                return `checked ${diff}-square bomb`
            }
            else
                return `valid ${diff}-square`
        }        
    }

    return(
        <div className={handleClass()} onMouseDown="party.confetti(this)" onClick={() => {handleClick(positionX, positionY, id)}} onContextMenu={(e) => {handleFlag(e,positionX, positionY, id)}}>
            {
                (isActive && value != 'b' && value != 0) 
                ?
                        <p>{value}</p>
                :
                    ''
            }
        </div>
    )
}
