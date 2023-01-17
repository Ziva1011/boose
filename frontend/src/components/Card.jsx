import React from 'react'
import {useNavigate, Link} from "react-router-dom"


const Card = (props) => {
    const purchase= props.purchase
    const history = useNavigate()
    const handleDetails = ()=>{
        console.log("click")
        //return history('/purchases/${props.purchase.id}', {purchase:props.purchase})

    };

    return (
        <>
            <div className='row mt-3'>
            <hr/>

                <div className='col-md-8'>
                    <h4>Purchase #{purchase.id} </h4>
                </div>
                <div className='col'>
                    <p>Purchase Date</p>
                    <p>{purchase.date}</p>
                    <Link to={`/purchases/${purchase.id}`} state={purchase}> See details</Link>
                </div>
                {purchase.purchaseItems.map(d => (<>
                    <p>Amount:{d.quantity}</p>
                    <p>{d.price} €</p>
                    </>
                ))}

            </div>
        </>
    )
}
export default Card
