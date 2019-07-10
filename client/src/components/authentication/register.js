import React from 'react'
import axios from 'axios'
import {Formik, Field, Form} from 'formik'
import * as yup from 'yup'

const signUpSchema = yup.object().shape({
    username: yup.string()
            .min(5 , 'too short')
            .max(50 , 'too long')
            .required('username is Required'),
    email: yup.string()
            .email('Invalid email' )
            .required('Email is required'),
    password: yup.string()
             .min(4, 'too short')
             .max(12, 'too long')
             .required('Password is required') 

})

class Register extends React.Component{
    
        handleSubmit = (values) => {
                axios.post('http://dct-user-auth.herokuapp.com/users/register', values)
                .then(response => {
                    console.log(response.data)
                    // if(response.data.errors){
                    //     alert(response.data.message)
                    // }
                    // else{
                        this.props.history.push('/users/login')
                    // }
                })
            }       
    render(){
        
        return(
            <div>
                <h2>Register</h2>
                <Formik
                    initialValues = { {
                        username: '',
                        email: '',
                        password: '',
                    }}
                    validationSchema = {signUpSchema}
                    onSubmit = {this.handleSubmit}>
                        {({errors, touched})=>(
                            <Form>
                                Name : 
                            <Field
                                type="text"
                                name = "username"
                                placeholder="Enter your name"
                                />
                                {errors.username && touched.username ? (<div>{errors.username}</div>) : null}
                                <br/>
                                Email:
                             <Field
                                type="email"
                                name = "email"
                                placeholder = "Enter your email"
                                />
                                {errors.email && touched.email ? (<div>{errors.email}</div>) : null }
                            <br/>
                            Password: 
                            <Field 
                                type= "password"
                                name = "password"
                                placeholder = "Enter a password"                               
                                />
                                {errors.password && errors.password ? (<div>{errors.password}</div>) : null}
                            <br/>
                            <button 
                                type = "submit"
                            > Submit </button>
                        </Form>
                        )}
                    </Formik>  
            </div>

        )
    }
}

export default Register
