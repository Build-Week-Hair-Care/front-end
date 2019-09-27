import React from "react";
import { Link } from 'react-router-dom';

export default function Map (props) {
    console.log(props)
    const logout = () =>{
        window.localStorage.clear()
        props.history.push("/")
    }
    return (
        <div className="mister">
            <div className="steal-your-code">
            <Link to="/">Home</Link>    
            <a href="https://bw-haircare.netlify.com/#"> About </a>
            
            {localStorage.getItem("token")
                  ?<Link onClick={logout}> Logout</Link>
                  :<Link to="/login">Login</Link>}
                <Link to="/signup">SignUp</Link>
            </div>
        </div>
    );
}