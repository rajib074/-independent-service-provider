import React from 'react';
import './Banar.css'

const Banar = () => {
  return (
    <div>
      <div className="bg-warning">
      <div className="container col-xxl-8 px-4 py-5 ">
        <div className="row flex-lg-row-reverse align-items-center">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={
                "https://owly.wpengine.com/wp-content/uploads/2019/02/person.png"
              }
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="500"
              height="300"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">I’m John Doe</h1>
            <p className="lead">
              Doctorate in Business Administration (on-going), MBA
              (International Business), Bachelors in Finance
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-secondary"
              >
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banar;