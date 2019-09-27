import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Field } from 'formik';

export const NavigationStyle = styled.div`
    display: flex;
    justify-content: flex-end;
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #604d53;
    font-family: helvetica;
    margin-right: 2rem;
`

export const LoginStyle = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    border: .2rem solid ;
    padding: 2rem 0;
    border-radius: 2rem;
    margin: 0 auto;
    font-family: 'Oswald', sans-serif;
`

export const SignUpStyle = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    border: .2rem solid ;
    padding: 2rem 0;
    border-radius: 2rem;
    margin: 0 auto;
    font-family: 'Oswald', sans-serif;
`

export const StyledField = styled(Field)`
    width: 45%;
    padding: .7rem;
    margin: 1rem ;
`

export const StyledButton = styled.button`
   width: 20%;
   padding: 1.2rem;
   border-radius: 2rem;
   background:  #9da3a4;
   color: #604d53;
   margin: 0 auto;
   align-content: center;
`

export const StyledHeader = styled.h1`
    font-family: 'Amatic SC', cursive !important;
    font-size: 4rem;
`

export const ParentStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const StylistStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 2.5rem;
    width: 35%;
    border: .2rem solid ;
    border-radius: 2rem ;
    color: blue;
    padding: 2rem;
    font-family: 'Oswald', sans-serif;

    &:hover{
        border: .2rem solid green;
        border-radius: 2rem;
        color: black;
    }

   img{
       border-radius: 5rem;
       width: 100%;
   }

    h2{
        color: black;
        font-family: 'Amatic SC', cursive;
        font-size: 3rem;

        &:hover{
            color: green;
            font-size: 1.6rem;
        }
    }
`
export const SearchStyle = styled(Field)`
    padding: 1rem;
    font-family: 'Oswald', sans-serif;
`

export const SearchButton = styled.button`
   padding: .7rem;
   border-radius: 2rem;
   background:  #9da3a4;
   color: #604d53;
   margin-left: 1rem;
   align-content: center;
`