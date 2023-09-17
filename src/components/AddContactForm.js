import { Form, Button } from "react-bootstrap"

import {ContactContext} from '../contexts/ContactContext';
import {useContext, useState} from 'react';



const AddForm = () =>{

    const {addContact} = useContext(ContactContext);

    const [newContact, setNewContact] = useState({
        name:"", email:"", address:"", phone:""
    });

    const onInputChange = (e) => {
        setNewContact({...newContact,[e.target.name]: e.target.value})
    }

    const {name, email, address, phone } = newContact;

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(name, email, address, phone );
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    rows={3}
                    name="address"
                    value={address}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New Contact
            </Button>
        </Form>

     )
}

export default AddForm;