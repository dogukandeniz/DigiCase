import { modalConstants } from '../_constants';

const initialState = {
    isOpen:false
}

export function modal(state = initialState, action) {
    switch (action.type) {
        case modalConstants.OPEN_OR_CLOSE:
            return {
               isOpen: !state.isOpen
            };
        default:
            return state
    }
}