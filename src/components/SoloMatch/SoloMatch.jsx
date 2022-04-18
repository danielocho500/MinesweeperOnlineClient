import React, { useEffect, useState } from 'react'

import './SoloMatch.css';
import { Square } from './Square';

export const SoloMatch = ({match, diff}) => {

    const {bombs, height, width} = match
    const [squares, setsquares] = useState([])

    useEffect(() => {
        setsquares([]);
        let id = 0;

        for (let i = 0; i < width; i++) {
            for(let j = 0; j < height; j++){
                console.log(i,j)
                 setsquares(squaresOld => [...squaresOld, {
                    positionX: i,
                    positionY: j,
                    id: `${i}${j}`
                 }]
                 )
            }
        }

    }, [])    

    return (
        <div className='container'>
            <div className={`${diff} grid-table`} id='grid'>
                {
                    squares.map(element =>{ 
                        return <Square key={element.id} diff={diff}/>
                    })
                }               
            </div>
        </div>

    )
}
