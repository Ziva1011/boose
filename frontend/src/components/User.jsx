import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Calendar from 'react-calendar';


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
                alert(res.data.message)
                setLoginUser(res.data.name) 
                console.log(res.data)
                history("/purchases", {state:res.data.id})
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
        <form onSubmit={login}>
            <label>Email</label>
            <input type="email" required name="email" value={user.email}  onChange={handleChange} placeholder="Your email"></input>
            <label>Password</label>
            <input type="password" required name="password" value={user.password}  onChange={handleChange} placeholder="Your password"></input>
            <button >Login</button>
        </form>
        {/* <Form  onSubmit={login} >
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
        
        <Button variant="primary" type="submit" >
            Submit
        </Button>
    </Form> */}

        </>
    )
}
export default Login

