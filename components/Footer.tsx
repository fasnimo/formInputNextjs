import React from 'react'


const Footer = (props) => {
    // console.log(props)
    return (
       <div className='text-center'>
            <h1 className='text-left p-5'>Profile</h1>
            <ul>
                <li>Name: {props.name}</li>
                <li>Email: {props.email}</li>
                <p>Message: {props.message}</p>
            </ul>
       </div> 
    )
}

export default Footer