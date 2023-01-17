import {useNavigate} from "react-router-dom"
import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Card from "./Card"

const Purchases = (props) => {
    const [purchases,setPurchases] = useState([])
    const history = useNavigate()

    const addPurchase=(value)=> {
        setPurchases([...value]);
    }

    useEffect(() => {
        const userId ={
            token: sessionStorage.getItem("token")
        };
        
       console.log(sessionStorage.length)
        axios.post('http://localhost:3000/purchases',  userId)
        .then(res=>{
            if (res.data){
                console.log("Success")
                console.log(res.data)
                addPurchase(res.data.purchases)
            }
            else{
                alert("No purchases found") 
                sessionStorage.clear() 
                history("/login")
            }
        }
        )
        .catch(function (error) {
            console.log(error); 
            sessionStorage.clear() 
            history("/login")
        });
      }, []);

      
    return (
        <>
            <div className="content">
                <h2 className="mt-3 font-size-h2 mb-3">My purchases </h2>
                {purchases.map(d => (<Card  purchase={d}/>))}

            </div>

        </>
    )
}
export default Purchases
