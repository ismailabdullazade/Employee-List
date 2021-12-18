import  { useContext,useEffect,useState} from "react";
import { EmployeeContext } from "../contexts/EmployeeListContext";
import Employee from "./Employee";
import Pagination from "./Pagination";
import {Alert, Button, Modal} from 'react-bootstrap';
import AddEmployee from "./AddEmployee";




const EmployeeList=()=>{

const {employees}=useContext(EmployeeContext);

const [currentPage,setCurrentPage]=useState(1);
const [employeesPerPage]=useState(2);

const lastIndexEmployee=currentPage*employeesPerPage;
const firstIndexEmployee=lastIndexEmployee-employeesPerPage;
const currentEmployees=employees.slice(firstIndexEmployee,lastIndexEmployee);
const numOfPage=Math.ceil(employees.length/employeesPerPage)

const [show,setShow]=useState(false);
const [showAlert,setShowAlert]=useState(false);

const handleCloseAlert=()=>setShowAlert(false);
const handleOpenAlert=()=>setShowAlert(true);

useEffect(()=>{
    handleOpenAlert();
    setTimeout(() => {
        handleCloseAlert();
    }, 2000);
},[employees])

const closeHandle=()=>{
    setShow(false)
}

const showHandle=()=>{
    setShow(true)
}
  
useEffect(()=>{
    closeHandle();
    return ()=>{showHandle();}
},[employees])
    return(
        <>
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <h2>Manage <b>Employees</b></h2>
                </div>
                <div className="col-sm-6">
                    <Button onClick={showHandle} className="btn btn-success text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> 
                    <span>Add New Employee</span></Button>
                </div>
            </div>
        </div>
        <Alert show={showAlert} onHide={handleCloseAlert} variant='success'dismissible>
                <Alert.Heading>
                    Employee List Updated !!! 
                </Alert.Heading>
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
                    currentEmployees.map((employee)=>(
                        <tr key={employee.id} >
                            <Employee employee={employee}/>
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
        <Pagination
            pages={numOfPage}
            currentEmployees={currentEmployees}
            setCurrentPage={setCurrentPage}
            employees={employees}

        />
    <Modal show={show} onHide={closeHandle} >
        <Modal.Header closeButton>
            <Modal.Title>Add a new modal Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddEmployee/>
        </Modal.Body>
        <Modal.Footer variant='secondary'>
            <Button onClick={closeHandle}> Close ADD Modal </Button>
        </Modal.Footer>
    </Modal>

        </>
    )
}

export default EmployeeList;