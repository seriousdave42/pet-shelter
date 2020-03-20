import React, { useState, useEffect } from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import PetForm from '../components/PetForm';

const Update = (props) => {
    const { id } = props;
    const [pet, setPet] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const [badID, setBadID] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + id)
            .then(res => {
                setPet({...res.data.pet});
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
                setBadID(true)
            });
    }, [id])

    const updatePet = pet => {
        axios.put("http://localhost:8000/api/pet/"+id, pet)
            .then(res=> {
                console.log("Response: ", res);
                navigate("/pet/"+id);
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            });
    }

    return (
        <div>
            {badID &&
                <div>
                    <h3>We're sorry, this pet page doesn't exist</h3>
                    <Link to="/">Home</Link>
                </div>
            }
            {loaded && 
                <div>
                    <h2>Edit {pet.petName}</h2>
                    <PetForm initialPet={pet} petHandler={updatePet} submit="Edit " errors={errors}/>
                    <hr />
                    <Link to="/">Back to home</Link>
                </div>
            }
        </div>
    )
}

export default Update;  
