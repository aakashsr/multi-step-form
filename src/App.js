import React, { useState, useEffect } from "react";
import "./App.css";
import Signup from "./components/Signup";
import ProgressCounter from "./components/ProgressCounter";
import Title from "./components/Title";

function App() {
  const [step, setStep] = useState(1);
  const [formDetails, setFormDetails] = useState({
    fullName: "",
    userName: "",
    workspaceName: "",
    workspaceUrl: "",
    workSpaceType: "me",
  });
  const [width, setWidth] = useState(0);

  const handleCheckbox = (type, e) => {
    setFormDetails((prevObj) => ({
      ...prevObj,
      [type]: e.target.closest("div").className,
    }));
  };

  const handleChange = (type, e) => {
    setFormDetails((prevObj) => ({ ...prevObj, [type]: e.target.value }));
  };

  useEffect(() => {
    let newProgressWidth = (100 / 3) * (step - 1);
    setWidth(newProgressWidth);
  }, [step]);

  return (
    <div className="App">
      <Title />
      <ProgressCounter width={width} step={step} />
      <Signup
        formDetails={formDetails}
        handleChange={handleChange}
        step={step}
        setStep={setStep}
        handleCheckbox={handleCheckbox}
        setWidth={setWidth}
      />
    </div>
  );
}

export default App;
