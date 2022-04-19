import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const { name, img, ditels } = service;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-primary">{name}</h5>
                    <p className="card-text">{ditels}</p>
                    <Link to='/checkout' className="btn btn-primary">VIEW MORE</Link>
                </div>
            </div>
        </div>

    );
};

export default Service;