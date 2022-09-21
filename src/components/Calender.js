import React from 'react'
import GitHubCalendar from "react-github-calendar";

const Calender = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        marginBottom:"5%"
      }}
    >
      <GitHubCalendar username="Rohit24-code" color="green" />
    </div>
  );
}

export default Calender
