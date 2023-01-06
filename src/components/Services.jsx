import React from 'react';
import { services } from './data/data';

const Services = () => {
    return (
        <section id='services'>
            <div className="title d-flex align-items-center flex-column">
                <span>Offering</span>
                <h3> Our amazing services </h3>
            </div>
            <div className="row services-row">
                {services.map((item, index) => {
                    return (
                        <div key={index} className="col-lg-4 col-md-6 services-card">
                            {item.img}
                            <h5> {item.title} </h5>
                            <p>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Services;
