import React from "react";
import {NavigationStyle, StyledLink} from './Styles';

export default function Navigation (props) {
    console.log(props)
    const logout = () =>{
        window.localStorage.clear()
        props.history.push("/")
    }
    return (
        <NavigationStyle>
            <div>
                <StyledLink to="/">Home</StyledLink>
            </div>
            <div>
                {localStorage.getItem("token")
                  ?<StyledLink onClick={logout}> Logout</StyledLink>
                  :<StyledLink to="/login">Login</StyledLink>}
            </div>
            <div>
                <StyledLink to="/signup">SignUp</StyledLink>
            </div>
            <div>
                <StyledLink to="/search">Search</StyledLink>
            </div>
        </NavigationStyle>
    );
}