import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"

const Main = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const deleteMe = (ProductId) => {
        axios.delete(`http://localhost:8000/api/products/${ProductId}`)
            .then(res => {
                console.log(res.data)
                setProducts(products.filter(products => products._id !== ProductId));
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div>
            {
                (products) ?
                    products.map((oneProduct) => {
                        return (
                            <div key={oneProduct._id}>
                                <Link to={"/products/" + oneProduct._id}>
                                    <h3>{oneProduct.title}</h3>
                                </Link>
                                <p>price : {oneProduct.price}</p>
                                <p>description : {oneProduct.description}</p>
                                <button onClick={() => { deleteMe(oneProduct._id) }}>Delete ❌</button>
                                <Link to={`/products/${oneProduct._id}/update`}>Update</Link >
                            </div>
                        )
                    }) : <h1>Loading ...</h1>
            }

        </div>
    )
}

export default Main