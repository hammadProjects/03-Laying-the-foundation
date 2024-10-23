import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// writing JS in JSX
const Component = () => <h1>{console.log("hello world")}</h1>;
root.render(<Component />);


// Put React Element in Element & Component in React Element
const ComponentUesdInElement = () => <h5>This Component is being used in React Element. </h5>
const reactElem = <span>This is span and <ComponentUesdInElement /></span>;

const title = (
    <h2>{reactElem}This is React Element. </h2>
);

// Put React Element in Component => Element is at the end a variable of JS => enclosed in {}
const ComponentUsingElement = () => (
    <>
        {title}
        <h1>I have used React Element inside React Component. </h1>
    </>
);

root.render(<ComponentUsingElement />);