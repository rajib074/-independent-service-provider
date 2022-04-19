import React from "react";
import team1 from '../../image/team (1).jpg'
import team2 from '../../image/team (2).jpg'
import team3 from '../../image/team (3).jpg'
import Service from "../Service/Service";
import "./Services.css"

const services = [
  {id: 1, name: 'Mathematics ', img:team1, ditels:'Mathematics is an area of knowledge, which includes the study of such topics as numbers, formulas and related structures, shapes and spaces in which they are contained, '},
  {id: 2, name: 'Physics ', img:team2, ditels:'Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time,.'},
  {id: 3, name: 'Chemistry', img:team3, ditels:'Chemistry is the scientific study of the properties and behavior of matter. It is a natural science that covers the elements that make up matter to the compounds composed of atoms, '}
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
