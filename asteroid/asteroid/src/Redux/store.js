import { createStore } from "redux";
import { reducer } from "./reducer";

const init = { asteroid_det: "" };
export const store = new createStore(reducer, init);
