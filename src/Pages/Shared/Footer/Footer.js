import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p>The Best Tutoring Service</p>
                <p className="card-text">
                  Discuss with the tutee the amount of time necessary to
                  complete each part of their task..
                </p>               
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Contact</h5>
                <p className="card-text">
                444.332.1167.
                </p>
                <p className="card-text">
                7461 Old Harvard Rd. Middleburg, FL 32068
                </p>               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
