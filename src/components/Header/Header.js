import './Header.css';

import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonAddRecipe from '../Recipes/ButtonAddRecipe';
import { switchTheme } from '../../redux/actions/themeActions';

const Header = () => {
    const dispatch = useDispatch();
    const themeSettings = useSelector((state) => state.theme.settings);

    const [theme, setTheme] = useState(themeSettings);

    useEffect(() => {
        setTheme(themeSettings);
    }, [themeSettings]);

    const handleChangeTheme = (event) => {
        event.preventDefault();

        const isLight = theme.isLight;

        dispatch(switchTheme(!isLight));
    };

    return (
        <Navbar
            bg={theme.variant}
            variant={theme.variant}
            expand="sm"
            fixed="top"
            collapseOnSelect
        >
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={theme.logo}
                        className="d-inline-block align-top"
                    />{' '}
                    CRUD RECIPES
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <ButtonAddRecipe />
                        <Button
                            className="ml-3"
                            variant={theme.variant}
                            onClick={handleChangeTheme}
                        >
                            {theme.switchIcon}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
