import React from "react";

function WorkspaceType({next}) {
  return (
    <div class="profile-container">
      <h1 class="profile-title">How are you planning to use Eden?</h1>
      <p class="profile-sub-title">
        We'll streamline your setup experience accordingly.
      </p>

      <div className="cards-container">
        <div className="card-left">
          <img src="./profile.png" alt="single" />
          <h4>For myself</h4>
          <p>Write better. Think more clearly.Stay organized.</p>
        </div>
        <div className="card-right">
          <img src="./multipleprofile.png" alt="multiple" />
          <h4>With my team</h4>
          <p>Wikis,docs,tasks & projects, all in one place.</p>
        </div>
      </div>
      <button onClick={() => next((prevState) => prevState + 1)}>
          Create Workspace
        </button>
    </div>
  );
}

export default WorkspaceType;
