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

const defaultState = {
    isFetched: false,
    data: [],
    page: 1,
    totalItems: 0,
    isEndList: false, 
    limit: 2,
    stateModalCreate: false,
    stateModalDelete: false,
    idItemDelete: 0,
};

const recipeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCHED_RECIPES:
            return {
                ...state,
                isFetched: !state.isFetched,
            };
        case INIT_RECIPES:
            return {
                ...state,
                data: [...state.data, ...action.payload],
            };
        case ADD_RECIPE:
            return {
                ...state,
                data: [action.payload, ...state.data],
            };
        case UPDATE_RECIPES:
            return {
                ...state,
                data: state.data.map((item) =>
                    item.id === action.payload.id ? action.payload : item,
                ),
            };
        case REMOVE_RECIPES:
            return {
                ...state,
                data: state.data.filter(
                    (item) => item.id !== action.payload.id,
                ),
            };

        case STATE_MODAL_CREATE:
            return {
                ...state,
                stateModalCreate: action.payload,
            };
        case STATE_MODAL_DELETE:
            return {
                ...state,
                stateModalDelete: action.payload,
            };
        case ID_ITEM_DELETE:
            return {
                ...state,
                idItemDelete: action.payload,
            };

        case CHANGE_TOTAL:
            return {
                ...state,
                totalItems: action.payload,
            };

        case CHANGE_PAGE:
            return {
                ...state,
                page: state.page + 1,
                isEndList: state.page * state.limit >= state.totalItems,
            };

        default:
            return state;
    }
};
export default recipeReducer;
