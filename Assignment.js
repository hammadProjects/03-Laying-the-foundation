import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const headerCreate = React.createElement("div", {className: "title"}, [
    React.createElement("h1", {}, "This is h1."),
    React.createElement("h2", {}, "This is h2."),
    React.createElement("h3", {}, "This is h3.")
]);
// root.render(headerCreate);

const headerJSX = (
    <div className="title">
        <h1>This is h1.</h1>
        <h2>This is h2.</h2>
        <h3>This is h3.</h3>
    </div>
);
// root.render(headerJSX);

const HeaderComponent = () => (
    <div className="title">
        <h1>This is h1.</h1>
        <h2>This is h2.</h2>
        <h3>This is h3.</h3>
    </div>
);
// root.render(<HeaderComponent></HeaderComponent>);

const AnotherComponent = () => (
    <>
        <HeaderComponent />
        <div className="sibiling-to-title">
            <h1>This is the child of title sibiling.</h1>
        </div>
    </>
)

// root.render(<AnotherComponent />);