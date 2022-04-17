import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="container footer-ditels">
        <div className="row">
          <div className="col-sm-3">
            <div className="card card-aria">
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
          <div className="col-sm-3">
            <div className="card card-aria">
              <div className="card-body">
                <h5 className="card-title">Useful Links</h5>
                <p>Free Consultation</p>
                <p>Visit Us</p>
                <p>Chat with us</p>
                             
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card card-aria">
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
         
          <div className="col-sm-3">
            <div className="card card-aria">
              <div className="card-body">
                <h5 className="card-title">Follow Us</h5>
                <p>Sosal Service</p>
                           
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copy-right">
      <p><small>Copyright © 2022. </small> </p>
      </div>


    </div>
  );
};

export default Footer;
