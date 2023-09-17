import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ContactContext = createContext()

const ContactContextProvider  = (props) => {

    const [contacts, setContacts] = useState([
        {id:uuidv4(), name: 'Pedro Luis', email: 'pedroLuis@mail.com', address: 'Kendall Dr. Florida, USA', phone: '(305) 555-2222'},
        {id:uuidv4(), name: 'Andres Alexander', email: 'andresA@mail.com', address: 'Kaizer str, Berlin, Germany', phone: '(54) 555-5735'},
        {id:uuidv4(), name: 'Charlie', email: 'Charlie@mail.com', address: 'La torre 23, Paris, France', phone: '(39) 555-9931'},
        {id:uuidv4(), name: 'Mayi Mc', email: 'Mayi@mail.com', address: 'C/ La alberca, 67, Madrid, Spain', phone: '(34) 619-5731'},
        {id:uuidv4(), name: 'Jorge Mc', email: 'jorge@mail.com', address: '45 nw 90st, Montral, Canada', phone: '(602) 631-2097'}
])

useEffect(()=> {
    
    setContacts(JSON.parse(localStorage.getItem('contacts')))
},[])

useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
})



const sortedContacts = contacts.sort((a,b)=>(a.name < b.name ? -1 : 1));



const addContact = (name, email, address, phone) => {
    setContacts([...contacts , {id:uuidv4(), name, email, address, phone}])
}

const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
}

const updateContact = (id, updatedContact) => {
    setContacts(contacts.map((contact) => contact.id === id ? updatedContact : contact))
}

    return (
        <ContactContext.Provider value={{sortedContacts, addContact, deleteContact, updateContact}}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider;