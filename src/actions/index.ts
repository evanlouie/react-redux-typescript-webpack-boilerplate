import * as Fetch from "isomorphic-fetch";
import * as Redux from "redux";

/** action creators */

export const ADD_LOG: string = "ADD_LOG";
export function addLog(text: string) {
    return {
        type: ADD_LOG,
        text,
    };
}

export const ADD_ERROR: string = "ADD_ERROR";
export function addError(text: string) {
    return {
        type: ADD_ERROR,
        text,
    };
}

export const ADD_MESSAGE: string = "ADD_MESSAGE";
export function addMessage(text: string) {
    return {
        type: ADD_MESSAGE,
        text,
    };
}

export const ADD_JOKE: string = "ADD_JOKE";
export function addJoke(text: string) {
    return {
        type: ADD_JOKE,
        text,
    };
}

/**
 * Async example: since we apply the redux-thunk middleware in createStore, instead of passing an
 * actual object like the examples above, we can return a lambda which takes in the dispatch object.
 * With that, we can now dispatch actions upon promise resolutions.
 */
export function getRandomChuckNorrisJoke() {
    return <T>(dispatch: Redux.Dispatch<T>) => {
        return fetch("https://api.icndb.com/jokes/random").then((response) => {
            return response.json();
        }).then((json: Response & { value: { joke: string } }) => {
            const joke: string = json.value.joke;
            return dispatch(addJoke(joke));
        }).catch((err) => {
            console.error(err);
            return dispatch(addJoke(""));
        });
    };
}
