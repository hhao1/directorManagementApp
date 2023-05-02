import React, {useState, useEffect} from 'react'
import ListEmployees from '../components/ListEmployees'
const HierarchyDiagram = () => {
    let [employees, setEmployees] = useState([])

    useEffect(()=>{
        getEmployees()
    },[])

    let getEmployees = async ()=>{
        let response = await fetch('/employees/')
        let data = await response.json()
        setEmployees(data)

    }

    return (
        <div>
            <div className='employees-list'>
                {employees.map((employee, index) =>(
                    <ListEmployees key={index} employee = {employee} />
                ))}
            </div>
        </div>
    )
}

export default HierarchyDiagram
