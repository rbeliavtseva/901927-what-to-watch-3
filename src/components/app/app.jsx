import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  return (
    <Main
      // eslint-disable-next-line react/prop-types
      movie={props.movie}
    />
  );
};


export default App;
