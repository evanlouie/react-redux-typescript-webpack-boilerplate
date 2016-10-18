import { ADD_ERROR, ADD_LOG } from "../actions";
import { combineReducers } from "redux";

const initialState = {
    greeting: "This is a hyper minimalist boilerplate to get started with:",
    including: [
        "React",
        "React Redux",
        "React Router",
        "React Router Redux",
        "Redux",
        "TypeScript2",
        "Webpack2",
    ],
};

function greetings(state = initialState, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}

function logs(state = { errors: [], logs: [] }, action: any) {
    switch (action.type) {
        case ADD_LOG:
            return Object.assign({}, state, {
                logs: [
                    ...state.logs,
                    action.text,
                ],
            });
        case ADD_ERROR:
            return Object.assign({}, state, {
                errors: [
                    ...state.errors,
                    action.text,
                ],
            });
        default:
            return state;
    }
}

export const helloApp = combineReducers({
    greetings,
    logs,
});

