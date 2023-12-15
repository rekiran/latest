import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <div
      style={{
        color: "#121212",
        fontSize: 16,
        textAlign: "center",
        backgroundColor: "white",
        justifyContent: "center",
        bottom: 0, // Set to the bottom
        width: "100%", // Occupy the full width
        padding: "10px", // Adjust as needed
        opacity: 0.75,
        fontFamily: "varela round,sans-serif",
      }}
    >
      &#169; Kiran. All rights reserved.
      <FontAwesomeIcon icon="fas fa-terminal" />
    </div>
  );
};
