import React, { useContext, useState } from "react";
import { Form ,Button} from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeListContext";

const AddEmployee=()=>{
const{dispatch}=useContext(EmployeeContext);

const[newEmployee,setNewEmployee]=useState({
    name:'',
    email:'',
    address:'',
    phone:''
});

const{name,email,address,phone}=newEmployee;

const onInputChange=(e)=>{
    setNewEmployee({...newEmployee,[e.target.name]:e.target.value})
}

const onSubmitHandle=(e)=>{
    e.preventDefault();
    dispatch({type:'add_employee',employee:{
        name,email,address,phone
    }})
}


    return (
        <Form onSubmit={onSubmitHandle}>
            <Form.Group>
                <Form.Control
                type='text'
                placeholder='Name'
                required
                name='name'
                value={name}
                onChange={(e)=>onInputChange(e)}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                type='text'
                placeholder='Email'
                required
                name='email'
                value={email}
                onChange={(e)=>onInputChange(e)}

                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                as='textarea'
                placeholder='Address'
                rows={3}
                name='address'
                value={address}
                onChange={(e)=>onInputChange(e)}

                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                type='text'
                placeholder='Phone'
                required
                name='phone'
                value={phone}
                onChange={(e)=>onInputChange(e)}

                />
            </Form.Group>

            <Button variant='success' type='submit' block >Add an Employee</Button>
        </Form>
    )
}

export default AddEmployee;