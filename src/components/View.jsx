import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'


const View = ({user,deleteUser}) => {
    
    return user.map(newUser=>(
        
        <tr key={newUser.EmployeeID}>
            <td>{newUser.EmployeeID}</td>
            <td>{newUser.Name}</td>
            <td>{newUser.EmailId}</td>
            <td>{newUser.Location}</td>
            <td className='delete-btn' onClick={()=>deleteUser(newUser.EmployeeID)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}

export default View