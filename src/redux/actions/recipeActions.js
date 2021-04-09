import {
    ADD_RECIPE,
    CHANGE_PAGE,
    CHANGE_TOTAL,
    FETCHED_RECIPES,
    ID_ITEM_DELETE,
    INIT_RECIPES,
    REMOVE_RECIPES,
    STATE_MODAL_CREATE,
    STATE_MODAL_DELETE,
    UPDATE_RECIPES,
} from '../constants/recipeConstants';
import { create, getAll, remove, update } from '../../http/recipesAPI';

import {CHANGE_SCROLL_UP} from '../constants/themeConstants'

export const fetchRecipes = (page, limit) => async (dispatch) => {
    dispatch({
        type: FETCHED_RECIPES,
    });

    const res = await getAll(page, limit);

    dispatch({
        type: INIT_RECIPES,
        payload: res.rows,
    });
    dispatch({
        type: CHANGE_TOTAL,
        payload: res.count,
    });
    dispatch({
        type: CHANGE_PAGE,
    });
    dispatch({
        type: FETCHED_RECIPES,
    });
};

export const addRecipe = (data) => async (dispatch) => {
    try {
        const res = await create(data);

        dispatch({
            type: ADD_RECIPE,
            payload: res.data,
        });

        dispatch({
            type: CHANGE_SCROLL_UP
        });
    } catch (e) {
        console.error('e: ', e);
    }
};

export const updateRecipe = (data) => async (dispatch) => {
    try {
        await update(data);

        dispatch({
            type: UPDATE_RECIPES,
            payload: data,
        });
    } catch (e) {
        console.error('e: ', e);
    }
};

export const removeRecipe = (data) => async (dispatch) => {
    try {
        await remove({ id: data });

        dispatch({
            type: REMOVE_RECIPES,
            payload: { id: data },
        });
    } catch (e) {
        console.error('e: ', e);
    }
};

export function showModalCreate(data) {
    return {
        type: STATE_MODAL_CREATE,
        payload: data,
    };
}

export const showModalDelete = (data) => {
    return {
        type: STATE_MODAL_DELETE,
        payload: data,
    };
};

export function setIdItemDelete(data) {
    return {
        type: ID_ITEM_DELETE,
        payload: data,
    };
}
