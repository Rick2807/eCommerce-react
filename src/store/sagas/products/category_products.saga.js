import { put, takeLatest, call } from "redux-saga/effects";
import productsService from "../../../services/productsService";
import {
  GET_CATEGORY_PRODUCTS,
  GET_CATEGORY_PRODUCTS_SUCCESS,
  GET_CATEGORY_PRODUCTS_ERROR
} from "../../actions/products";

function* getProductsInCategorygoryProductsSaga(action) {
  try {
    const data = yield call(
      productsService.getProductsInCategory,
      action.payload
    );
    yield put({
      type: GET_CATEGORY_PRODUCTS_SUCCESS,
      payload: { ...data, ...action.payload }
    });
  } catch (error) {
    yield put({
      type: GET_CATEGORY_PRODUCTS_ERROR,
      payload: error
    });
  }
}

export function* getProductsInCategorygoryProductsWatcher() {
  yield takeLatest(
    GET_CATEGORY_PRODUCTS,
    getProductsInCategorygoryProductsSaga
  );
}
