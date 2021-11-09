import {
    CREATE_PRODUCT,
    RETRIEVE_PRODUCTS,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    DELETE_ALL_PRODUCTS
} from "./types";

import ProductsService from "../Services/products.service";
export const getAllProducts = () => async (dispatch) => {
    try {
        const res = await ProductsService.getAllProducts();
        dispatch({
            type: RETRIEVE_PRODUCTS,
            payload: res.data.data,
        });
    } catch (err) {
        console.log(err);
    }
};
