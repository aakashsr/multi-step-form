import React from "react";
import Info from "../components/Info";

function Profile({ formDetails, handleChange, next, setToaster }) {
  const handleSubmit = (e) => {
    if (formDetails.fullName === "") {
      e.preventDefault();
      console.log("if");
      setToaster({ show: true, message: "*Please enter your full name" });
    } else if (formDetails.userName === "") {
      e.preventDefault();
      setToaster({ show: true, message: "*Please enter user name" });
    } else {
      next((prevState) => prevState + 1);
    }
  };
  
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
        <button onClick={handleSubmit}>Create Workspace</button>
      </form>
    </div>
  );
}

export default Profile;
