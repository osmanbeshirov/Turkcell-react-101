import { count } from 'console'
import React, { useState } from 'react'


const Counter = () => {

    const [counter, setCount] = useState<number>(0);
    

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCount(counter + 1)
    }
    const handleClickDecrease = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCount(counter - 1)
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleClick}>Arttir</button>
            <button onClick={handleClickDecrease}>Azalt</button>
        </div>
    )
}

export default Counter