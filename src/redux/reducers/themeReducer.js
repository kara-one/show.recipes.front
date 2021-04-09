import {
    CHANGE_SCROLL_UP,
    DARK_ICON,
    DARK_LOGO,
    DARK_TRASH_ICON,
    DARK_VARIANT,
    LIGHT_ICON,
    LIGHT_LOGO,
    LIGHT_TRASH_ICON,
    LIGHT_VARIANT,
    SWITCH_THEME,
} from '../constants/themeConstants';

/** State */
export const selectState = (isLight = true) => {
    if (isLight === true) {
        return {
            isLight,
            variant: LIGHT_VARIANT,
            logo: LIGHT_LOGO,
            switchIcon: LIGHT_ICON,
            trashIcon: LIGHT_TRASH_ICON,
        };
    }

    return {
        isLight,
        variant: DARK_VARIANT,
        logo: DARK_LOGO,
        switchIcon: DARK_ICON,
        trashIcon: DARK_TRASH_ICON,
    };
};

/** Reducer */
const defaultState = { settings: selectState(true), scrollUp: false };
const themeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SWITCH_THEME:
            return {
                ...state,
                settings: { ...state.settings, ...action.payload },
            };
        case CHANGE_SCROLL_UP:
            return {
                ...state,
                scrollUp: !state.scrollUp,
            };

        default:
            return state;
    }
};
export default themeReducer;
