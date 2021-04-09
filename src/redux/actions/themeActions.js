import { CHANGE_SCROLL_UP, SWITCH_THEME } from '../constants/themeConstants';

import { selectState } from '../reducers/themeReducer';

export const initTheme = (isLight) => {
    const isLightOld = JSON.parse(localStorage.getItem('isLight'));
    isLight = isLightOld !== null ? isLightOld : isLight;

    return {
        type: SWITCH_THEME,
        payload: selectState(isLight),
    };
};

export const switchTheme = (isLight) => {
    localStorage.setItem('isLight', isLight);

    return {
        type: SWITCH_THEME,
        payload: selectState(isLight),
    };
};

export const changeScrollUp = () => {
    return {
        type: CHANGE_SCROLL_UP,
    };
};
