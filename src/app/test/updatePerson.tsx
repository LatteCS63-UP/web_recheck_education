'use client'

interface Person {
    PersonID: number;
    FirstName: string;
    LastName: string;
    Address: string;
    City: string;
    }

import React, { SyntheticEvent, useState } from 'react'
import Modal from 'react-modal';

//? Icon
import { FiEdit, FiTrash } from 'react-icons/fi';

// const updatePerson: React.FC = (person: Person) => {

//     const [isPopupOpen, setPopupOpen] = useState(false);

//     const openPopup = () => {
//         setPopupOpen(true);
//     };

//     const closePopup = () => {
//         setPopupOpen(false);
//     };

//     Modal.setAppElement('#updatePerson');

//   return (
//     <div id='updatePerson'>
//         <FiEdit onClick={openPopup} cursor='pointer' className='text-blue-500' size={20}/>

//         <Modal isOpen={isPopupOpen} onRequestClose={closePopup}>
//             <div>
//                 {person.PersonID}
//                 <button onClick={closePopup}>Close</button>
//             </div>
//         </Modal>
//     </div>
//   )
// };

// export default updatePerson;

export default function updatePerson(person: Person) {

  const [isPopupOpen, setPopupOpen] = useState(false);

  const [formData, setFormData] = useState({
    PersonID: String(person.PersonID),
    FirstName: person.FirstName,
    LastName: person.LastName,
    Address: person.Address,
    City: person.City,
  });

  const openPopup = () => {
      setPopupOpen(true)
  };

  const closePopup = () => {
      setPopupOpen(false)
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
        "PersonID": Number(formData.PersonID),
        "FirstName": formData.FirstName,
        "LastName": formData.LastName,
        "Address": formData.Address,
        "City": formData.City,
    }

    try {
        await fetch(`http://localhost:5000/persons/managePerson?PersonID=${person.PersonID}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        window.location.href = '/test';
    } catch (error) {
        console.error('Error submitting form data:', error);
    }
  }

  return (
    <>
        <FiEdit onClick={openPopup} cursor='pointer' className='text-blue-500' size={20}/>

        <Modal isOpen={isPopupOpen} onRequestClose={closePopup} ariaHideApp={false}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>PersonID: </label>
                        <input placeholder={`${person.PersonID}`} onChange={(e) => setFormData((selectValue) => ({...selectValue, PersonID: e.target.value}))} />
                    </div>

                    <div>
                        <label>First name: </label>
                        <input placeholder={`${person.FirstName}`} onChange={(e) => setFormData((selectValue) => ({...selectValue, FirstName: e.target.value}))} />
                    </div>

                    <div>
                        <label>Last name: </label>
                        <input placeholder={`${person.LastName}`} onChange={(e) => setFormData((selectValue) => ({...selectValue, LastName: e.target.value}))} />
                    </div>

                    <div>
                        <label>Address: </label>
                        <input placeholder={`${person.Address}`} onChange={(e) => setFormData((selectValue) => ({...selectValue, Address: e.target.value}))} />
                    </div>

                    <div>
                        <label>City: </label>
                        <input placeholder={`${person.City}`} onChange={(e) => setFormData((selectValue) => ({...selectValue, City: e.target.value}))} />
                    </div>

                    <button type='submit'>Update</button>
                    <button onClick={closePopup}>Close</button>

                </form>
        </Modal>
    </>
  )
}
