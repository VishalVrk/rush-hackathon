import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLink = () =>{
    return (
        <ul className="right">
            <li><NavLink to='/signout'>Signup</NavLink></li>
            <li><NavLink to='/signin'>Login </NavLink></li>
              </ul>
    )
}

export default SignedOutLink;