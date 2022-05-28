import React from "react";
import Info from "../components/Info";

function WorkspaceType({ formDetails, next, handleCheckbox }) {
  const workSpaceType = formDetails.workSpaceType;
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
            {workSpaceType === "me" ? (
              <img src="./user.png" alt="user" />
            ) : (
              <img src="./user-grey.png" alt="user" />
            )}
            <h4>For myself</h4>
            <p>Write better. Think more clearly.Stay organized.</p>
          </div>
          <div
            onClick={(e) => handleCheckbox("workSpaceType", e)}
            className={
              formDetails.workSpaceType === "team" ? "team selected" : "team"
            }
          >
            {workSpaceType === "team" ? (
              <img src="./group.png" alt="team" />
            ) : (
              <img src="./group-grey.png" alt="team" />
            )}
            <h4>With my team</h4>
            <p>Wikis,docs,tasks & projects, all in one place.</p>
          </div>
        </div>
        <button
          onClick={() => {
            
            next((prevState) => prevState + 1);
            console.log(formDetails);
          }}
        >
          Create Workspace
        </button>
      </form>
    </div>
  );
}

export default WorkspaceType;
