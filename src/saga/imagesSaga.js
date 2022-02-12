import { takeEvery, select, call, put } from 'redux-saga/effects';
import { IMAGES } from '../constants/contants';
import { fetchImages } from '../apis/fetchImages';
import { setImages, setError } from '../actions/actions';

const getPage = state => state.nextPage;

function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default watchImagesLoad;
