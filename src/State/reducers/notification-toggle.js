function notificationToggleReducer(state = 'close', action) {
    switch(action.type) {
        case 'NOTIFICATIONS_OPEN':
            return 'open';
        break;
        case 'NOTIFICATIONS_CLOSE':
            return 'close';
        break;
        default:
            return state;
    }
}

export default notificationToggleReducer;