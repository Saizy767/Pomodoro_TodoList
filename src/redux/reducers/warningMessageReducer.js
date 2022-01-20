import { VISIBLE_WARNING_MESSAGE , NO_VISIBLE_WARNING_MESSAGE} from "../types/types"

const initialState={
    message: false,
    text: null,
    value: null
}

export const warningMessageReduser = (state = initialState, action) => {
    switch (action.type) {
        case VISIBLE_WARNING_MESSAGE:
            return {...state,message: true,
                             text: action.text,
                             value: action.value}
        case NO_VISIBLE_WARNING_MESSAGE:
            return{...state, message: false}
    default: return state
    }
}

