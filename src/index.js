import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Collapse = props => {
  const [isCollapsed, setIsCollapsed] = useState(props.collapsed);
  console.log(props.collapsed);
  const style = {
    collapsed: {
      display: "none"
    },
    expanded: {
      display: "block"
    },
    buttonStyle: {
      display: "block",
      width: "100%"
    }
  };
  return (
    <div>
      <button
        style={style.buttonStyle}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? "Show" : "Hide"} content
      </button>
      <div style={isCollapsed ? style.collapsed : style.expanded}>
        {props.children}
      </div>
    </div>
  );
};

function App() {
  return (
    <Collapse>
      <div className="App">
        <h1>Hello Collapse App</h1>
        <h2>Start editing to see some magic happen by using react hoook!</h2>
      </div>
    </Collapse>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
