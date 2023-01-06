import React from 'react';

const Contact = () => {
    return (
        <section id='contact'>
            <div className="row">
                <div className="col-lg-9">
                    <div className="contatc-item">
                        <span>
                            Let's talk
                        </span>
                        <h3>
                            Contact us
                        </h3>
                        <p>
                            If you want to reserve a table in our restaurant, contact us and we will <br /> attend you quickly, with our 24/7 chat service.
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 d-flex align-items-center">
                    <a className='global-button' href="#"> Contact us now </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
