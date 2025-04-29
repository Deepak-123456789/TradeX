import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Deepak Mer"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Deepak Mer</h4>
          <h6>Full-Stack Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>Hi, I'm Deepak Mer</p>
          <p>
            I’m a highly motivated and self-driven B.Tech CSE student with a
            passion for developing dynamic and interactive web applications.
            With a strong foundation in both front-end and back-end
            technologies, I’m eager to contribute to innovative projects and
            continue growing as a full-stack developer.
          </p>
          <p>
            I’ve gained hands-on experience building responsive, user-centric
            websites and applications, and I’m always looking for opportunities
            to learn, create, and make a meaningful impact in the tech industry.
          </p>
          <p>
            Connect with me on &nbsp;<i class="fa fa-github"></i>&nbsp; GitHub /{" "}
            <i class="fa fa-linkedin"></i>&nbsp; LinkedIn
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
