import React from "react";
import ReactDOM from "react-dom/client";

/* ...........way to create a react element via create element...........*/

//  const heading= React.createElement("h1",{},"hello");
//         const root=ReactDOM.createRoot(document.getElementById('root'));
//         root.render(heading);

/* ...........way to create a react element via JSX..........*/

const heading = <h1>Hello from JSX</h1>;

const heading2 = <h1>Hello from JSX 2</h1>;

const moreHeading = 
  <>
    <h1>Heello</h1>
    <h2>I am Multiline jsx</h2>
  </>


/* .............case  where the js parser fails if i dont insert the () the js add the automatic semicolon after return and no code runs....*/

//  function App() {
//        console.log("hello");
//   return
//     <h1>Hello</h1>;
// }

function App() {
  console.log("hello");
  return <h1>Hello</h1>;
}

const properHeading = (
  <>
    <h1>Heello</h1>
    <h2>I am Multiline jsx</h2>
  </>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
