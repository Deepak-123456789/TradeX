import React from "react";

function Hero() {
  return (
    <section className="container-fluid hero_support" id="supportHero">
      <div className="pt-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" id="Support_Portal">
          Track Tickets
        </a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-4 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <div className="d-flex">
            <input
              placeholder="Eg. how do I activate F&O"
              className=" form-control"
              aria-label="Search for an answer"
            />
          </div>
          <br />
          <div className="d-flex flex-wrap gap-3">
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li className="mb-3">
              <a href="">Current Takeovers and Delisting - April 2025</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
