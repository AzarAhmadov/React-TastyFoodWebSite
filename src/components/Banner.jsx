import React from 'react';

const Banner = () => {
    return (
        <section className='banner'>
            <div className="row banner-row">
                <div className="col-lg-6 d-flex flex-column justify-content-center banner-col">
                    <h1>
                        Tasty food
                    </h1>
                    <h3> Try the best food of <br />
                        the week.
                    </h3>
                    <a className='global-button' href="#"> View Menu </a>
                </div>
                <div className="col-lg-6 d-flex justify-content-end">
                    <img className='img-fluid' src="../images/home.png" alt="" />
                </div>
            </div>
        </section>
    );
}

export default Banner;
