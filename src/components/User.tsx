import React, { useState } from 'react';

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
    const [user, setUser] = useState<User>({ name: 'Osman', age: 23, city: " Baku" })
    return (
        <>
            {/* {
                firends.map((friend, i) => (
                    <div key={i}>{friend}</div>
                ))
            } */}
            <h2>User</h2>
            {user.name} {user.age}
            <br /><br />
            <div>
                <button onClick={() => setUser({ ...user, name: 'kanan' })}>Change name</button>
                <button onClick={() => setUser({...user, age: 30})} >Change age</button>
            </div>

        </>
    )
}

export default User