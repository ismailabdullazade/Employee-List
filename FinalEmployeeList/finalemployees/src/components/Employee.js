import React, { useContext, useEffect, useState } from "react";
import { Modal, OverlayTrigger, Tooltip,Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeListContext";
import EditEmployee from "./EditEmployee";

const Employee = ({employee}) => {

    const{dispatch}=useContext(EmployeeContext)

    const [show,setShow]=useState(false);
  /*   const [showAlert,setShowAlert]=useState(false);

    const handleOpenAlert=()=>setShowAlert(true);
    const handleCloseAlert=()=>setShowAlert(false); */

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);

    useEffect(()=>{
        handleClose()
    },[employee])

   /*  useEffect(()=>{
        handleOpenAlert();
        setTimeout(() => {
            handleCloseAlert();
        }, 2000);
    },[employee]) */

    return (
        <>

       {/*  <Alert show={showAlert} onHide={handleCloseAlert} variant='danger' dismissible >
            <Alert.Heading>One Employee was Deleted ! </Alert.Heading>
        </Alert> */}
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>

            <OverlayTrigger
            overlay={
                <Tooltip id={`tooltip-right`}>
                    Edit
                </Tooltip>
            }
            >
                
            <button 
            onClick={handleShow}
            className="btn btn-warning" data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
            </OverlayTrigger>


            <OverlayTrigger
            overlay={
                <Tooltip id={`tooltip-right`}>
                    Delete
                </Tooltip>
            }
            >

            <button 
            onClick={()=>dispatch({type:'remove_employee',id:employee.id})}
            className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
            
            </OverlayTrigger>




            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title>Edit an Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditEmployee theEmployee={employee}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant='secondary' >Close Edit Modal</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Employee;