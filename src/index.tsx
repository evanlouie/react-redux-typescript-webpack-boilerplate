import { addError, addLog } from "./actions";
import Homepage from "./containers/Homepage";
import { helloApp } from "./reducers";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(helloApp);
// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addLog("Hello from the react/redux/typescript/webpack boilerplate"));
store.dispatch(addError("Both of these messages were dispatched via redux actions"));

const mount: Element | null = document.querySelector("#app");

if (mount !== null) {
    ReactDOM.render(
        <Provider store={store}>
            <Homepage />
        </Provider>,
        mount
    )
} else {
    console.error(`#app not found in document`);
}
