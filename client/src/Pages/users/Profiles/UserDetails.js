import React from 'react'

const UserDetails = () => {
    return (
        <>
            <table id='userDetails'>
                <tr>
                    <td>Name</td>
                    <td>Shashank </td>
                </tr>
                <tr>
                    <td>E-mail</td>
                    <td>Shashank@gmail.com</td>
                </tr>
                <tr>
                    <td>Contact No.</td>
                    <td>9856253178</td>
                </tr>

            </table>
            <button id='editprofile'>Edit Profile</button>
        </>
    )
}

export default UserDetails