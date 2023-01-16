import {useLocation, Link} from "react-router-dom"
import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Card from "./Card"

const Purchase = (props) => {
    const [purchases,setPurchases] = useState([])
    const addPurchase=(value)=> {
        setPurchases([...value]);
    }

    useEffect(() => {
        const userId ={
            token: sessionStorage.getItem("token")
        };

        console.log(userId)
        axios.post("http://localhost:3000/purchases",  userId)
        .then(res=>{
            if (res.data){
                console.log(res.data)
                addPurchase(res.data.purchases)
                //sessionStorage.clear();
            }
            else{
                alert("No purchases found") 
                //sessionStorage.clear();  
            }
        }
        )
        .catch(function (error) {
            console.log(error); 
            sessionStorage.clear() 
            return <Link to="/login"/>
        });
      }, []);

      
    const location = useLocation();
    return (
        <>
            <div className="content">
                <h2 className="mt-3 font-size-h2">My purchases </h2>
                {purchases.map(d => (<Card  purchase={d}/>))}

            </div>

        </>
    )
}
export default Purchase
