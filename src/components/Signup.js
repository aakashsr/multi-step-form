import React, { useState } from "react";
import Profile from "./Profile";
import WorkspaceDetails from "./WorkspaceDetails";
import WorkspaceType from "./WorkspaceType";
import Success from "./Success";

function Signup() {
  const [step, setStep] = useState(1);
  const [formDetails, setFormDetails] = useState({
    fullName: "",
    userName: "",
    workspaceName: "",
    workspaceUrl: "",
    workSpaceType: "myself",
  });

  const handleChange = (type, e) => {
    setFormDetails((prevObj) => ({ ...prevObj, [type]: e.target.value }));
    console.log(formDetails);
  };

  switch (step) {
    case 1:
      return (
        <Profile
          formDetails={formDetails}
          handleChange={handleChange}
          next={setStep}
        />
      );

    case 2:
      return (
        <WorkspaceDetails
          formDetails={formDetails}
          handleChange={handleChange}
          next={setStep}
        />
      );
    case 3:
      return (
        <WorkspaceType
          formDetails={formDetails}
          handleChange={handleChange}
          next={setStep}
        />
      );
    case 4:
      return <Success username={formDetails.userName} />;
    default:
  }
}

export default Signup;
