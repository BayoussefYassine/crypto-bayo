import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className='pagenotfound'>
            <div>
            <h1>404 Oops! Something went wrong!</h1>
            <Link to='/'><div class="btn">Return to The Home Page!</div></Link>
            </div>
            
        </div>
    )
}

export default PageNotFound
