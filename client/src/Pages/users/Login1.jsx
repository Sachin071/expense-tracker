import React from 'react'
import {  useState } from 'react'
import { NavLink,  useNavigate } from 'react-router-dom'
import baseUrl from '../../utils/baseUrl'

function Login(){
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    const submit =async()=>{
        navigate("/profile");
        if (!email) {
            alert('Please Select email');
            return;
        }
        if (!password) {
            alert('Please Select Password');
            return;
        }
        
        let result = await fetch(
            `${baseUrl}/users/login`,
            {
                method: 'post',
                body: JSON.stringify({email,password}),
                headers: {
                    'Content-Type': 'application/json',
                },
            },
            );
        result = await result.json();
        console.log(result);
        if(result.status){
            alert("user Successfully")
            const userid = localStorage.setItem('userInfo', result._id)
            console.log(userid);

        }
        else{
            alert("Invalid Users ")
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
                            <h2 className='form-title'>Login</h2>
                        
                                <form className="register-form" id='register-form'>
                                    
                                        
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
                                            {/* Display ErrorMessage */}
                                        

                                        </div>

                                        <div className="form-group form-button">
                                        
                                            <button onClick={submit} type="submit"  id="signup" className='form-submit'>Login</button>
                                        </div>
                                </form>
                        </div>
                        <NavLink to='/register' className="link">SignUp</NavLink>
                    </div>

                </div>
            </section> 
        </>
    )
}

export default Login