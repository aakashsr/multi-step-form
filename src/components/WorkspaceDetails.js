import React from "react";
import Info from "../components/Info";

function WorkspaceDetails({ formDetails, handleChange, next }) {
  return (
    <div className="profile-container">
      <Info
        title="Let's set up a home for all of your work"
        subTitle="You can always change them later"
      />
      <form>
        <div className="form-group">
          <label htmlFor="fullName">Workspace Name</label>
          <input
            value={formDetails.workspaceName}
            onChange={(e) => handleChange(["workspaceName"], e)}
            type="text"
            placeholder="Eden"
          />
        </div>
        <div className="form-group">
          <label htmlFor="userName">Workspace URL</label>
          <input
            value={formDetails.workspaceUrl}
            onChange={(e) => handleChange(["workspaceUrl"], e)}
            placeholder="Example"
          />
        </div>
        <button onClick={() => next((prevState) => prevState + 1)}>
          Create Workspace
        </button>
      </form>
    </div>
  );
}

export default WorkspaceDetails;
