import React from 'react'
import { Link } from 'react-router-dom'
import SingleBlogPage from './SingleBlogPage'




const DetailPage = () => {
    const mystyle={
        color: 'red',
        backgroundColor: "blue",
        borderRadius:'8px'
    }
  return (
    <div className='main'>
         <SingleBlogPage/>
        <Link to='/'><button style={{mystyle}} id="btn">Go Home</button></Link>
    </div>
  )
}

export default DetailPage