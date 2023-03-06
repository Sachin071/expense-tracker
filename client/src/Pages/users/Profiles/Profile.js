import React, { useState } from 'react'
import AddTransaction from '../../Transaction/income/AddTransaction';
import ViewTransaction from '../../Transaction/ViewTransaction';
import UserDetails from './UserDetails';

function Profile(){
    const [toggleState, setToggleState] = useState(3);

    const toggleTab = (index) => {
        setToggleState(index);
    };


    return(
        <>
            <section className="profile-section">
                <div className="profile-container">
                    <aside>
                        <div className="navbar">
                            <div className="user-logo">
                                <img src="https://overlay.imageonline.co/image.jpg" alt="image will be uploaded" id='profile-image'/>
                                <nav>
                                    <ul>
                                        <li>
                                            <button 
                                                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                                                onClick={() => toggleTab(1)}
                                                >
                                                User-Details
                                            </button>
                                        </li>
                                        <li>
                                            <button 
                                                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                                onClick={() => toggleTab(2)}
                                                >
                                                Add Transaction
                                            </button>
                                        </li>
                                    
                                        <li>
                                            <button 
                                                className= {toggleState === 3 ? "tabs active-tabs" : "tabs"}
                                                onClick={() => toggleTab(3)}
                                                >
                                                View Transaction
                                            </button>
                                        </li>
                                        <li><button type='submit' >Logout</button></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </aside>
                    <main>
                        <div className="content-tabs">
                            <div className= {toggleState === 1 ? "content  active-content" : "content"} >
                                <div className="title">User- Details</div>
                                <div className="contents">
                                    <UserDetails/>
                                </div>
                            </div>
                        
                            <div className= {toggleState === 2 ? "content  active-content" : "content"} >
                                <div className="title">Create Transaction</div>
                                <div className="contents">
                                    <AddTransaction/>
                                </div>
                            </div>
                            
                            <div className= {toggleState === 3 ? "content  active-content" : "content"} >
                                <div className="title">
                                    View Transaction
                                </div>
                                
                                <div className="contents">
                                    <ViewTransaction/>
                                </div>
                            </div>
                    
                        </div>
                    </main>
                </div>
            </section>    
        </>
    )
}

export default Profile