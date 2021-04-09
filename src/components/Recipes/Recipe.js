import './Recipe.css';

import {
    Button,
    ButtonGroup,
    ButtonToolbar,
    Card,
    Col,
    Collapse,
    Form,
} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import {
    setIdItemDelete,
    showModalDelete,
    updateRecipe,
} from '../../redux/actions/recipeActions';
import { useDispatch, useSelector } from 'react-redux';

import { Formik } from 'formik';
import { VALIDATION_RECIPE } from '../../redux/constants/recipeConstants';

const Recipe = ({ recipe }) => {
    const dispatch = useDispatch();
    const themeSettings = useSelector((state) => state.theme.settings);

    const [theme, setTheme] = useState(themeSettings);
    const [isEdit, setIsEdit] = useState(false);
    const [item, setItem] = useState(recipe);

    useEffect(() => {
        setTheme(themeSettings);
    }, [themeSettings]);
    
    useEffect(() => {
        setItem(recipe);
    }, [setItem, recipe]);

    const handleShowEdit = (event) => {
        setIsEdit(true);
    };
    const handleShowView = () => {
        setItem({ ...recipe });
        setIsEdit(false);
    };
    const handleShowDelete = (event) => {
        event.preventDefault();

        dispatch(setIdItemDelete(item.id));
        dispatch(showModalDelete(true));
    };

    return (
        <Col xs={12} md={6} lg={4} className="mt-3" id={`recipe_${item.id}`}>
            <Card border="info">
                <Formik
                    validationSchema={VALIDATION_RECIPE}
                    initialValues={item}
                    onSubmit={(values, { setSubmitting }) => {
                        dispatch(updateRecipe(values));
                        setIsEdit(false);
                        setSubmitting(false);
                    }}
                >
                    {({ handleSubmit, handleChange, values, errors }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <div className="card-img-wrap">
                                <Card.Img variant="top" src={item.imageUrl} />
                            </div>

                            <Card.Body>
                                <Collapse in={isEdit}>
                                    <Form.Group controlId="imageUrl">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter image url"
                                            name="imageUrl"
                                            value={values.imageUrl}
                                            onChange={handleChange}
                                            isInvalid={!!errors.imageUrl}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.imageUrl}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Collapse>

                                <Collapse in={!isEdit}>
                                    <Card.Title>{item.name}</Card.Title>
                                </Collapse>
                                <Collapse in={isEdit}>
                                    <Form.Group controlId="name">
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
                                </Collapse>

                                <Collapse in={!isEdit}>
                                    <Card.Subtitle>
                                        Price: ${item.price}
                                    </Card.Subtitle>
                                </Collapse>
                                <Collapse in={isEdit}>
                                    <Form.Group controlId="price">
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
                                </Collapse>

                                <Collapse in={!isEdit}>
                                    <Card.Text>{item.info}</Card.Text>
                                </Collapse>
                                <Collapse in={isEdit}>
                                    <Form.Group controlId="info">
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
                                </Collapse>
                            </Card.Body>

                            <Card.Footer>
                                <ButtonToolbar
                                    className="flex-column"
                                    aria-label="Toolbar with Button groups"
                                >
                                    <Collapse in={!isEdit}>
                                        <ButtonGroup
                                            className="justify-content-between"
                                            aria-label="View page Button group"
                                        >
                                            <Button
                                                onClick={handleShowEdit}
                                                variant="light"
                                                size="lg"
                                                aria-label="Edit"
                                                block
                                            >
                                                Edit
                                            </Button>
                                        </ButtonGroup>
                                    </Collapse>

                                    <Collapse in={isEdit}>
                                        <ButtonGroup
                                            className="justify-content-between"
                                            aria-label="Edit page Button group"
                                        >
                                            <Button
                                                onClick={handleShowDelete}
                                                variant="danger"
                                                size="lg"
                                                aria-label="Delete"
                                            >
                                                {theme.trashIcon}
                                            </Button>
                                            <Button
                                                variant="secondary"
                                                type="submit"
                                                size="lg"
                                                aria-label="Upgrate"
                                            >
                                                Upgrate
                                            </Button>
                                            <Button
                                                onClick={handleShowView}
                                                variant="light"
                                                className="close btn-close"
                                                size="lg"
                                                aria-label="Close"
                                            >
                                                <span aria-hidden="true">
                                                    &times;
                                                </span>
                                            </Button>
                                        </ButtonGroup>
                                    </Collapse>
                                </ButtonToolbar>
                            </Card.Footer>
                        </Form>
                    )}
                </Formik>
            </Card>
        </Col>
    );
};

export default Recipe;
