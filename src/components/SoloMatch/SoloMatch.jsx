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
    const [bombsLeft, setbombsLeft] = useState(bombs)

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

    const handleClick = (posX, posY, id) => {

        if(!isInitialized){
            createMatch(posX, posY);
            return;
        }

        const {isActive} = squares[id-1]

        if(isActive)
            return

        socket.emit('sendPlay', {
            posX,
            posY
        })
    }

    const handleFlag = (e,posX, posY, id) => {
        e.preventDefault()
        
        if(!isInitialized)
            return

        const {isActive} = squares[id-1]

        if(isActive)
            return

        socket.emit('flag',{
            posX,
            posY
        })
    }

    const createMatch = (posX, posY) => {
        socket.emit('startSolo', {
            ...match,
            initialX: posX,
            initialY: posY
        })
        setIsInitialized(true)
    }

    socket.on('playSquare', ({actualMatch = {}, completeMatch = {}, win = false, lose = false}) => {
        
        const squares = [];

        let x = new Cont();
        let y = new Cont();
        let id = new Cont();

        if(lose){
            completeMatch.forEach(row => {
                row.forEach(square => {
                    squares.push({
                        positionX: x.getValue(),
                        positionY: y.getValue(),
                        id: id.getCont(),
                        ...square
                    })
                    x.getCont();
                });
                y.getCont();
                x.reset();
            });

            setbombsLeft(0);
        }

        else{

            let flagCounter = 0;

            actualMatch.forEach(row => {
                row.forEach(square => {
                    squares.push({
                        positionX: x.getValue(),
                        positionY: y.getValue(),
                        id: id.getCont(),
                        ...square
                    })

                    if(square.isFlag)
                        flagCounter++;

                    x.getCont();
                });
                y.getCont();
                x.reset();
            });

            setbombsLeft(bombs - flagCounter)
        }

        setsquares(squares);
    })

    return (
        <div className='container'>
            <div className="info">
                <div className="bombs"> {bombsLeft} </div>
            </div>
        
            <div className={`${diff} grid-table`} id='grid'>
                {
                    squares.map(element =>{ 
                        return <Square key={element.id} id={element.id} diff={diff} handleClick={handleClick} positionX={element.positionX} positionY={element.positionY} isActive={element.isActive} value={element.value} isFlag={element.isFlag} handleFlag={handleFlag}/>
                    })
                }               
            </div>
        </div>

    )
}
