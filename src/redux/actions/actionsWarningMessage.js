
import { VISIBLE_WARNING_MESSAGE, NO_VISIBLE_WARNING_MESSAGE} from "../types/types"

export function showWarning(text, value){
    return dispatch => {
        dispatch({
            type: VISIBLE_WARNING_MESSAGE,
            text: text,
            value: value,
        })

        setTimeout(() => {
            dispatch({
                type: NO_VISIBLE_WARNING_MESSAGE}
            )
        },5000)
    }
}
