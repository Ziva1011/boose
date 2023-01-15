import {useLocation} from "react-router-dom"
import React,{useEffect, useState} from 'react'
import axios from 'axios';

const Purchase = (props) => {
    const [purchases,setPurchases] = useState([])
    const addPurchase=(value)=> {
        setPurchases([...value]);
    }

    useEffect(() => {
        const userId = {userId: location.state};
        console.log(userId)
        axios.post("http://localhost:3000/purchases",  userId)
        .then(res=>{
            if (res.data){
                console.log(res.data)
                addPurchase(res.data.purchases)
            }
            else{
                alert("No purchases found")    
            }
        }
        )
        .catch(function (error) {
            console.log(error);  
        });
      }, []);

      
    const location = useLocation();
    return (
        <>
            <p> {purchases.length} </p> 
            {purchases.map(d => (<li key={d.id}>{d.date}</li>))}
            <h1>These are my purchases </h1>
        </>
    )
}
export default Purchase
