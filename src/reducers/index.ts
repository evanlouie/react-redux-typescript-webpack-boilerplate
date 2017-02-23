import { combineReducers } from "redux";
import { ADD_ERROR, ADD_JOKE, ADD_LOG, ADD_MESSAGE } from "../actions";

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
    jokes: [],
    randomJunk: {
        foo: "bar",
    },
};

function greetings(state = initialState, action: any) {
    switch (action.type) {
        case ADD_MESSAGE:
            return Object.assign({}, state, {
                including: [
                    ...state.including,
                    action.text,
                ],
            });
        case ADD_JOKE:
            return Object.assign({}, state, {
                jokes: [
                    ...state.jokes,
                    action.text,
                ],
            });
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
