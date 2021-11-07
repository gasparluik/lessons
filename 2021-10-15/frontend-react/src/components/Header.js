import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import "./Header.css"


function Header(){
    return(
        <div className="navbar">
        <div className="logo">
            <Link to="/">
                <img src="circuit.png" width="70px" height="70px" alt="website logo"/>
            </Link>
        </div>

            <div className="navbar-btns">
                <div >
                    <Link to="/posts"><Button className="btns">Send post</Button></Link>
                    <Link to="/showposts"><Button className="btns">Show posts</Button></Link>
                    <Link to="/login"><Button className="btns">Login</Button></Link>
                    <Link to="/signup"><Button className="btns">Sign-up</Button></Link>
                </div>
            </div>

        </div>
    )
}

export default Header