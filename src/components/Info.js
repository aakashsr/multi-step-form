import React from "react";

function Info({ title, subTitle }) {
  return (
    <>
      <h1 className="profile-title">{title}</h1>
      <p className="profile-sub-title">{subTitle}</p>
    </>
  );
}

export default Info;
