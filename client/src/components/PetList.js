import React from 'react';
import { Link } from '@reach/router';

const PetList = props => {

    const {pets} = props;

    return (
        <div>
            <table className="col-8 mx-auto table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet, i) => 
                        <tr key={i}>
                            <td>{pet.petName}</td>
                            <td>{pet.petType}</td>
                            <td>
                                <Link to={`/pet/${pet._id}`}>Details</Link>
                                <span> | </span>
                                <Link to={`/pet/${pet._id}/edit`}>Edit</Link>
                            </td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )

}

export default PetList;
