import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"

const Create = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault()
        const tempObj = { name }
    
    axios.post("http://localhost:8000/api/authors/new", tempObj)
            .then(res => {
                console.log("✅✅✅✅✅✅✅✅✅✅", res.data)
                navigate("/")
            })
            .catch(err => {
                console.log("❌❌❌❌", err.response.data.errors.name.message)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })

    }

    const handleCancel = () => {
        setName("")
      };

    return (
        <div>
            <Link to="/authors">Home 🏠</Link>
            <br/>
            <br/>
            <h5>Add a new author :</h5>
            <div>
                {errors.map((err, i) => {
                    return <p key={i} style={{ color: "red" }}>{err}</p>
                })}
            </div>
            <form onSubmit={submitHandler}> 
                <div className="form-group">
                    <div className="col-lg-4 col-md-4 col-sm-4 container justify-content-center">
                        <label>Name :</label>
                        <input value={name} className="form-control" type="text" onChange={e => { setName(e.target.value) }}/>
                    </div>
                </div>
                <br/>
                <button type="button" className="btn btn-danger" onClick={handleCancel}>Cancel</button>&nbsp;
                <input type="submit" className="btn btn-success" value="Submit" />
            </form>

        </div>
    )
}

export default Create