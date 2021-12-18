import {v4 as uuidv4} from 'uuid'
import { createContext,useReducer } from "react";



export const EmployeeContext=createContext();

const EmployeeContextProvider=(props)=>{

    const reducer=(employees,action)=>{ 
        switch (action.type) {
            case 'add_employee':
                return[...employees,{
                    id:uuidv4(),
                    name:action.employee.name,
                    email:action.employee.email,
                    address:action.employee.address,
                    phone:action.employee.phone
                }]
            case 'remove_employee':
                return employees.filter(employee=>action.id !== employee.id)
            case 'edit_employee':
                return employees.map((employee)=>employee.id===action.id?action.updatedEmployee :employee)    
        
            default:
                return employees;
        }
    }

    const [employees,dispatch]=useReducer(reducer,[
        { id:uuidv4(), name: 'Ismail Abdullazade', email: 'ismail@mail.ru', address: 'Xetai rayonu', phone: '055 555 0801' },
        { id:uuidv4(), name: 'Nesimi Velizade', email: 'nesimi@mail.ru', address: 'Nesimi rayonu', phone: '055 333 0801' },
        { id:uuidv4(), name: 'Aydin Isgenderli', email: 'aydin@mail.ru', address: 'Nizami rayonu', phone: '055 222 0801' },
        { id:uuidv4(), name: 'Gunay Abdullazade', email: 'gunay@mail.ru', address: 'Xetai rayonu', phone: '055 111 0801' },
        { id:uuidv4(), name: 'Kelenter Finalov', email: 'sadan@mail.ru', address: 'Sabuncu rayonu', phone: '055 888 0801' }
    ])

    

    return(


        <EmployeeContext.Provider value={{employees,dispatch}}>
            {props.children}
        </EmployeeContext.Provider>

    )
}

export default EmployeeContextProvider;