const default_nav_state = {state: 'close', nav: window.innerWidth > 750? 'large' : 'small'};
 
const toggleNavbarReducer = (state = default_nav_state, action) => {
    switch(action.type) {
        case 'OPEN_NAV': 
            state = {...state, state: 'open'};
            return state;
        break;
        case 'CLOSE_NAV':
            state = {...state, state: 'close'};
            return state;
        break;
        case 'TO_SMALL_NAV':
            state = {state: 'close', nav: 'small'}
            return state;
        break;
        case 'TO_LARGE_NAV':
            state = {state: 'open', nav: 'large'}
            return state;
        break;
        default: 
            return state;
    }
}

export default toggleNavbarReducer;