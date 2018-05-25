import React from "react";

// We use JSX curly braces to evaluate the style object

const Header = (props) => (
  <div className="container ">
<div className="jumbotron jumbotron-fluid bg-black">
  <div className="container">
    <h1 className="display-3">Clicky Game</h1>
    <p className="lead">Try and Click all twelve characters without Clicking any twice.</p><hr />
    <p>Score: {props.score}</p>
    <h4 className="display-4"> {props.winnar}</h4>
  </div>
</div>
</div>
);

export default Header;
