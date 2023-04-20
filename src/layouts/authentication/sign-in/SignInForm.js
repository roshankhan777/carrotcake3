import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Feedback from 'react-bootstrap/Feedback'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

 
 // toast-configuration method,
 // it is compulsory method.


const SignInForm = () => {
    

    const url = 'http://localhost:3001/signup';

    const price_id = useParams();
    const planid = price_id.id;
    //console.log(planid);
    const navigate = useNavigate();

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };

    const [inputData, setInputData] = useState({

        "first_name": "",
        "last_name": "",
        "email": "",
        "password": "",
        "plan_id": planid,
        "address": "",
        "postal_code": "",
        "city": "",
        "state": "",
        "country": "",
    });

    const inputHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        // dynamic key and value
        setInputData({ ...inputData, [name]: value });
        //console.log(inputData);
    }

    const formSubmit = (event) => {
        event.preventDefault();
        axios.post(url, inputData).then((res) => {
            toast.success('Your data has been submitted successfully', {
                position: toast.POSITION.TOP_RIGHT
            });
            navigate("/dashboard");
        }).catch((error) => {
            //console.log(error.response.data.message);
            const errormessage= error.response.data.message;
            toast.error( errormessage ,{
                position: toast.POSITION.TOP_RIGHT
            });
            
        });
    }

    return (
        
        <Container>
            <h2 className='align-items-md-center'>Sign Up </h2>
            
            <Form noValidate validated={validated} className='mt-5' method='post' onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" name="first_name" onChange={inputHandler} required />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" name="last_name" onChange={inputHandler} required />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" name="email" onChange={inputHandler} required />
                    <Form.Control.Feedback type="invalid">
              Please provide a valid email address.
            </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={inputHandler} required/>
                    <Form.Control.Feedback type="invalid">
            Please provide a valid password with at least one symbol and one capital letter.
          </Form.Control.Feedback>
                </Form.Group>

                 <Form.Group className="mb-3" controlId="formPlanid">
                    {/* <Form.Label>Plan Id</Form.Label> */}
                    <Form.Control type="hidden" placeholder="" name="plan_id" onChange={inputHandler} value={planid} readonly required/>
                </Form.Group> 

                <Form.Group className="mb-3" controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Address" name="address" onChange={inputHandler} required />
                    <Form.Control.Feedback type="invalid">
            Please provide a valid address.
          </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPostalCode">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type="text" placeholder="Postal Code" name="postal_code" onChange={inputHandler} required />
                    <Form.Control.Feedback type="invalid">
            Please provide a valid Postal Code.
          </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCity">
                    <Form.Label>City </Form.Label>
                    <Form.Control type="text" placeholder="City" name="city" onChange={inputHandler} required />
                    <Form.Control.Feedback type="invalid">
            Please provide a valid City.
          </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formState">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="State" name="state" onChange={inputHandler} required />
                    <Form.Control.Feedback type="invalid">
            Please provide a valid State.
          </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="Country" name="country" onChange={inputHandler} required />
                    <Form.Control.Feedback type="invalid">
            Please provide a valid Country.
          </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" > Submit </Button>
                <ToastContainer />
            </Form>
        </Container>

        
    )
}

export default SignInForm