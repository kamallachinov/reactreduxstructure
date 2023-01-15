const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state;// ve ya return true yazmag olar
        default:
            return state;
    }
}
export default loggedReducer;