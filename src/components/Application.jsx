import React from 'react';

const Application = () => {
    return (
        <section id='app'>
            <div className="row">
                <div className="col-lg-6 d-flex justify-content-center">
                    <img className='img-fluid' src="../images/mobil-app.png" alt="" />
                </div>
                <div className="col-lg-6 d-flex justify-content-center flex-column">
                    <span>App</span>
                    <h3> App is aviable </h3>
                    <p>Find our application and download it, you can make <br /> reservations, food orders, see your deliveries on the <br /> way and much more.</p>
                    <div className="app">
                        <img src="../images/app1.png" alt="" />
                        <img src="../images/app2.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Application;
