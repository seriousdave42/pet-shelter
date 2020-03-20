import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import PetList from '../components/PetList';

const Main = () => {

    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                setPets(res.data.pets);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])

    return(
        <div>
            <h2>These pets are looking for a good home</h2>
            <hr />
            {loaded && <PetList pets={pets} />}
            <hr />
            <Link to="/pet/new">Add a pet to the shelter</Link>
        </div>
    )
}

export default Main;