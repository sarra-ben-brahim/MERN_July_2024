import React, { useState } from 'react'
import axios from "axios"
import { redirect, useNavigate } from 'react-router-dom'

const Create = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")


    const submitHandler = (e) => {
        e.preventDefault()
        console.log("cool")
        const tempObj = {
            title,
            price,
            description
        }
        axios.post("http://localhost:8000/api/products", tempObj)
            .then(res => {
                console.log("✅✅✅✅✅✅✅✅✅✅", res.data)
                navigate("/")
            })
            .catch(err => {
                console.log(err)

    }

    return (
        <div>
            <h1>Create Product</h1>
            <form onSubmit={submitHandler}>
                <div>
                    title:
                    <input value={title} type="text" onChange={e => { setTitle(e.target.value) }} />
                </div>
                <div>
                    Price:
                    <input value={price} type="number" onChange={e => { setPrice(e.target.value) }} />
                </div>
                <div>
                    Description :
                    <input value={description} type="text" onChange={e => { setDescription(e.target.value) }} />
                </div>
                <input type="submit" value="Add Product" />
            </form>

        </div>
    )
}

export default Create
