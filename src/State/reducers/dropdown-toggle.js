function dropdownToggleReducer(state = 'close', action) {
    switch(action.type) {
        case 'DROPDOWN_OPEN':
            return 'open';
        break;
        case 'DROPDOWN_CLOSE':
            return 'close';
        break;
        default:
            return state;
    }
}

export default dropdownToggleReducer;