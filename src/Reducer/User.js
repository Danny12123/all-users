
let initialState = {
    user: null,
}

export const usersReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case "NEW_USER":
            return {...state, user: payload}
        default:
            return state;
    }
}
