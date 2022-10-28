import React, { useState } from 'react'

type IColors = string[];

const Colors = () => {

    const [colors, setColors] = useState<IColors>(['red', 'green', 'blue'])

    return (
        <div>
            <h2>Colors</h2>

            {
                colors.map((color, id) => (
                    <p key={id}>{color}</p>
                ))
            }

            {/* <button onClick={() => setColors([...colors, 'brown', 'purple'])} >Add color</button> */}
            <button onClick={() => setColors((prev) => [...prev, 'brown', 'purple'])} >Add color</button>
        </div>
    )
}

export default Colors