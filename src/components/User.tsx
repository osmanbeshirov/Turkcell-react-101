import React from 'react';

type User = {
    name: string,
    city: string;
    age: number
}

interface IUserProps {
    name?: string;
    age?: number;
    city?: string
    data: User
    firends: string[]
}

const User: React.FC<IUserProps> = ({ data, firends }) => {
    return (
        <>
            {
                firends.map((friend, i) => (
                    <div key={i}>{friend}</div>
                ))
            }
        </>
    )
}

export default User