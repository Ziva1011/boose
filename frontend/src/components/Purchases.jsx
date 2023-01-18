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
        
        axios.post('http://localhost:3000/purchases',  userId)
        .then(res=>{
            if (res.data){
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

                <div className="row  text-center">
                    <div className="col-6 ">
                    <div className="card ps-4 mx-auto">
                        <p>Number of Purchases</p>
                        <h3 className="text-center">2</h3>
                    </div>
                    </div>
                    <div className="col-6">
                    <div className="card ps-4 mx-auto">
                        <p>Asset value</p>

                        <div className="d-inline-flex">
                            <h3>2 </h3>
                            <p className=" ms-4 text-stats">+3.3%</p>
                        </div>

                        
                    </div>
                    </div>
                </div>
                <table class=" mt-4 table table-purchases table-hover text-center table-borderless">
                    <thead>
                        <tr>
                            <th></th>

                            <th>Purchase</th>
                            <th>Purchase Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchases.map(d => (<Card  purchase={d}/>))}
                        
                    </tbody>
                </table>

            </div>

        </>
    )
}
export default Purchases
