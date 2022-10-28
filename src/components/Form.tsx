import React, { useState } from 'react';

interface IForm {
    name: string;
    surname: string;
    gender: string
}

const Form = () => {

    const [form, setForm] = useState<IForm>({ name: '', surname: '', gender: '' })

    // const [name, setName] = useState<string>('');
    // const [surname, setSurname] = useState('');
    // const [gender, setGender] = useState('Man')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <div>
                <h3>Name</h3>
                <input name='name' value={form.name} type={'text'} placeholder='Type your name...' onChange={handleChange} />

                <input name='surname' value={form.surname} type={'text'} placeholder='Type your surname...' onChange={handleChange} />
            </div>
            <br />
            <div>
                <select name="gender" id="gender" value={form.gender} onChange={handleChange}  >
                    <option value="man">Man</option>
                    <option value="woman">Woman</option>
                </select>
            </div>

            <hr />
            <h1>Name: {form.name}</h1>
            <h1>Surame: {form.surname}</h1>
            <h1>Gender: {form.gender}</h1>
        </div>
    )
}

export default Form