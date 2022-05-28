import React from "react";

function Success({username}) {
  return (
    <div>
      <div className="success-icon">
          <img style={{width: '25px'}} src='./tick.png' />
      </div>
      <h1>Congratulations, {username}!</h1>
      <p>You have completed onboarding, you can start using the Eden!</p>
      <button>Launch Eden</button>
    </div>
  );
}

export default Success;
