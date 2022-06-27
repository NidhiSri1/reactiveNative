import { ADD_ASTEROID_LIST } from "./action";

export const reducer = (store, { type, payload }) => {
    switch (type) {
        case ADD_ASTEROID_LIST:
            return { ...store, asteroid_det: payload };
        default:
            return store;
    }
};
