import React from "react";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;

  return <div className="text-red-700 text-sm">{error}</div>;
};

export default ErrorMessage;
