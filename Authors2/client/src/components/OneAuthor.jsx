import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


const OneAuthor = () => {

    const { id } = useParams()
    const [oneAuthor, setOneAuthor] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res.data)
                setOneAuthor(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    return (
        <div>
            <Link to="/authors">Home 🏠</Link>
            <br />
            <br />
            <div key={oneAuthor._id} className='card col-lg-4 col-md-4 col-sm-4 container justify-content-center'>
                <div className='card-body'>
                    <h3>{oneAuthor.name}</h3>
                </div>
            </div>
        </div>
    )
}

export default OneAuthor