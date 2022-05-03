import { modalConstants } from '../_constants';

export const modalActions = {
   openOrClose
};


function openOrClose() {
    return { type: modalConstants.OPEN_OR_CLOSE };
}