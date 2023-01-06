import React from 'react';

const AboutUs = () => {
    return (
        <section id='about'>
            <div className="row">
                <div className="col-lg-6 d-flex justify-content-center">
                    <img className='img-fluid' src="../images/about.jpeg" alt="" />
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center about-col">
                    <span className="top-text">
                        About us
                    </span>
                    <h3> We cook the best <br />
                        tasty food
                    </h3>
                    <p>
                        We cook the best food in the entire city, with <br /> excellent customer service, the best meals and at <br /> the best price, visit us.
                    </p>
                    <a href="#" className='global-button'> Explore history </a>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
