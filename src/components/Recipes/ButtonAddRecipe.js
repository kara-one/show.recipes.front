import { Button } from 'react-bootstrap';
import React from 'react';
import { showModalCreate } from '../../redux/actions/recipeActions';
import { useDispatch } from 'react-redux';

const ButtonAddRecipe = () => {
    const dispatch = useDispatch();

    const handleShowModal = (event) => {
        event.preventDefault();

        dispatch(showModalCreate(true));
    };

    return (
        <Button className="btn btn-danger btn-add" onClick={handleShowModal}>
            RECIPE ADD
        </Button>
    );
};

export default ButtonAddRecipe;
