import React from "react";
import Info from "../components/Info";

function Profile({ formDetails, handleChange, next }) {
  return (
    <div className="profile-container">
      <Info
        title="Welcome! First things first.."
        subTitle="You can always change them later"
      />
      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            value={formDetails.fullName}
            onChange={(e) => handleChange(["fullName"], e)}
            placeholder="Steve Jobs"
          />
        </div>
        <div className="form-group">
          <label htmlFor="userName">Display Name</label>
          <input
            value={formDetails.userName}
            onChange={(e) => handleChange(["userName"], e)}
            placeholder="Steve"
          />
        </div>
        <button onClick={() => next((prevState) => prevState + 1)}>
          Create Workspace
        </button>
      </form>
    </div>
  );
}

export default Profile;
