import React, { useCallback, useState } from "react";
import DemoOutput from "./Components/Demo/DemoOutput";
import NavBar from "./Components/Navigation/NavBar";

const App = (props) => {
  const [showParagraph, setShowparagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("APP RUNNING");
  const toggleHandler = useCallback(() => {
    if (allowToggle) {
      setShowparagraph((prevParagraph) => !prevParagraph);
    }
  }, [allowToggle]);
  const allowtoggleHandler = () => {
    setAllowToggle(true);
  };
  return (
    <>
      <NavBar />
      <div class="card">
        <div class="card-body">
          <h2>Hello there</h2>
          <DemoOutput show={showParagraph} />
          <button type="button" onClick={toggleHandler} class="btn btn-primary">
            Toggle
          </button>
          <button
            type="button"
            onClick={allowtoggleHandler}
            class="btn btn-primary"
          >
            Toggle
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
