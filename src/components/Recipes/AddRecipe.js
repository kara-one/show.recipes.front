import { Button, Form, Modal } from 'react-bootstrap';
import {
    EMPTY_RECIPE,
    VALIDATION_RECIPE,
} from '../../redux/constants/recipeConstants';
import React, { useEffect, useState } from 'react';
import { addRecipe, showModalCreate } from '../../redux/actions/recipeActions';
import { useDispatch, useSelector } from 'react-redux';

import { Formik } from 'formik';

const AddRecipe = () => {
    const dispatch = useDispatch();

    const stateModalCreate = useSelector(
        (state) => state.recipes.stateModalCreate,
    );

    const [show, setShow] = useState(stateModalCreate);
    let [item, setItem] = useState(EMPTY_RECIPE);

    useEffect(() => {
        setShow(stateModalCreate);
    }, [setShow, stateModalCreate]);

    const handleClose = () => {
        dispatch(showModalCreate(false));
        setShow(false);
        setItem({ ...EMPTY_RECIPE });
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Formik
                    validationSchema={VALIDATION_RECIPE}
                    initialValues={item}
                    onSubmit={(values, { setSubmitting }) => {
                        dispatch(addRecipe(values));
                        handleClose();
                        setSubmitting(false);
                    }}
                >
                    {({ handleSubmit, handleChange, values, errors }) => (
                        <Form onSubmit={handleSubmit}>
                            <Modal.Header closeButton>
                                <Modal.Title>Add Item</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form.Group controlId="imageUrl">
                                    <Form.Label>Image URL</Form.Label>
                                    <Form.Control
                                        type="imageUrl"
                                        placeholder="Enter image url"
                                        name="imageUrl"
                                        value={values.imageUrl}
                                        onChange={handleChange}
                                        isInvalid={!!errors.imageUrl}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.imageUrl}
                                    </Form.Control.Feedback>
                                    <Form.Text className="text-muted">
                                        You must enter a valid image URL
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="name">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Title"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        isInvalid={!!errors.name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="price">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Price"
                                        name="price"
                                        value={values.price}
                                        onChange={handleChange}
                                        isInvalid={!!errors.price}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.price}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="info">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Description"
                                        name="info"
                                        value={values.info}
                                        onChange={handleChange}
                                        isInvalid={!!errors.info}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.info}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="secondary"
                                    onClick={handleClose}
                                >
                                    Close
                                </Button>
                                <Button variant="primary" type="submit">
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    );
};

export default AddRecipe;
