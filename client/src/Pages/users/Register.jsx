import React from 'react'
import {  useState } from 'react'
import { NavLink,  useNavigate } from 'react-router-dom'
import baseUrl from '../../utils/baseUrl'

function Register(){
    const navigate = useNavigate()
    const [name,setName]=useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    

    const submit =async ()=>{
        navigate('/login')
        if (! name) {
            alert('Please Select name');
            return;
        }
        if (!email) {
            alert('Please Select email');
            return;
          }
          if (!password) {
            alert('Please Select Password');
            return;
          }
          
          if (!confirmPassword) {
            alert('Please Select confirm password');
            return;
          }

          if(password !== confirmPassword){
            alert("password and confirm password must be the same")
            return;
        }
        let result = await fetch(
            `${baseUrl}/users/register`,
            {
                method: 'post',
                body:JSON.stringify({name,email,password,confirmPassword}),
                headers: {
                    'Content-Type': 'application/json',
                },
            },
            );
        result = await result.json();
        if(result.status){
            alert("user Added");

        }
        else if (!result.status){
            alert("user already exist")
        }

        else {
            console.warn("error")
        }

        console.warn(result);
    }



    return(
        <>
            <section className="signup">
            <h1>Keep Track of your income and expenses flow</h1>
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className='form-title'>Register</h2>
                        
                                <form className="register-form" id='register-form'>
                                        <div className="form-group">
                                            <label htmlFor='email'><i className='zmdi zmdi-account material-icons-name'></i></label>
                                            <input 
                                                type="text"
                                                name='name'
                                                placeholder='Enter Name'
                                                autoComplete='off'
                                                value = {name}
                                                onChange={(event)=>{
                                                    setName(event.target.value);
                                                }}
                                            />
                                        </div>
                                    
                                        
                                        <div className="form-group">
                                            <label htmlFor='email'><i className='zmdi zmdi-email material-icons-name'></i></label>
                                            <input 
                                                type="email"
                                                name='email'
                                                placeholder='Enter Email'
                                                autoComplete='off'
                                                value = {email}
                                                onChange={(event)=>{
                                                    setEmail(event.target.value);
                                                }}
                                                
                                            />
                                        </div> 

                                        <div className="form-group">
                                            <label htmlFor='password'><i className='zmdi zmdi-lock material-icons-name'></i></label>
                                            <input 
                                                type="password"
                                                name='password'
                                                placeholder='Enter Password'
                                                autoComplete='off'
                                                value = {password}
                                                onChange={(event)=>{
                                                    setPassword(event.target.value);
                                                }}
                                                
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor='password'><i className='zmdi zmdi-lock material-icons-name'></i></label>
                                            <input 
                                                type="password"
                                                name='confirmPassword'
                                                placeholder='Enter confirm Password'
                                                autoComplete='off'
                                                value = {confirmPassword}
                                                onChange={(event)=>{
                                                    setConfirmPassword(event.target.value);
                                                }}
                                                
                                            />
                                        </div>

                        
                                        <div className="form-group">
                                            {/* Display ErrorMessage */}
                                        

                                        </div>

                                        <div className="form-group form-button">
                                        
                                            <button onClick={submit} type="submit"  id="signup" className='form-submit'>Register</button>
                                        </div>
                                </form>
                        </div>
                        <NavLink to='/login' className="link">SignIn</NavLink>
                    </div>

                </div>
            </section> 
        </>
    )
}

export default Register