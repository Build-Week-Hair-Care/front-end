import React from 'react';
import { connect } from 'react-redux';
import { Input, Button } from "semantic-ui-react";
import { loginHandler } from '../actions';

class Login extends React.Component{
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    inputHandler = e => {
        this.setState({ 
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    submitForm = e => {
        e.preventDefault();
        this.props.loginHandler(this.state.credentials)
        .then(() => {
            this.props.history.push("/stylist/profile");
        });
    }

    render(){
        return(
            
            <div>
        <form onSubmit={this.submitForm}>
          <Input
            type="text"
            name="username"
            placeholder="Enter username"
            value={this.state.credentials.username}
            onChange={this.inputHandler}
          />
          <Input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={this.state.credentials.password}
            onChange={this.inputHandler}
          />
          <Button>Sign Up</Button>
        </form>
    </div>
        )
    }
}


export default connect(null, { loginHandler })(Login);

// import React from "react";
// import { Formik, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import {LoginStyle, StyledField , StyledButton} from './Styles';


// const userForm = {
//     username: '',
//     password: '',
// }

// export default function LoginPage () {
//     const loginInUser = (formValues, actions) => {
//         const userToLogin = {
//             username: formValues.username,
//             password: formValues.password
//         };

//         console.log(userToLogin);
//         actions.resetForm();
//     }

//     return (
//         <div>
//             <NewUserForm onLoginButton={loginInUser}/>
//         </div>
//     );
// }

// const validateUser = (formValue) => {
//     const errors = {};

//     if (!formValue.username) {
//         errors.username = 'Name is reguired!';
//     }

//     if (!formValue.password) {
//         errors.password = 'Username is required!'
//     }
// }

// const userValidation = yup.object().shape({
//     username: yup.string().required('Use correct username!'),
//     password: yup.string().required('Input correct password!')
// })

// function NewUserForm({onLoginButton}) {
//     return(
//         <Formik
//             validationSchema={userValidation}
//             validate={validateUser}
//             initialValues={userForm}
//             onSubmit={onLoginButton}
//             render={props => {
//                 return (
//                     <LoginStyle>
//                         <label>
//                            <div>Username</div>
//                             <StyledField name='username' type='username' placeholder='Enter your name' />
//                             <ErrorMessage name='username' component='div' />
//                         </label>
//                         <label>
//                             <div>Password</div>
//                             <StyledField name='password' type='password' placeholder='Enter your Name' />
//                             <ErrorMessage name='password' component='div' />
//                         </label>
//                         <StyledButton type='submit'>Login</StyledButton>
//                     </LoginStyle>
//                 )
//             }}
//         />
//     );
// }

// // export default connect( null, {actionCreator} )(NewUserForm)