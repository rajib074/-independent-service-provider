import React from "react";
import team1 from '../../image/team (1).jpg'
import team2 from '../../image/team (2).jpg'
import team3 from '../../image/team (3).jpg'
import Service from "../Service/Service";

const services = [
  {id: 1, name: 'time 1', img:team1},
  {id: 2, name: 'time 2', img:team2},
  {id: 3, name: 'time 3', img:team3}
]

const Services = () => {  
  return (
    <div id="services" className='container'>
            <h2 className='text-primary text-center mt-5'>Our Services</h2>
            <div className="row">
                {
                    services.map(service => <Service
                      key={service.id} 
                      service= {service}
                    ></Service>)
                }
            </div>
        </div>
  );
};

export default Services;
