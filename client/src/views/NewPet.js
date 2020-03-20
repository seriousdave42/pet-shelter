import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetForm from '../components/PetForm';
import {navigate, Link} from '@reach/router';

const NewPet = () => {

    const [errors, setErrors] = useState([]);

    const newPet = pet => {
        axios.post("http://localhost:8000/api/pet", pet)
            .then(res => {
                navigate("/")
            })
            .catch(err => {
                console.log(err.response);
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            });
    }

    return(
        <div>
            <h2>Know a pet needing a home?</h2>
            <hr />
            <PetForm initialPet={{
                petName: "",
                petType: "",
                petDesc: "",
                petSkill1: "",
                petSkill2: "",
                petSkill3: ""
            }} petHandler={newPet} submit="Add " errors={errors} />
            <hr />
            <Link to="/">Back to home</Link>
        </div>
    )
}

export default NewPet;