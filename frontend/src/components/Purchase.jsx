import React,{useEffect, useState} from 'react'
import axios from 'axios';
import {Link, useLocation} from "react-router-dom"

const Purchase = (props) => {
    const location = useLocation();
    const purchase = location.state
    const [items,setItems] = useState([])

    const addItems=(value)=> {
        setItems([value]);
    }


    useEffect(() => {
        const userId ={
            token: sessionStorage.getItem("token")
        };
        console.log(sessionStorage.length)
        axios.post('http://localhost:3000/items',  userId)
        .then(res=>{
            if (res.data){
                console.log("Login Successful")
                addItems(res.data)
            }
            else{
                alert("No items found") 
            }
        }
        )
        .catch(function (error) {
            console.log(error); 
        });
        }, []);

    return (
        <>
            <div class="container content-login">
                <Link to='/purchases'> Back</Link>
                <h2 className="mt-3 font-size-h2 mb-3"> Purchase  </h2>

                {purchase.purchaseItems.map(d => <>
                <hr/>
                <p>{items.map((el) => {if (el.id==d.itemId){return el.id}})}</p>
                <p>Item #{d.itemId}</p>
                <p></p>
                <p>Amount:{d.quantity}</p>
                <p>Price: {d.price} €</p>
                
                </>)}

            </div>

        </>
    )
}
export default Purchase
