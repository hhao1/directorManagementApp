import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'

const EmployeeDetail = ({ match }) => {
    console.log(useParams())
    const { id }  = useParams()
    console.log(id)
    let [employee, setEmployeeDetail] = useState(null)

    let getEmployeeDetail = async ()=> {
        console.log(id)
        let response = await fetch('/employees/${id}/')
        console.log(response)
        let data = await response.json()
        console.log(data)
        setEmployeeDetail(data)
    }


    useEffect(() => {
        getEmployeeDetail()
    }, [id])

    return (
        <div>
            <p>{employee.first_name} </p>
            
        </div>
    )
}

export default EmployeeDetail
