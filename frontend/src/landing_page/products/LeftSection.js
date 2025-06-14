import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt="img" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src={`${process.env.PUBLIC_URL}/media/Images/googlePlayBadge.svg`}
                alt="img"
              />
            </a>
            <a href={appStore}>
              <img
                src={`${process.env.PUBLIC_URL}/media/Images/appstoreBadge.svg`}
                style={{ marginLeft: "50px" }}
                alt="img"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
