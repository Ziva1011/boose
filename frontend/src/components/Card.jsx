import React from 'react'
import {Link} from "react-router-dom"
import { AiOutlineEye } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const Card = (props) => {
    const purchase= props.purchase

    return (
        <tr >
            <td><Link to={`/purchases/${purchase.id}`} state={purchase} className='view-icon'> <AiOutlineEye /></Link></td>

            <td>Purchase #{purchase.id} </td>
            <td>{purchase.date}</td>
            <td><BsFillCheckCircleFill className="status-icon"/></td>
        </tr>
    )
}
export default Card
