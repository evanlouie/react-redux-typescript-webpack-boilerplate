import * as Actions from "./actions";
import Homepage from "./containers/Homepage";
import { helloApp } from "./reducers";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const store = createStore(
    helloApp,
    applyMiddleware(thunk),
);
// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(Actions.addLog("Hello from the react/redux/typescript/webpack boilerplate"));
store.dispatch(Actions.addError("Both of these messages were dispatched via redux actions"));
store.dispatch(Actions.getRandomChuckNorrisJoke());
// unsubscribe from store updates
unsubscribe();

const mount: Element | null = document.querySelector("#app");

if (mount !== null) {
    ReactDOM.render(
        <Provider store={store}>
            <Homepage />
        </Provider>,
        mount
    );
} else {
    console.error(`#app not found in document`);
}
