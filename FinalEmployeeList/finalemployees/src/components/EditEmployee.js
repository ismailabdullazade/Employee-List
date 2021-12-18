import { useContext, useState } from "react";
import { EmployeeContext } from "../contexts/EmployeeListContext";
import {Button,Form} from 'react-bootstrap'



const EditEmployee=({theEmployee})=>{

    const {dispatch}=useContext(EmployeeContext)

    const employee=theEmployee;
    const id=employee.id;

    const[name,setName]=useState(employee.name);
    const[email,setEmail]=useState(employee.email);
    const[address,setAddress]=useState(employee.address);
    const[phone,setPhone]=useState(employee.phone);

    const updatedEmployee={name,email,address,phone};

     const onSubmitHandle=(e)=>{
        e.preventDefault();
        dispatch({type:'edit_employee',id,updatedEmployee})
    }

    return(
<Form onSubmit={onSubmitHandle}>
            <Form.Group>
                <Form.Control
                type='text'
                placeholder='Name'
                required
                name='name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                
                
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                type='text'
                placeholder='Email'
                required
                name='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}


                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                as='textarea'
                placeholder='Address'
                rows={3}
                name='address'
                value={address}
                onChange={(e)=>setAddress(e.target.value)}

                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                type='text'
                placeholder='Phone'
                required
                name='phone'
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}

                />
            </Form.Group>

            <Button variant='success' type='submit' block >Edit an Employee</Button>
        </Form>
    );
}

export default EditEmployee;