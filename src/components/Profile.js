import React from "react";

function Profile({ formDetails, handleChange, next }) {
  return (
    <div class="profile-container">
      <h1 class="profile-title">Welcome! First things first...</h1>
      <p class="profile-sub-title">You can always change them later</p>
      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input value={formDetails.fullName} onChange={(e)=>handleChange(['fullName'],e)} placeholder="Steve Jobs" />
        </div>
        <div className="form-group">
          <label htmlFor="userName">Display Name</label>
          <input value={formDetails.userName} onChange={(e)=>handleChange(['userName'],e)}placeholder="Steve" />
        </div>
        <button onClick={() => next((prevState) => prevState + 1)}>
          Create Workspace
        </button>
      </form>
    </div>
  );
}

export default Profile;
