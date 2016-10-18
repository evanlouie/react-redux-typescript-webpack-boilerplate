import * as React from "react";
import * as ReactDOM from "react-dom";

const mount: Element | null = document.querySelector("#app");

if (mount !== null) {
    ReactDOM.render(
        <div>
            <h1>Hello World</h1>
            <p>This is just a hyper minimalist boilerplate to get started with:</p>
            <ul>
                <li>React</li>
                <li>React Redux</li>
                <li>React Router</li>
                <li>React Router Redux</li>
                <li>Redux</li>
                <li>TypeScript2</li>
                <li>Webpack2</li>
            </ul>
        </div>,
        mount
    )
} else {
    console.error(`#app not found in document`);
}
