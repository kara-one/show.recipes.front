import * as yup from 'yup';

export const VALIDATION_RECIPE = yup.object({
    id: yup.number().required().positive().integer(),
    name: yup.string().required(),
    price: yup.number().required().positive().integer(),
    imageUrl: yup.string().required(),
    info: yup.string().required(),
});
export const EMPTY_RECIPE = {
    id: (1000 + Date.now()).toString(),
    name: '',
    price: 0,
    imageUrl: '',
    info: '',
};

export const FETCHED_RECIPES = 'RECIPE/FETCHED_RECIPES';
export const INIT_RECIPES = 'RECIPE/INIT_RECIPES';
export const ADD_RECIPE = 'RECIPE/ADD_RECIPE';
export const UPDATE_RECIPES = 'RECIPE/UPDATE_RECIPES';
export const REMOVE_RECIPES = 'RECIPE/REMOVE_RECIPES';
export const STATE_MODAL_CREATE = 'RECIPE/STATE_MODAL_CREATE';
export const STATE_MODAL_DELETE = 'RECIPE/STATE_MODAL_DELETE';
export const ID_ITEM_DELETE = 'RECIPE/ID_ITEM_DELETE';
export const CHANGE_TOTAL = 'RECIPE/CHANGE_TOTAL';
export const CHANGE_PAGE = 'RECIPE/CHANGE_PAGE';
