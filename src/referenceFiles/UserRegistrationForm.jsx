import React from 'react';
import './Sty.css';
import { useState } from 'react';

const UserRegistrationForm = () => {
  const [userRegistration, setUserRegistration] = useState({
    username:'',
    email:'',
    phone:'',
    password:'',
  });
 

  const [record, setAllRecord] = useState([]);


  const changeHandler =(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setUserRegistration({...userRegistration, [name]:value})

    
  }

  const SubmitForm = (e) => {
    e.preventDefault();

    const newRecord = { ...userRegistration,id:new Date().getTime().toString(),  }
    setAllRecord([...record, newRecord]);

    setUserRegistration({username:'',email:'',phone:'',password:''})
  
    
  }
  return (
    <>
      <div className="login-box">
        <h2>Contact Form</h2>
        <form action='' onSubmit={SubmitForm}>
        <div className="user-box">
            <label htmlFor='name'></label>
            <input type="text" placeholder='Name' 
            name="username" autoComplete='off'
            value={userRegistration.name}
            onChange={changeHandler} ></input>
          </div>
          <div className="user-box">
            <label htmlFor='email'></label>
            <input type="text" placeholder='Email' 
            name="email" autoComplete='off'
            value={userRegistration.email}
            onChange={changeHandler } ></input>
          </div>
          <div className="user-box">
            <label htmlFor='phone'></label>
            <input type="number" placeholder='Phone' 
              name="phone" autoComplete='off'
            value={userRegistration.phone}
            onChange={changeHandler} ></input>
          </div>
          <div className="user-box">
            <label htmlFor='password'></label>
            <input type="password" placeholder='Password'
             name="password" autoComplete='off'
             value={userRegistration.password}
              onChange={changeHandler}></input>
          </div>

          <div className="user-box">
          <label htmlFor="gender" placeholder='Gender'></label>
          <div>
          <input type="radio" id="male" name="gender"  placeholder='Male'value={userRegistration.gender} onChange={changeHandler}></input>
          <input type="radio" id="female" name="gender" placeholder='Female' value={userRegistration.gender} onChange={changeHandler}></input>
          </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">Registration</button>
          </div>
        </form>
      </div>
      <div>
        {
          record.map((curElem)=>{
            const {id,username,email,phone,password}=curElem;
            return(
              <div key={id}>
                <p className='output'>{username}</p>
                <p className='output'>{email}</p>
                <p className='output'>{phone}</p>
                <p className='output'>{password}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default UserRegistrationForm;