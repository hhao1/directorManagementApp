import React from 'react'

const ListEmployees = ({employee}) => {
    return(
        <div>
            <h3>{employee.first_name.concat(" ", employee.last_name)}</h3> 

        </div>
    )
}

export default ListEmployees