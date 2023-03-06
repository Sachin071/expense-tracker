import {NavLink} from 'react-router-dom'

const Nav = ()=>{
    return(
        <>
            <div className='toggle'>
                <i class="zmdi zmdi-format-list-bulleted"></i>
            </div>
            <section className='navSection'>
                
                <div className='logo'>
                    <h1>Expense-Tracker</h1>
                </div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/profile">Transactions</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/login">SignIn/Signup</NavLink>
                </nav>
            </section>
        </>
    )
}

export default Nav