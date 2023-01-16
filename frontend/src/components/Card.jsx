import React,{useEffect, useState} from 'react'

const Card = (props) => {
    return (
        <>
            <div className='row'>
            <hr/>

                <div className='col'>
                    <p>Order Total</p>
                    <p>{props.purchase.totalPurchasePrice}€</p>
                </div>
                <div className='col'>
                    <p>Order Date</p>
                    <p>{props.purchase.date}</p>
                </div>
                {props.purchase.purchaseItems.map(d => (<>
                    <p>Amount:{d.quantity}</p>
                    <p>{d.price} €</p>
                    </>
                ))}

            </div>
        </>
    )
}
export default Card
