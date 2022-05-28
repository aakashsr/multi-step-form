import React from "react";
import Info from "../components/Info";

function WorkspaceType({ formDetails, next, handleCheckbox }) {
  return (
    <div className="profile-container">
      <Info
        title="How are you planning to use Eden?"
        subTitle=" We'll streamline your setup experience accordingly."
      />

      <form>
        <div className="cards-container">
          <div
            onClick={(e) => handleCheckbox("workSpaceType", e)}
            className={
              formDetails.workSpaceType === "me" ? "me selected" : "me"
            }
          >
            <img src="./profile.png" alt="single" />
            <h4>For myself</h4>
            <p>Write better. Think more clearly.Stay organized.</p>
          </div>
          <div
            onClick={(e) => handleCheckbox("workSpaceType", e)}
            className={
              formDetails.workSpaceType === "team" ? "team selected" : "team"
            }
          >
            <img src="./multipleprofile.png" alt="multiple" />
            <h4>With my team</h4>
            <p>Wikis,docs,tasks & projects, all in one place.</p>
          </div>
        </div>
        <button onClick={() => next((prevState) => prevState + 1)}>
          Create Workspace
        </button>
      </form>
    </div>
  );
}

export default WorkspaceType;
