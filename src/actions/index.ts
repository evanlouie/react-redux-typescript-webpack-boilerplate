/** action types */
export const ADD_LOG: string = "ADD_LOG";
export const ADD_ERROR: string = "ADD_ERROR";


/** action creators */
export function addLog(text: string) {
    return {
        type: ADD_LOG,
        text,
    };
}

export function addError(text: string) {
    return {
        type: ADD_ERROR,
        text,
    };
}

