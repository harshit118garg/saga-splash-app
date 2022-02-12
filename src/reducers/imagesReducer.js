import { IMAGES } from '../constants/contants';

const imagesReducer = (state = [], action) => {
    if (action.type === IMAGES.LOAD_SUCCESS) {
        return [...state, ...action.images];
    }

    return state;
};

export default imagesReducer;
