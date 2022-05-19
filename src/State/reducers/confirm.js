const default_state = {
    asking: false,
}

const confirmReducer = (state = default_state, action) => {
    switch(action.type) {
        case 'ASK':
            state = {...state, asking: action.payload};
            return state;
        break;
        case 'CONFIRM_NO':
            state.asking.no();
            state = {...state, asking: false};
            return state;
        break;
        case 'CONFIRM_YES':
            state.asking.yes();
            state = {...state, asking: false};
            return state;
        break;
        default: 
            return state;
    }
}

export default confirmReducer;