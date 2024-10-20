'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react';

const create = () => {
  const [formData, setFormData] = useState({
    PersonID: "",
    FirstName: "",
    LastName: "",
    Address: "",
    City: "",
  });

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
        "PersonID": Number(formData.PersonID),
        "FirstName": formData.FirstName,
        "LastName": formData.LastName,
        "Address": formData.Address,
        "City": formData.City,
    };

    try {
        await fetch(`http://localhost:5000/persons/managePerson`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        // .then(response => response.json())
        // .then(data => console.log(data))
        
        window.location.reload();
    } catch (error) {
        console.error('Error submitting form data:', error);
    }
  };

  return (
    <div>
      <h1>My Form</h1>
      <h3>Create Person</h3>
      <form onSubmit={handleSubmit}>
        <div style={{width: "550px"}}>

          <div className='grid grid-cols-12 bg-red-500'>
            <div className='col-span-12 md:col-span-12'>
              <label>Person ID :</label>
              <input className='text-black ml-2' type="text" onChange={(e) => setFormData((selectValue) => ({...selectValue, PersonID: e.target.value}))} />
            </div>
          </div>

          <div className='grid grid-cols-12 bg-green-500'>
            <div className='col-span-12 md:col-span-6'>
              <label>First name :</label>
              <input className='text-black ml-2' type="text" onChange={(e) => setFormData((selectValue) => ({...selectValue, FirstName: e.target.value}))} />
            </div>

            <div className='col-span-12 md:col-span-6'>
              <label>Last name :</label>
              <input className='text-black ml-2' type="text" onChange={(e) => setFormData((selectValue) => ({...selectValue, LastName: e.target.value}))} />
            </div>
          </div>
          
          
          <label>Address :</label>
          <input className='text-black ml-2' type="text" onChange={(e) => setFormData((selectValue) => ({...selectValue, Address: e.target.value}))} />
          
          <label>City :</label>
          <input className='text-black ml-2' type="text" onChange={(e) => setFormData((selectValue) => ({...selectValue, City: e.target.value}))} />

          <button className='ml-2' type="submit">Submit</button>
        </div>

      </form>
    </div>
  );
};

export default create;
