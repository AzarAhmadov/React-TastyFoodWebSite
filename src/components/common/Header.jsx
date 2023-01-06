import React from 'react';
import { useState, useRef } from 'react';
import { nav } from '../data/data';
import { mobil_menu } from '../data/data';

const Header = () => {

    const [mobil, setMobil] = useState(false);

    const mobilRef = useRef()

    const classAdd = () => {
        mobilRef.current.classList.add('active')
    }

    const classRemove = () => {
        mobilRef.current.classList.remove('active')
    }

    const removeBar = () => {
        setMobil(!mobil)
    }

    return (
        <header id='header' className='header py-4'>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <a className='logo' href="#"> Tasty </a>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-end">
                        <nav>
                            <ul className='d-flex justify-content-end'>
                                {
                                    nav.map((item, index) => {
                                        return (
                                            <li key={index}> <a href={item.path}> {item.text} </a> </li>
                                        )
                                    })
                                }
                            </ul>
                            <button ref={mobilRef} className='mobil-menu' onClick={() => setMobil(!mobil)} style={{ border: "none", background: 'transparent' }}>
                                {mobil ? <i onClick={classRemove} style={{ fontSize: "23px" }} className="fa-solid fa-xmark"></i> : <i onClick={classAdd} style={{ fontSize: "23px" }} className=" fa-solid fa-bars-staggered"></i>}
                            </button>
                        </nav>
                    </div>
                </div>
            </div>

            <div ref={mobilRef} className="mobil-bar">
                <ul>
                    {
                        mobil == false ? null :

                            mobil_menu.map((item, index) => {
                                return (
                                    <li key={index}>  <a onClick={removeBar} href={item.path}> {item.text} </a> </li>
                                )
                            })
                    }
                </ul>
            </div>
        </header>
    );
}

export default Header;
