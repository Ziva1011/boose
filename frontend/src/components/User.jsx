import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = ({setLoginUser}) => {
const history = useNavigate()

    const [user,setUser] = useState({
        email:"",
        name:"",
        lastName:"",
        birthday: new Date(),
        password: ""
    })
    const handleChange = e =>{
        const {name,value} = e.target
        setUser({
        ...user,//spread operator 
        [name]:value
    })
    }

    const login =(e)=>{
        e.preventDefault();
        console.log(user)
        axios.post("http://localhost:3000/login", user)
        .then(res=>{
            if (res.data){
                //setLoginUser(res.data.name) 
                console.log(res)
                sessionStorage.setItem("token", res.data.token);
                history("/purchases", "1")
            }
            else{
                alert("Login failed: Wrong credentials")    
            }
        }
        )
        .catch(function (error) {
            console.log(error);  
        });
    }
    return (
        <>
        
        <Form  onSubmit={login}  className="content-login mt-4" autoComplete="on">
            <h2 className='font-size-h2'>Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="string" name="name" value={user.name}  onChange={handleChange} placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="string" name="lastName" value={user.lastName}  onChange={handleChange} placeholder="Your last name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Birthday</Form.Label>
            <Form.Control type="date"  name="birthday" value={user.birthday}  onChange={handleChange} placeholder="Your birthday" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" required name="email" value={user.email}  onChange={handleChange} placeholder="Your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required name="password" value={user.password}  onChange={handleChange} placeholder="Your password" />
        </Form.Group>
        
        <Button variant="primary" type="submit"className='btn-login' >
            Submit
        </Button>
    </Form>

        </>
    )
}
export default Login

