import React from 'react';
import axios from 'axios';

const AdoptButton = props => {

    const {petID, petName, successCallback} = props;

    const adoptPet = e => {
        axios.delete("http://localhost:8000/api/pet/"+petID)
            .then(res => successCallback())
            .catch(err => console.log(err));
    }
    
    return (
        <button className="btn btn-danger" onClick={adoptPet}>Adopt {petName}</button>
    )
        
}

export default AdoptButton