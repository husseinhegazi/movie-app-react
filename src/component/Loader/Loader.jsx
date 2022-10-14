import React from "react";

export default function Loader() {
  return (
    <div className="spinner-border" style={{
      margin:"5rem auto",
      textAlign:"center"
    }} role="status">
      <span className="sr-only"></span>
    </div>
  );
}