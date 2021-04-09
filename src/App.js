import './App.css';

import React, { useEffect, useState } from 'react';
import { changeScrollUp, initTheme } from './redux/actions/themeActions';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Recipes from './components/Recipes/Recipes';

function App() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.settings);
    const stateScrollUp = useSelector((state) => state.theme.scrollUp);

    const [scrollUp, setScrollUp] = useState(stateScrollUp);

    useEffect(() => {
        setScrollUp(stateScrollUp);
    }, [setScrollUp, stateScrollUp]);

    useEffect(() => {
        dispatch(initTheme(theme.isLight));
    }, [dispatch, theme.isLight]);

    useEffect(() => {
        if (scrollUp) {
            scrollUpHandler();
            dispatch(changeScrollUp());
        }
    }, [dispatch, scrollUp]);

    function scrollUpHandler() {
        window.scrollTo(0, 0);
    }

    return (
        <section className={`bg-${theme.variant}`}>
            <Header />

            <div className="after-header">
                <Container>
                    <Recipes />
                </Container>
            </div>
        </section>
    );
}

export default App;
