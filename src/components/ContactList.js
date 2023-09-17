import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {ContactContext} from '../contexts/ContactContext';
import Contact from './Contact';
import AddForm from './AddContactForm';
import Pagination from './ContactPagination';

const ContactList = () => {

    const {sortedContacts} = useContext(ContactContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
   

    const [currentPage, setCurrentPage] = useState(1);
    const [contactsPerPage] = useState(5)

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(()=> {
            setShowAlert(false);
        }, 2000)
    }

    useEffect(() => {
        handleClose();

        return () => {
            handleShowAlert();
        }
    }, [sortedContacts])

    const indexOfLastContact = currentPage * contactsPerPage;
    const indexOfFirstContact = indexOfLastContact - contactsPerPage;
    const currentContacts = sortedContacts.slice(indexOfFirstContact, indexOfLastContact);
    const totalPagesNum = Math.ceil(sortedContacts.length / contactsPerPage);


    return (
    <>
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2><b>Contacts List</b></h2>
            </div>
            <div className="col-sm-6">
                <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Contact</span></Button>					
            </div>
        </div>
    </div>

    <Alert show={showAlert} variant="success">
        Contact List Updated Succefully!
    </Alert>

    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>

                {
                  currentContacts.map(contact => (
                      <tr key={contact.id}>
                        <Contact contact={contact} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>

    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentContacts ={currentContacts}
                sortedContacts = {sortedContacts} />

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Contact
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
    </>
    )
}

export default ContactList;