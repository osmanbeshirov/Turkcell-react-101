import React from 'react';

interface IUserProps {
    name: string;
    age: number;
    city: string
}

const User: React.FC<IUserProps> = ({ name, age, city }) => {
    return (
        <>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>City: {city}</div>
        </>
    )
}

export default User