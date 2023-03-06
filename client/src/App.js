import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

// css import
import  './App.css'



// Pages import
import Home from './Pages/Home'
import Register from './Pages/users/Register'
import Login from './Pages/users/Login1'
import About from './Pages/About/About'
import Profile from './Pages/users/Profiles/Profile'
import Nav from './components/Nav'
// import ProtectedRoute from './components/ProtectedRoute'


function App(){
    return(
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/register" element={<Register/>} />
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/profile" element={<Profile/>} />
                {/* <Route exact path="/profile" element= {< ProtectedRoute component={Profile}/>} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App