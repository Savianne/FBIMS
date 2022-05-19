function messagesToggleReducer(state = 'close', action) {
    switch(action.type) {
        case 'MESSAGES_OPEN':
            return 'open';
        break;
        case 'MESSAGES_CLOSE':
            return 'close';
        break;
        default:
            return state;
    }
}

export default messagesToggleReducer;