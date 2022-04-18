import React, { useEffect, useState } from 'react'

export const Square = ({id, diff}) => {
    
    const [state, setstate] = useState('')
    const [value, setvalue] = useState('');

    

    return(
        <div id={id} className={`valid ${diff}-square`}>
            {value}
        </div>
    )
}
