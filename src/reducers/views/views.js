import { CHANGE_MESSAGE } from '../../actions'

const initialState = {
    text: '123'
}

export const viewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_TEXT":
            return {
                ...state,
                text: (new Date()).toString()
            }
        case CHANGE_MESSAGE:
            return {
                ...state,
                inputAreaValue: action.value
            }
        
        default: break;
    }
    return state;
}