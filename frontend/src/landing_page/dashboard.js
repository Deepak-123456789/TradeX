import React from "react";

function Dashboard() {
  return (
    <div className="p-5 m-5">
      <p className="mb-3 mt-3 fs-1">
        <b>💼 Start Growing Your Wealth Today!</b>
      </p>
      <p className="fs-4">
        Investing in stocks isn't just for the wealthy — it's for anyone ready
        to build a better future. Whether you're aiming for financial freedom,
        saving for a goal, or just growing your money, the stock market can help
        make it happen. Start small, learn as you go, and watch your money work
        for you.
      </p>
      <a
        className="dash fs-3"
        href="http://localhost:3001"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", textDecoration: "none", marginTop: "8rem" }}
      >
        Explore Dashboard{" "}
        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
      </a>
    </div>
  );
}

export default Dashboard;
