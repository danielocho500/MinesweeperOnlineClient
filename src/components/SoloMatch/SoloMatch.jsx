import React, { useEffect, useState } from 'react'

import './SoloMatch.css';
import { Square } from './Square';

class Cont {
    constructor(){
        this.value = 0
    }

    getCont = () => {
        this.value += 1;
        return this.value;
    }

    getValue = () => {
        return this.value;
    }

    reset = () => {
        this.value = 0;
    }
} 

export const SoloMatch = ({match, diff, socket}) => {

    const {bombs, height, width} = match
    const [squares, setsquares] = useState([])
    const [isInitialized, setIsInitialized] = useState(false)

    useEffect(() => {
        setsquares([]);
        let id = new Cont();

        for (let i = 0; i < height; i++) {
            for(let j = 0; j < width; j++){
                 setsquares(squaresOld => [...squaresOld, {
                    positionX: j,
                    positionY: i,
                    id: id.getCont(),
                    type: 'x'
                 }]
                 )
            }
        }
    }, [socket])    

    const handleClick = (posX, posY) => {

        if(!isInitialized){
            createMatch(posX, posY);
            return;
        }
        else{
            socket.emit('sendPlay', {
                posX,
                posY
            })
        }
    }

    const createMatch = (posX, posY) => {
        socket.emit('startSolo', {
            ...match,
            initialX: posX,
            initialY: posY
        })
        setIsInitialized(true)
    }

    socket.on('playSquare', ({actualMatch, win, lose}) => {
        const squares = [];

        let x = new Cont();
        let y = new Cont();
        let id = new Cont();

        actualMatch.forEach(row => {
            row.forEach(square => {
                squares.push({
                    positionX: x.getValue(),
                    positionY: y.getValue(),
                    id: id.getCont(),
                    type: square
                })
                x.getCont();
            });
            y.getCont();
            x.reset();
        });

        console.log(squares)
        setsquares(squares);

    })

    console.log(squares)

    return (
        <div className='container'>
            <div className={`${diff} grid-table`} id='grid'>
                {
                    squares.map(element =>{ 
                        return <Square key={element.id} diff={diff} handleClick={handleClick} positionX={element.positionX} positionY={element.positionY} type={element.type}/>
                    })
                }               
            </div>
        </div>

    )
}
