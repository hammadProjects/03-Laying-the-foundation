import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const api = {
    getData: () => 15
}

const data = api.getData();

const elem = <h1>The data is <span>{data}</span>. </h1>

root.render(elem)


const FnComponent = () => (
    <h1>Hello</h1>
);

console.log(typeof FnComponent)