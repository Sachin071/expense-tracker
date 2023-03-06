import React from 'react'
import { NavLink } from 'react-router-dom'

function Home(){
    return(
        <>
            <main >
                <div className="leftside">
                    <h1>Keep Track of Your Income & Expenses</h1>
                    <p>View all your income and expenses flow from your team in one dashboard</p>
                    <NavLink to="/login">Track Your Data</NavLink>
                </div>
                <div className='rightside'>
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_a5V6-hVEKeRaY6gRu-uJ_dUC3enCf7Vnw&usqp=CAU" 
                        alt="Images will be upload very soon" />
                </div>
            </main>
            
        </>
    )
}

export default Home