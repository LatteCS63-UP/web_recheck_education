"use client"
// ? mui
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material'

import React, { useEffect, useState } from 'react'

interface User {
    userID: number,
    email: string,
    name: string
}

export default function page() {
    const [user, setUser] = useState<User[]>([])
    const [addUser, setAddUser] = useState({
        email: '',
        name: ''
    })
    const [popupUpdate, setPopupUpdate] = useState<boolean>(false)
    const [popupAddUser, setPopupAddUser] = useState<boolean>(false)
    const [popupValue, setPopupValue] = useState({
        userID: 0,
        email: '',
        name: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/users');
            const data = await response.json();
            setUser(data)
        };

        fetchData()

    }, [popupUpdate])

    const handleAddUser = async () => {
        setPopupAddUser(true)
    }

    const handleAddSubmit = async () => {
        const request = await fetch('http://localhost:5000/users/manageUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addUser)
        })

        console.log(request)

        setPopupAddUser(false)
    }

    const handleAddClose = async () => {
        setPopupAddUser(false)
    }

    const handleUpdate = async (id: number, email: string, name: string) => {
        setPopupUpdate(true)
        setPopupValue((value) => ({ ...value, userID: id, email: email, name: name }))
    }

    const handleUpdateClose = async () => {
        setPopupUpdate(false)
    }

    const handleUpdateSubmit = async () => {
        const request = await fetch(`http://localhost:5000/users/manageUser?UserID=${popupValue.userID}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: popupValue.email,
                name: popupValue.name
            })
        }).then((warning) => (alert(warning.statusText)))
        console.log(request)
        // console.log(popupValue.userID)

        setPopupUpdate(false)
    }

    const handleDelete = async (id: number) => {
        const request = await fetch(`http://localhost:5000/users/manageUser?UserID=${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }).then((warning) => (alert(warning.statusText)))

        console.log(request)
    }

    const fechDateUser = async (email: string) => {
        const response = await fetch('http://localhost:5000/users/checkUser?Email=max%40gmail.com')
        const data = await response.json();
        return data
    }

    return (
        <div className='flex flex-col items-center justify-center gap-2' style={{ height: '100vh' }}>
            {popupAddUser && (
                <div style={{ width: 650, padding: '.5rem', boxSizing: 'border-box' }} className='bg-zinc-100'>
                    <div>
                        {/* <div>
                            <label htmlFor="">ID : </label>
                            <span>{popupValue.userID}</span>
                        </div> */}

                        <div style={{}}>
                            <label htmlFor="">Email : </label>
                            <input type="text" onChange={(e) => setAddUser((value) => ({ ...value, email: e.target.value }))} />
                        </div>

                        <div>
                            <label htmlFor="">Name : </label>
                            <input type="text" onChange={(e) => setAddUser((value) => ({ ...value, name: e.target.value }))} />
                        </div>

                        <button onClick={handleAddSubmit}>submit</button>
                        <button onClick={handleAddClose}>close</button>
                    </div>
                </div>
            )}
            <div className='flex justify-end' style={{ width: 650 }}>
                <Button variant="outlined" color="success" onClick={() => handleAddUser()}>Add user</Button>
            </div>
            <TableContainer sx={{ width: 650 }} className='bg-zinc-100'>
                <Table>
                    <TableHead className='bg-zinc-200'>
                        <TableRow>
                            <TableCell className='font-semibold'>No.</TableCell>
                            <TableCell className='font-semibold'>Email</TableCell>
                            <TableCell className='font-semibold'>Name</TableCell>
                            <TableCell className='font-semibold'>Update</TableCell>
                            <TableCell className='font-semibold'>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((value, index) => (
                            <TableRow key={value.userID}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{value.email}</TableCell>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>
                                    <Button color='warning' onClick={() => handleUpdate(value.userID, value.email, value.name)}>UPDATE</Button>
                                </TableCell>
                                <TableCell>
                                    <Button color='error' onClick={() => handleDelete(value.userID)}>DELETE</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {popupUpdate && (
                <div style={{ width: 650, padding: '.5rem', boxSizing: 'border-box' }} className='bg-zinc-100'>
                    <div>
                        <div>
                            <label htmlFor="">ID : </label>
                            <span>{popupValue.userID}</span>
                        </div>

                        <div>
                            <label htmlFor="">Email : </label>
                            <input type="text" placeholder={popupValue.email} onChange={(e) => setPopupValue((value) => ({ ...value, email: e.target.value }))} />
                        </div>

                        <div>
                            <label htmlFor="">Name : </label>
                            <input type="text" placeholder={popupValue.name} onChange={(e) => setPopupValue((value) => ({ ...value, name: e.target.value }))} />
                        </div>

                        <button onClick={handleUpdateSubmit}>submit</button>
                        <button onClick={handleUpdateClose}>close</button>
                    </div>
                </div>
            )}

            <div>
                {/* <form>
                </form> */}
                <input type="text" />
                {/* <input type="submit" onClick={fechDateUser} /> */}
            </div>
        </div>
    )
}
