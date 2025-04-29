import React from "react";

function CreateTicket() {
  return (
    <div className="container support ">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

        {/* Account Opening Section */}
        <div className="col-4 p-5 mt-2 mb-2 ">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account
            Opening
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Online Account Opening
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Offline Account Opening
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Company, Partnership and HUF Account
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            NRI Account Opening
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Charges for Opening an Account
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Zerodha IDFC FIRST Bank 3-in-1 Account
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Account Opening Process
          </a>
        </div>

        {/* Trading Issues Section */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Trading
            Issues
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Order Execution Issues
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Delayed Trade Confirmation
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Margin and Leverage Issues
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Order Rejection
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Market Data Delays
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Trade P&L Discrepancy
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            API Integration Issues
          </a>
        </div>

        {/* Account and Fund Section */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account &
            Fund
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Depositing Funds
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Withdrawing Funds
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Bank Account Linking Issues
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Fund Transfer Issues
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Margin Funding
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Trading Limits
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Fund Settlement Time
          </a>
        </div>

        {/* Technical Support Section */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Technical
            Support
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            App Crashes / Bugs
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Platform Issues (Web/Mobile)
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            System Downtime or Maintenance
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Two-Factor Authentication Issues
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Account Lock or Suspension
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Error Codes in Platform
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Debugging and Troubleshooting
          </a>
        </div>

        {/* Others Section */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Other
            Issues
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            KYC Verification Issues
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Account Security Concerns
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Data Privacy Concerns
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Platform Feedback
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Legal and Regulatory Queries
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Zerodha Offers and Promotions
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Feedback and Suggestions
          </a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
