import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"


const OneProduct = () => {

    const { id } = useParams()
    const [oneProduct, setOneProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data)
                setOneProduct(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])





    return (
        <div key={oneProduct._id}>
            <h3>{oneProduct.title}</h3>
            <p>price : {oneProduct.price}</p>
            <p>description : {oneProduct.description}</p>
        </div>
    )
}

export default OneProduct