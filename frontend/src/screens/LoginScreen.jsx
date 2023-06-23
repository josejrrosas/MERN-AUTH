import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
//useDispatch to dispatch action, use selector to select from global state
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
/*after we hit our backend, we get our user data we then 
want to call setCredentials*/
import { setCredentials } from "../slices/authSlice";
import {toast} from 'react-toastify'
import Loader from "../components/Loader";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //to call mutation, isLoading handles loading state for us, could get error if we want
  const [login, { isLoading }] = useLoginMutation();

  //we want auth bc thats what has our user info
  const { userInfo } = useSelector((state) => state.auth);
 
  /*if there is a user info that means we're logged in
  so i want to redirect to homepage if logged in*/
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      /*calling login above which is calling login from our mutation
      login takes in data of email and password coming from the form
      unwrap will unwrap the promise it returns*/
      const res = await login({email, password}).unwrap();
       /* we now want to call setCredentials to set it to local
       storage and our state */
      dispatch(setCredentials({...res}))
      //then we navigate to homescreen
      navigate('/')
    } catch (err) {
      //if bad email responds with 'invalid email or password'
      toast.error(err?.data?.message || err.error)
    }
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {isLoading && <Loader/>}

        <Button type="submit" variant="primary" className="mt-3">
          Sign In
        </Button>

        <Row className="py-3">
          <Col>
            New Customer? <Link to="register">Register</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default LoginScreen;
