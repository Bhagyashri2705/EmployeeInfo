import React,{useState, useEffect} from 'react'
import View from './View';
import './Style.css';


// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('user');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

const EmployeeForm = () => {
  // main array of objects state || user state || user array of objects
  const [user, setUser]=useState(getDatafromLS());

  // input field states
  const [EmployeeID, setEmployeeID]=useState('');
  const [Name, setName]=useState('');
  const [EmailId, setEmailId]=useState('');
  const [Location, setLocation]=useState('');
  const [Salary, setSalary]=useState('');
  

  // form submit event
  const handleAdduserubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let newUser={
      EmployeeID,
      Name,
      EmailId,
      Location,
      Salary
    }
    setUser([...user,newUser]);
    setEmployeeID('');
    setName('');
    setEmailId('');
    setLocation('');
    setSalary('');

  }

  // delete User from LS
  const deleteUser=(EmployeeID)=>{
    const filtereduser=user.filter((element,index)=>{
      return element.EmployeeID !== EmployeeID
    })
    setUser(filtereduser);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('user',JSON.stringify(user));
  },[user])

  return (
    <div className='wrapper'>
      <h3>Employee Registration form</h3>
      <div className='main'>
        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAdduserubmit}>
            <label>EmployeeID</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setEmployeeID(e.target.value)} value={EmployeeID}></input>
            <label>Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setName(e.target.value)} value={Name}></input>
            <label>EmailId</label>
            <input type="email" className='form-control' required
            onChange={(e)=>setEmailId(e.target.value)} value={EmailId}></input>
            <label>Location</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setLocation(e.target.value)} value={Location}></input>
            <label>Salary</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setSalary(e.target.value)} value={Salary}></input>
            <br /><br />
            <button type="submit" className='btn btn-success btn-md'>
              Register
            </button>
          </form>
        </div>

       
        <div className='view-container'>
          {user.length>0 &&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>EmployeeID</th>
                    <th>Name</th>
                    <th>EmailEmployeeID</th>
                    <th>Location</th>
                    <th>Delete</th>3

                  </tr>
                </thead>
                <tbody>
                  <View user={user} deleteUser={deleteUser}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setUser([])}>Remove All</button>
          </>}
          {user.length < 1 && <div>No user are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default EmployeeForm
