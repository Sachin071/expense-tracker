
import React from 'react'
import {  useState } from 'react'
import baseUrl from '../../../utils/baseUrl'

function AddTransaction(){

    const [title,setTitle]=useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('');
    const [date, setDate] = useState('');

    

    const submit =async ()=>{

        if (! title) {
            alert('Please Select title');
            return;
        }
        if (!description) {
            alert('Please Select description');
            return;
        }
        if (!amount) {
            alert('Please Select Amount');
            return;
        }
        
        if (!type) {
            alert('Please Select Amount Type');
            return;
        }
        if(!date){
            alert('Please Select Date');
            return;
        }

        const usersid = localStorage.getItem('userInfo');

        let result = await fetch(
            `${baseUrl}/users/post-transaction/${usersid}`,
            {
                method: 'post',
                body:JSON.stringify({title,description,amount,type,date}),
                headers: {
                    'Content-Type': 'application/json',
                },
            },
            );
        result = await result.json();
        if(result.status){
            alert("Transaction Added");

        }
        else if (!result.status){
            alert("adding failed transaction")
        }

        else {
            console.warn("error")
        }

        console.warn(result);
    }



    return(
        <>
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className='form-title'>Add Transaction</h2>
                        
                                <form className="register-form" id='register-form'>
                                        <div className="form-group">
                        
                                        <select  value = {title}
                                                onChange={(event)=>{
                                                    setTitle(event.target.value);
                                                }}>
                                                <option> Select Your Title </option>
                                                <option value= "salary"> salary </option>
                                                <option value = "freelancing"> freelancing </option>
                                                <option value = "On Self"> On Self </option>
                                                <option value = "Recharge"> Recharge </option>
                                                <option value = "Travel"> Travel </option>
                                                <option value = "rent"> Rent </option>
                                                <option value = "movie"> Movie </option>
                                                <option value = "books"> Books </option>
                                                <option value = "lunch"> Lunch </option>
                                                <option value = "dinner"> Dinner </option>
                                                
                                            </select>
                                        </div>
                                    
                                        
                                        <div className="form-group">
                                        
                                            <input 
                                                type="text"
                                                name='description'
                                                placeholder='Enter Description'
                                                autoComplete='off'
                                                value = {description}
                                                onChange={(event)=>{
                                                    setDescription(event.target.value);
                                                }}
                                                
                                            />
                                        </div> 

                                        <div className="form-group">
                                            
                                            <select  value = {type}
                                                onChange={(event)=>{
                                                    setType(event.target.value);
                                                }}>
                                                <option> Select Your Amount </option>
                                                <option value= "expense"> Expense </option>
                                                <option value = "income"> Income </option>
                                                
                                            </select>
                                        </div>
                                        
                                        <div className="form-group">
                                            
                                            <input 
                                                type="number"
                                                name='amount'
                                                placeholder='Enter Amount'
                                                autoComplete='off'
                                                value = {amount}
                                                onChange={(event)=>{
                                                    setAmount(event.target.value);
                                                }}
                                                
                                            />
                                        </div>
                                        
                                        <div className="form-group">
    
                                            <input 
                                                type="date"
                                                name='date'
                                                placeholder='Enter Date'
                                                autoComplete='off'
                                                value = {date}
                                                onChange={(event)=>{
                                                    setDate(event.target.value);
                                                }}
                                                
                                            />
                                        </div>

                        
                                        <div className="form-group">
                                            {/* Display ErrorMessage */}
                                        

                                        </div>

                                        <div className="form-group form-button">
                                        
                                            <button onClick={submit} type="submit"  id="signup" className='form-submit'>Add Transaction</button>
                                        </div>
                                </form>
                        </div>
                    </div>

                </div>
            </section> 
        </>
    )
}

export default AddTransaction