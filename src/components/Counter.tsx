import React, { useState, useEffect } from 'react'


const Counter = () => {

    const [counter, setCount] = useState<number>(0);


    // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     setCount(counter + 1)
    // }
    // const handleClickDecrease = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     setCount(counter - 1)
    // }

    useEffect(() => {
        let interval = setInterval(() => {
            console.log('interval')
            setCount((prev) => prev + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <h1>{counter}</h1>
            {/* <button onClick={handleClick}>Arttir</button>
            <button onClick={handleClickDecrease}>Azalt</button> */}
        </div>
    )
}

export default Counter