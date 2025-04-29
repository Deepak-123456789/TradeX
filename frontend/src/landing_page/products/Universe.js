import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div
      className="container mt-5  "
      style={{ paddingLeft: "4rem", paddingRight: "4rem" }}
    >
      <div className="text-center ">
        <h1>The TradeX Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="row mt-5">
          <div className="col-md-4 p-3">
            <img
              src={`${process.env.PUBLIC_URL}/media/Images/smallcase.png`}
              alt="Smallcase logo"
            />
            <p className="text-small text-muted mt-2">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-md-4 p-3">
            <img
              src={`${process.env.PUBLIC_URL}/media/Images/Streak.png`}
              alt="Streak logo"
            />
            <p className="text-small text-muted mt-2">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-md-4 p-3">
            <img
              src={`${process.env.PUBLIC_URL}/media/Images/sensibull.png`}
              alt="Sensibull logo"
            />
            <p className="text-small text-muted mt-4">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-md-4 p-3">
            <img
              src={`${process.env.PUBLIC_URL}/media/Images/tijori.png`}
              alt="Tijori logo"
            />
            <p className="text-small text-muted mt-2">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div className="col-md-4 p-3">
            <img
              src={`${process.env.PUBLIC_URL}/media/Images/ditto.png`}
              alt="Ditto Insurance logo"
            />
            <p className="text-small text-muted mt-2">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
          <div className="col-md-4 p-3 mt-5 ">
            <img
              src={`${process.env.PUBLIC_URL}/media/Images/golden.png`}
              alt="Smallcase logo"
            />
            <p className="text-small text-muted mt-4">
              Fixed-income investment platform offering curated bonds and
              debentures for steady returns.
            </p>
          </div>
        </div>

        <Link
          to="/signup"
          className="btn btn-primary fs-5 mt-4 mb-5"
          style={{ width: "200px" }}
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default Universe;
