import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { registerHandler } from '../actions';
import { Button, Checkbox, Form } from 'semantic-ui-react'

class SignUp extends React.Component{
    state = {
        credentials: {
            name: '',
            username: '',
            password: '',
            location: '',
            specialty: '',
            bio: '',
            email_address: ''

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
        this.props.registerHandler(this.state.credentials)
        console.log(this.state.credentials)
       
        // .then(() =>{
            this.props.history.push("/login")
        // })
        
    }

    render(){
        return(
            <div className="boss-container">
            <div className="tooeasy">
                <Form onSubmit={this.submitForm}>
                    <h2>Register</h2>
                    <Form.Field>
                    <label>Name</label>
                    <input 
                    value={this.state.credentials.name}
                    name='name'
                    onChange={this.inputHandler}
                    />
                    </Form.Field>
                    <Form.Field>
                    <label>Username</label>
                    <input 
                    value={this.state.credentials.username}
                    name='username'
                    onChange={this.inputHandler}
                    />
                    </Form.Field>
                    <Form.Field>
                    <label>Password</label>
                    <input 
                    type='password'
                    value={this.state.credentials.password}
                    name='password'
                    onChange={this.inputHandler}
                    />
                    </Form.Field>
                    <Form.Field>
                    <label>Location</label>
                    <input 
                    type='text'
                    value={this.state.credentials.location}
                    name='location'
                    onChange={this.inputHandler}
                    />
                    </Form.Field>
                    <Form.Field>
                    <label>Specialty</label>
                    <input 
                    type='text'
                    value={this.state.credentials.specialty}
                    name='specialty'
                    onChange={this.inputHandler}
                    />
                    </Form.Field>
                    <Form.Field>
                    <label>Bio</label>
                    <input 
                    type='text'
                    value={this.state.credentials.bio}
                    name='bio'
                    onChange={this.inputHandler}
                    />
                    </Form.Field>
                    <Form.Field>
                    <label>Email Address</label>
                    <input 
                    type='email'
                    value={this.state.credentials.email_address}
                    name='email_address'
                    onChange={this.inputHandler}
                    />
                    </Form.Field>
                    <Button primary>Submit</Button>
                </Form>
            </div>
            <img src="https://bw-haircare.netlify.com/img/long-hair.jpg"/>
            </div>
        )
    }
}

export default connect(null, { registerHandler })(SignUp);

// import React from "react";
// import { Formik, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import {SignUpStyle, StyledField , StyledButton} from './Styles';
// import { connect } from 'react-redux';

// const userForm = {
//     name: '',
//     username: '',
//     email: '',
//     password: '',
//     location: '',
//     service: 'customer',
//     terms: false,
// }
// const SignUpPage = (props) => {
//     const addUser = (formValues, actions) => {
//         const userToSubmit = {
//             name: formValues.name,
//             username: formValues.username,
//             email: formValues.email,
//             password: formValues.password,
//             location: formValues.location,
//             service: formValues.service,
//         };

//         console.log(userToSubmit, props);
//         actions.resetForm();
//     }

//     return (
//         <div>
//             <NewUserForm onSubmitButton={addUser}/>
//         </div>
//     );
// }

// const validateUser = (formValue) => {
//     const errors = {};

//     if (!formValue.name) {
//         errors.name = 'Name is required!';
//     }

//     if (!formValue.username) {
//         errors.username = 'Username is required!'
//     }

//     if(!formValue.email) {
//         errors.email = 'Email is required!';  
//     }

//     if (!formValue.password) {
//         errors.password = 'Password is required!';
//     }

//     if (!formValue.location) {
//         errors.location = 'Location is required!';
//     } else if (formValue.location.length < 2) {
//         errors.location = 'Oops! That is short!';
//     }

//     if (!formValue.terms){
//         errors.terms = "Read and accept terms"
//     }

//     return errors;
// }

// const userValidation = yup.object().shape({
//     name: yup.string().required('Use correct name!'),
//     username: yup.string().required('Use correct username!'),
//     email: yup.string().required('Enter valid email!').email("Enter a valid email containing @"),
//     password: yup.string().required('Input correct password!'),
//     location: yup.string().required('Location is required!'),
//     terms: yup.boolean().required("box is required")
// })

// function NewUserForm({onSubmitButton}) {
//     return(
//         <Formik
//             validationSchema={userValidation}
//             validate={validateUser}
//             initialValues={userForm}
//             onSubmit={onSubmitButton}
//             render={props => {
//                 return (
//                     <SignUpStyle>
//                         <h3>Create an account (Customer)</h3>
//                         <label>
//                             Name
//                             <StyledField name='name' type='text' placeholder='Enter your name' />
//                             <ErrorMessage name='name' component='div' />
//                         </label>
//                         <label>
//                             Username
//                             <StyledField name='username' type='username' placeholder='Enter your Name' />
//                             <ErrorMessage name='username' component='div' />
//                         </label>
//                         <label>
//                             Email
//                             <StyledField name='email' type='email' placeholder='Enter your Email' />
//                             <ErrorMessage name='email' component='div' />
//                         </label>
//                         <label>
//                             Password
//                             <StyledField name='password' type='password' placeholder='Enter your Password' />
//                             <ErrorMessage name='password' component='div' />
//                         </label>
//                         <label>
//                             Location
//                             <StyledField name='location' type='text' placeholder='Enter your Location' />
//                             <ErrorMessage name='location' component='div' />
//                         </label>
//                         {/* <label>
//                             Type of service
//                             <StyledField component="select" name="service">
//                                 <option value="customer">Customer</option>
//                                 <option value="stylist">Stylist</option>
//                             </StyledField>
//                             <ErrorMessage name='service' component='div' />
//                         </label> */}
//                         <label>
//                             Terms and Agreement
//                             <StyledField name='terms' type='checkbox' />
//                             <ErrorMessage name='terms' component='div' />
//                         </label>
//                         <StyledButton type='submit'>Sign Up</StyledButton>
//                     </SignUpStyle>
//                 )
//             }}
//         />
//     );
// }
// const fakeFunction = () => {
//     console.log("chicken");
// }
// export default connect( null, {fakeFunction} )(NewUserForm)

