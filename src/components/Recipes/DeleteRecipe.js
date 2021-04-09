import { Button, Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import {
    removeRecipe,
    setIdItemDelete,
    showModalDelete,
} from '../../redux/actions/recipeActions';
import { useDispatch, useSelector } from 'react-redux';

const DeleteRecipe = () => {
    const dispatch = useDispatch();
    
    const stateModalDelete = useSelector(
        (state) => state.recipes.stateModalDelete,
    );
    const idItemDelete = useSelector((state) => state.recipes.idItemDelete);

    const [show, setShow] = useState(stateModalDelete);

    useEffect(() => {
        setShow(stateModalDelete);
    }, [setShow, stateModalDelete]);

    const handleClose = () => {
        dispatch(showModalDelete(false));
        dispatch(setIdItemDelete(0));
        setShow(false);
    };

    const handleDelete = () => {
        dispatch(removeRecipe(idItemDelete));
        handleClose();
    };

    return (
        <>
            <Modal
                className="bg-dark"
                show={show}
                onHide={handleClose}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-warning">
                    <div className="delete-confirm__message text-danger text-center text-uppercase display-4">
                        Are you sure?
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>
                        YES
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        NO
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeleteRecipe;
