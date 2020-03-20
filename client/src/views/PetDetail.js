import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';
import AdoptButton from '../components/AdoptButton';

const PetDetail = ({id}) => {

    const [pet, setPet] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [badID, setBadID] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + id)
            .then(res => {
                setPet(res.data.pet)
                setLoaded(true)
            })
            .catch(err => {
                console.log(err);
                setBadID(true)
            });
    }, [id])

    return (
        <div>
            {badID &&
                <div>
                    <h3>We're sorry, this pet page doesn't exist</h3>
                    <Link to="/">Home</Link>
                </div>
            }
            {!badID && loaded &&
            <div>
                <h2>Details about {pet.petName}</h2>
                <AdoptButton petID={pet._id} petName={pet.petName} successCallback={() => navigate("/")}/>
                <hr />
                <table className="table col-5 mx-auto">
                    <tr>
                        <td>Pet type:</td>
                        <td>{pet.petType}</td>
                    </tr>
                    <tr>
                        <td>Pet description:</td>
                        <td>{pet.petDesc}</td>
                    </tr>
                    <tr>
                        <td>Skills:</td>
                        <td>    
                            <p>{pet.petSkill1}</p>
                            <p>{pet.petSkill2}</p>
                            <p>{pet.petSkill3}</p>
                        </td>
                    </tr>
                </table>
                <hr />
                <Link to={`/pet/${pet._id}/edit`}>Edit</Link>
                <span> | </span>
                <Link to="/">Back to Home</Link>
            </div>}
        </div>
    )
}

export default PetDetail;