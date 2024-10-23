import React from "react";
import ReactDOM from "react-dom/client";


// JSX

// const root = ReactDOM.createRoot(document.querySelector("#root"));

// const jsxHeading = <h1 id="heading">Hello world from JSX</h1>;

// const image = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAWCAMAAACi/q9qAAAAY1BMVEX///8AAACsrKzn5+f19fXu7u5QUFD5+fmzs7PJycnh4eG8vLyoqKjNzc3X19dHR0dbW1ugoKCGhoaSkpKMjIx5eXlvb28aGhopKSmZmZkgICBqamo0NDTCwsIODg5WVlY+Pj4nIjysAAABgElEQVQ4ja2U23LrIAxFtTEULAw2x8GXJG7y/195BE5mMu20k7TVg5BlFmwkY6JfmNE/4yyO9kNKd8G1irh1m+++JvvTx4xOfIjO8jb6UZlXVHDD1jRWG2ObV7gnTbf7LkzGRwmiv1Urqu0WGeXuOzfO7yXhjF4G/wanAKzUiy+zzJK3AaHMWc/RY7hcJJxyd8ZWF2O8lYU69J7sjBNTwCSZAeJQJm9gog6dyMmrPM/YC1ZBauHE55qrGvIi7r1EF4hihhS/QRsjD+gewAAl/l9VWUExd8IOStIU0GNNKXVl729Avyia6/nLq4C26H3s6hfgCHtfQs7nqjwFv5f2G9DgcD8jZY5hbwHmMmzqE3h4AI9ySFzNRgktN00VOWDx7JbafgdIS3lCH6k94sAl4yxNeD/7Hr0WvNoiJdHXEnHtY4gxaIpigULkyCYwS0YEGWpKr/UUvUrrpW60rerpa7jcSnl9FrhZwv4xJ/UiyDPOeczL+iIn/wg3jmP6o4v5H94NESDoLO2pAAAAAElFTkSuQmCC"></img>

// const link = <a href="https://www.youtube.com">Link</a>


// const parent = (
//     <div id="parent">
//         <div id="child">
//             <h1>Hello World</h1>
//         </div>
//     </div>
// )

// root.render(parent);


// functional components
const root = ReactDOM.createRoot(document.querySelector("#root"));

const ReactFragment = () => <h1>Used it as React Fragment</h1>;

const ComponentComposition = () => <h1>Used it as component composition</h1>;

const HeadingComponent2 = () => (
    <>
        <ReactFragment /> {/* This is React fragments */}
        <div id="hello-div">
            <ComponentComposition /> {/* This is Component Composition */}
            <h1 className="hello">Hello from React Component</h1>
        </div>
    </>
)

// console.log(HeadingComponent2());
console.log(<HeadingComponent2 />);

root.render(<HeadingComponent2 />)

// React fragments => can return multiple elements without adding dom node