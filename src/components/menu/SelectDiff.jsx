import React from 'react'
import { ScreenType } from '../helper/ScreenType';

import './SelectDiff.css';

export const SelectDiff = ({setScreen, setMatch, setDiff}) => {

    const handleDiffEasy = e => {
        setMatch({
            bombs: 10,
            height: 8,
            width: 8
        })

        setDiff('easy');

        setScreen(ScreenType.SoloMatch);
    }

    const handleDiffNormal = () => {
        setMatch({
            bombs: 60,
            height: 16,
            width: 16
        })

        setDiff('normal')

        setScreen(ScreenType.SoloMatch);
    }

    const handleDiffHard = () => {
        setMatch({
            bombs: 99,
            height: 16,
            width: 30
        })

        setDiff('hard')

        setScreen(ScreenType.SoloMatch);
    }

    return(
        <div className='diff container' >
            <div className="diff-item" id="easy" onClick={handleDiffEasy} value="ola">
                <h3> Easy </h3>
                <h4> 8 x 8 </h4>
                <h4> 10 mines </h4>
            </div>

            <div className="diff-item" name="normal" onClick={handleDiffNormal}>
                <h3> Normal </h3>
                <h4> 16 x 16 </h4>
                <h4> 40 mines </h4>
            </div>

            <div className="diff-item" name="hard" onClick={handleDiffHard}>
                <h3> Hard </h3>
                <h4> 16 x 30 </h4>
                <h4> 99 mines </h4>
            </div>
        </div>
    )
}
