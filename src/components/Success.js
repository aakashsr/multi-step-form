import React from "react";
import Info from "../components/Info";

function Success({ username }) {
  return (
    <div className="success profile-container">
      <div className="success-icon">
        <img style={{ width: "25px" }} src="./tick.png" alt="success-icon" />
      </div>
      <Info
        title={`Congratulations ${username}`}
        subTitle="You have completed onboarding, you can start using the Eden!"
      />
      <form>
        <button>Launch Eden</button>
      </form>
    </div>
  );
}

export default Success;
