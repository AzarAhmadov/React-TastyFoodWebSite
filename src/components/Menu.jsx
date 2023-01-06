import React from 'react';
import { menu } from './data/data';

const Menu = () => {
    return (
        <section id='menu'>
            <div className="title d-flex align-items-center flex-column">
                <span>Special</span>
                <h3> Menu of the week</h3>
            </div>
            <div className="row">
                {
                    menu.map((item, index) => {
                        return (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-6 menu-card">
                                <div className="cards">
                                    <img className='img-fluid' src={item.img} alt="menu_img" />
                                    <h5> {item.top_title} </h5>
                                    <p>{item.bottom_text}</p>
                                    <span className="price">{item.price}</span>
                                    <div style={{ cursor: "pointer" }} className="market-icon">
                                        <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Menu;
