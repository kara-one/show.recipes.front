import './Recipes.css';

import { Col, Row } from 'react-bootstrap';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddRecipe from './AddRecipe';
import ButtonAddRecipe from '../Recipes/ButtonAddRecipe';
import DeleteRecipe from './DeleteRecipe';
import Recipe from './Recipe';
import SkeletonRecipe from './skeletonRecipe';
import { fetchRecipes } from '../../redux/actions/recipeActions';

const Recipes = () => {
    const dispatch = useDispatch();

    const stateIsEndList = useSelector((state) => state.recipes.isEndList);
    const stateIsFetched = useSelector((state) => state.recipes.isFetched);
    const stateDataRecipes = useSelector((state) => state.recipes.data);
    const statePageRecipes = useSelector((state) => state.recipes.page);
    const stateLimitRecipes = useSelector((state) => state.recipes.limit);

    let [pageHeight, setPageHeight] = useState(0);
    let [loading, setLoading] = useState(false);
    let [isEndList, setIsEndList] = useState(stateIsEndList);
    let [isFetched, setIsFetched] = useState(stateIsFetched);
    let [recipes, setRecipes] = useState(stateDataRecipes);
    let [pages, setPages] = useState(statePageRecipes);

    let handleScroll = useCallback(() => {
        const scrollHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight,
        );
        const windowHeight =
            document.documentElement.clientHeight + window.scrollY;
        const isPageEnd = scrollHeight - 200 < windowHeight;

        if (pageHeight === 0 || (loading && pageHeight !== scrollHeight)) {
            setLoading(false);
            setPageHeight(scrollHeight);
        }

        if (
            isPageEnd &&
            !loading &&
            pageHeight === scrollHeight &&
            !isFetched
        ) {
            setLoading(true);
            dispatch(fetchRecipes(pages, stateLimitRecipes));
        }
    }, [pages, stateLimitRecipes, isFetched, dispatch, loading, pageHeight]);

    window.onload = function () {
        dispatch(fetchRecipes(pages, stateLimitRecipes));
    };

    useEffect(() => {
        setIsEndList(stateIsEndList);
    }, [setIsEndList, stateIsEndList]);

    useEffect(() => {
        setIsFetched(stateIsFetched);
    }, [setIsFetched, stateIsFetched]);

    useEffect(() => {
        setRecipes(stateDataRecipes);
    }, [setRecipes, stateDataRecipes]);

    useEffect(() => {
        setPages(statePageRecipes);
    }, [setPages, statePageRecipes]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <>
            <Row>
                {!recipes.length ? (
                    <>
                        <SkeletonRecipe />
                        <SkeletonRecipe />
                    </>
                ) : (
                    recipes.map((recipe) => (
                        <Recipe recipe={recipe} key={recipe.id} />
                    ))
                )}

                {!isEndList ? (
                    <SkeletonRecipe />
                ) : (
                    <Col xs={12} className="mt-3 mb-4 text-center">
                        <ButtonAddRecipe />
                    </Col>
                )}
            </Row>

            <AddRecipe />
            <DeleteRecipe />
        </>
    );
};
export default Recipes;
