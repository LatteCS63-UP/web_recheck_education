'use client'

import React, { useEffect, useState } from 'react'
import {} from 'next/navigation'

//? component
import Create from './create'
import UpdatePerson from './updatePerson'

//? Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//? Icon
import { FiEdit, FiTrash } from 'react-icons/fi';

//? Fonts
import '../globals.css';

interface Person {
  PersonID: number;
  FirstName: string;
  LastName: string;
  Address: string;
  City: string;
}

const page: React.FC = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/persons');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data: Person[] = await response.json();
        setPersons(data);

      } catch (error) {
        console.error('Error fetching persons:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (personID: string) => {
    try {
      const confirmed = confirm("Are you sure?")

      if(confirmed){
        const response = await fetch(`http://localhost:5000/persons/managePerson?PersonID=${personID}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        })
        // .then(response => response.json())
        // .then(data => console.log(data))
        window.location.reload();
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  }

  const refresh = async (personID: string) => {
    // window.location.reload();
    // console.log(personID)
    window.location.href = `/test/${personID}`;
  }

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className=''>สวัสดี</div>
      <Create />
      <h3>Show persons</h3>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table" >
          <TableHead>
            <TableRow>
              <TableCell className='font-semibold'>Person_ID</TableCell>
              <TableCell align='right' className='font-semibold'>First name</TableCell>
              <TableCell align='right' className='font-semibold'>Last name</TableCell>
              <TableCell align='right' className='font-semibold'>Address</TableCell>
              <TableCell align='right' className='font-semibold'>City</TableCell>
              <TableCell align='center' className='font-semibold'>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {persons.map((person) => (
              <TableRow key={person.PersonID} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>{person.PersonID}</TableCell>
                <TableCell align='right'>{person.FirstName}</TableCell>
                <TableCell align='right'>{person.LastName}</TableCell>
                <TableCell align='right'>{person.Address}</TableCell>
                <TableCell align='right'>{person.City}</TableCell>
                <TableCell align='center'>
                  {/* <FiEdit onClick={() => refresh(`${person.PersonID}`)} cursor='pointer' className='text-blue-500' size={20}/> */}
                  <UpdatePerson {...person}/>
                  <FiTrash onClick={() => handleDelete(`${person.PersonID}`)} cursor='pointer' className='text-red-500 ml-5' size={20}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default page
