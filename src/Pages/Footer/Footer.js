import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <div>
     
      <div className="footer-copy-right">
      <p>
                Copyright {" "}
                <Link to='/' className='red'>
                  OWLY
                </Link>{" "}
                @{new Date().getFullYear()} All Rights Reserved
              </p>
      </div>


    </div>
  );
};

export default Footer;
