/**
 * Created by stan229 on 5/27/16.
 */
const initialState = {
    token: '',
    userId: '',
    email: '',
    name: ''
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER' :
            console.log(JSON.stringify(state))
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                email: action.email,
                name: action.name
            }

        default:
            return state;
    }
};