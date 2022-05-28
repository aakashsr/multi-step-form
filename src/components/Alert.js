import React, { useEffect } from "react";

function Alert({ toaster, setToaster }) {
  useEffect(() => {
    setTimeout(() => setToaster({ show: false, message: "" }), 2000);
  });
  return <div className='toaster'>{toaster.message}</div>;
}

export default Alert;
