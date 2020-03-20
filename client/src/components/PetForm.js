import React, { useState } from 'react';

const AuthorForm = (props) => {

    const {initialPet, petHandler, errors, submit} = props;
    const [pet, setPet] = useState(initialPet);

    const onChangeHandler = e => {
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        });
    }
    
    const onSubmitHandler = e => {
        e.preventDefault();
        petHandler(pet);
    };

    return (
        <div>
            <form className="col-4 mx-auto" onSubmit={onSubmitHandler}>
                {errors.map((error, i) => <p key={i} className="text-danger">{error}</p>)}
                <div className="form-group">
                    <label>Pet Name </label>
                    <input type="text" className="form-control" name="petName" value={pet.petName} onChange={e=>onChangeHandler(e)}></input>
                </div>
                <div className="form-group">
                    <label>Pet Type </label>
                    <input type="text" className="form-control" name="petType" value={pet.petType} onChange={e=>onChangeHandler(e)}></input>
                </div>
                <div className="form-group">
                    <label>Pet Description</label>
                    <input type="text" className="form-control" name="petDesc" value={pet.petDesc} onChange={e=>onChangeHandler(e)}></input>
                </div>
                <div className="form-group">
                    <label>Skill 1 (optional)</label>
                    <input type="text" className="form-control" name="petSkill1" value={pet.petSkill1} onChange={e=>onChangeHandler(e)}></input>
                </div>
                <div className="form-group">
                    <label>Skill 2 (optional)</label>
                    <input type="text" className="form-control" name="petSkill2" value={pet.petSkill2} onChange={e=>onChangeHandler(e)}></input>
                </div>
                <div className="form-group">
                    <label>Skill 3 (optional)</label>
                    <input type="text" className="form-control" name="petSkill3" value={pet.petSkill3} onChange={e=>onChangeHandler(e)}></input>
                </div>
                <button type="submit" className="btn btn-primary">{`${submit}${pet.petName}`}</button>
            </form>
        </div>
    )
}

export default AuthorForm;