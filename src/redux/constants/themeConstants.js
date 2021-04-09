import { faMoon, faSun, faTrash } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moonLogo from '../../static/images/moon-logo.png';
import sunLogo from '../../static/images/sun-logo.png';

export const LIGHT_VARIANT = 'light';
export const LIGHT_LOGO = sunLogo;
export const LIGHT_ICON = <FontAwesomeIcon icon={faSun} />;
export const LIGHT_TRASH_ICON = <FontAwesomeIcon icon={faTrash} />;

export const DARK_VARIANT = 'dark';
export const DARK_LOGO = moonLogo;
export const DARK_ICON = <FontAwesomeIcon icon={faMoon} />;
export const DARK_TRASH_ICON = <FontAwesomeIcon icon={faTrash} />;

export const SWITCH_THEME = 'THEME/SWITCH_THEME';
export const CHANGE_SCROLL_UP = 'THEME/CHANGE_SCROLL_UP';
