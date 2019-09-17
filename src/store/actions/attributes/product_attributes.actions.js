export const GET_PRODUCT_ATTRIBUTES = "GET_PRODUCT_ATTRIBUTES";
export const GET_PRODUCT_ATTRIBUTES_ERROR = "GET_PRODUCT_ATTRIBUTES_ERROR";
export const GET_PRODUCT_ATTRIBUTES_SUCCESS = "GET_PRODUCT_ATTRIBUTES_SUCCESS";

export const getAttributesInProduct = data => ({
  type: GET_PRODUCT_ATTRIBUTES,
  payload: data
});