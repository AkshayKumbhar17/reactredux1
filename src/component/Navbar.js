import React from 'react';
import {Link,NavLink, withRouter} from 'react-router-dom'

const Navbar =(props)=>{
    // setTimeout(() => {
    //     props.history.push('/contact')
    // },3000);
    // console.log(props)
        return(
            <nav className="nav-wrapper blue light-3">
            <div className="container">
        {/* When only Link is use thats time all Link are render  */}
            <Link to="/" className="brand-logo">Milk Products</Link>
                <ul className="right">
        {/* navLink is used to get proper active link render*/}
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
            </nav>
        )
    }

    // withRouter is used to get all details in props***like history***
export default withRouter(Navbar);