import React, { useState } from 'react'

interface Props {
    userID: number,
    email: string,
    name: string
}

export default function Update(value: Props) {
    const [user, setUser] = useState<Props[]>([])

    const hadleSubmit = async () => {
        const request = await fetch(`http://localhost:5000/users/manageUser?UserID=${value.userID}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then((warning) => (alert(warning.statusText)))
        console.log(request)
    }
    return (
        <div>
            <div>
                <div>
                    <label htmlFor="">ID : </label>
                    <span>{value.userID}</span>
                </div>

                <div>
                    <label htmlFor="">Email : </label>
                    <input type="text" placeholder={value.email} onChange={(e) => setUser((value) => ({ ...value, email: e.target.value }))} />
                </div>

                <div>
                    <label htmlFor="">Name : </label>
                    <input type="text" placeholder={value.name} onChange={(e) => setUser((value) => ({ ...value, name: e.target.value }))} />
                </div>

                <button onClick={hadleSubmit}>submit</button>
                <button>close</button>
            </div>
        </div>
    )
}
