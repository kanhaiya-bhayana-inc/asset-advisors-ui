import React from 'react'
import imgpath from "../Images/undraw_warning_cyit.svg";

export default function CannotAccess() {
    let imgStyle = { height: "250px", padding: "30px" };
  let h4Style = { padding: "20px" };
  return (
    <div className="container text-center">
      <img src={imgpath} alt="Warning  svg" style={imgStyle} />
      <h2>404 </h2>
      <h4 style={h4Style}>Page Not Found!</h4>
      <p>
        <i>
          We cannot find the page you are looking for!
          <br /> <br />
          The page you are looking for doesn't exist or an other error occured.
          <br /> Go back, or head over to backstreet.com to choose a new
          direction.
        </i>
      </p>
    </div>
  )
}
