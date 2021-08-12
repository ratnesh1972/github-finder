import { SET_ALERT } from '../../type';

const alertReducer = (state, action) => {
    if (action) {
        switch (action.type) {
            case SET_ALERT:
                return {
                    ...state,
                    alert: action.payload
                }
            default: return state;
        }
    }
}

export default alertReducer;