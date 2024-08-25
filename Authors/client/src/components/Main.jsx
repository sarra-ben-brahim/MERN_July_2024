import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"


const Main = () => {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log(res.data)
                setAuthors(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const deleteMe = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res.data)
                setAuthors(authors.filter(authors => authors._id !== id));
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div>
            <Link to="/authors/new">Add an Author ➕</Link>
            <h5>We have quotes by:</h5>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors?.map((oneAuthor, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <Link to={"/authors/" + oneAuthor._id}>
                                        <h3>{oneAuthor.name}</h3>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => { deleteMe(oneAuthor._id) }}>Delete ❌</button>
                                    <Link to={`/authors/${oneAuthor._id}/edit`}>
                                        <button type="button">Update</button>
                                    </Link >
                                </td>


                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );


}

export default Main