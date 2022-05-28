import React from "react";
import Info from "../components/Info";

function WorkspaceDetails({ formDetails, handleChange, next, setToaster }) {
  const handleSubmit = (e) => {
    if (formDetails.workspaceName === "") {
      e.preventDefault();
      console.log("if");
      setToaster({ show: true, message: "*Please enter workspace name" });
    } else if (formDetails.workspaceUrl === "") {
      e.preventDefault();
      setToaster({ show: true, message: "*Please enter workspace url" });
    } else {
      next((prevState) => prevState + 1);
    }
  };

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
        <button onClick={handleSubmit}>Create Workspace</button>
      </form>
    </div>
  );
}

export default WorkspaceDetails;
