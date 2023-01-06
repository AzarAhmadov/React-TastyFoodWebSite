import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 flex-column">
                        <span> Tasty Food </span>
                        <p> Restourant </p>
                        <ul className='d-flex sosial'>
                            <li><a href="#"> <i class="fa-brands fa-facebook"></i> </a></li>
                            <li><a href="#"> <i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"> <i class="fa-brands fa-twitter"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <ul>
                            <li className='f-title'> Services </li>
                            <li><a href="#"> Delivery </a></li>
                            <li><a href="#"> Pricing </a></li>
                            <li><a href="#"> Fast food </a></li>
                            <li><a href="#"> Reserve your spot</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <ul>
                            <li className='f-title'> Information </li>
                            <li><a href="#"> Event </a></li>
                            <li><a href="#"> Contact us </a></li>
                            <li><a href="#"> Privacy policy </a></li>
                            <li><a href="#"> Terms of services </a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 ">
                        <ul>
                            <li className='f-title'> Adress</li>
                            <li>Jr Union #999</li>
                            <li>999 - 888 - 777</li>
                            <li>tastyfood@email.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
