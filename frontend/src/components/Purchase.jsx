import React,{useEffect, useState} from 'react'
import axios from 'axios';
import {Link, useLocation} from "react-router-dom"
import {FaWineBottle} from'react-icons/fa'
import {IoMdArrowDropleft} from'react-icons/io'

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
            <div class="content">
                <Link to='/purchases' className='back-button'> <IoMdArrowDropleft/> My purchases</Link>
                <div className="purchase-card mt-3">
                    <div className='card-top'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <h2 className=" font-size-h2 "> Purchase #{purchase.id}</h2>
                            </div>
                            <div className='col ms-auto text-md-end'> 
                                <div className='row'>
                                    <div className='col-6'>
                                    </div>
                                    <div className='col-3'>
                                        <p>Purchase Date</p>
                                        <p>{purchase.date}</p>
                                    </div>
                                    <div className='col-3'>
                                        <p>Total Price</p>
                                        <p>{purchase.totalPurchasePrice}€</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='card-content'>
                        {purchase.purchaseItems.map(d => <>
                        <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-2 text-center'> <FaWineBottle className='icon-purchases'/></div>
                            <div className='col-md'>
                                <h5>Item#{d.itemId}</h5>
                                <p>Amount: {d.quantity}</p>
                                <p>Price (Unt.): {d.price} €</p>
                            </div>
                            <div className='col-md-2'>
                                <p>Price: {d.totalPurchaseItemPrice} €</p>
                            </div>
                            <hr/>
                        </div>
                        </div>
                        
                    
                    </>)}
                </div>
                </div>
            </div>

        </>
    )
}
export default Purchase
