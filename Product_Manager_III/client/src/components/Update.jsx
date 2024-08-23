import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const navigate = useNavigate()

    const { id } = useParams()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
   

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data)
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault()
        const tempObj = {
            title,
            price,
            description
        }
        axios.patch(`http://localhost:8000/api/products/${id}`, tempObj)
            .then(res => {
                console.log("✅✅✅✅✅✅✅✅✅✅", res.data)
                navigate("/")
            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <div> <h1>Update Product</h1>
          
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
                <input type="submit" value="Update Product" />
            </form>
        </div>
    )
}

export default Update