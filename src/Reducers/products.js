import {
    CREATE_PRODUCT,
    RETRIEVE_PRODUCTS,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    DELETE_ALL_PRODUCTS
} from "../Actions/types";
const initialState = [];
function ProductsReducer(products = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_PRODUCT:
            return [...products, payload];

        case RETRIEVE_PRODUCTS:
            return payload;

        case UPDATE_PRODUCT:
            return products.map((PRODUCT) => {
                if (PRODUCT.id === payload.id) {
                    return {
                        ...PRODUCT,
                        ...payload,
                    };
                } else {
                    return PRODUCT;
                }
            });

        case DELETE_PRODUCT:
            return products.filter(({ id }) => id !== payload.id);

        case DELETE_ALL_PRODUCTS:
            return [];

        default:
            return products;
    }
};

export default ProductsReducer;
