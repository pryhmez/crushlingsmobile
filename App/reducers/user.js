/**
 * Created by stan229 on 5/27/16.
 */
const initialState = {
    token: '',
    userId: '5e7a5fbfe8763909af2975a3',
    // userId: '5e7a5fe9e8763909af2975a4',
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