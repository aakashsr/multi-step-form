import React, { useState } from "react";
import Profile from "./Profile";
import WorkspaceDetails from "./WorkspaceDetails";
import WorkspaceType from "./WorkspaceType";
import Success from "./Success";

function Signup({formDetails,handleChange,setStep,step,handleCheckbox,setWidth}) {
  

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
          next={setStep}
          handleCheckbox={handleCheckbox}
        />
      );
    case 4:
      return <Success username={formDetails.userName} />;
    default:
  }
}

export default Signup;
