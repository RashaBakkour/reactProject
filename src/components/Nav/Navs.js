import React from 'react';
import { useState } from 'react';
import {navLinks} from '../../constants';
import menu from '../../assets/menu.png';
import close from '../../assets/close.png';
import './Navbars.css';

const Navs = () => {

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <header id='header' className='fixed-top d-flex align-items-center'>
      <div className='container d-flex align-items-center justify-content-between'>
          <div className='logo'>
            <h1>Vesperr</h1>
          </div>  
          <nav className="w-full flex py-6 justify-between items-center navbar">
            
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-raleway font-normal cursor-pointer text-[16px] ${
                    active === nav.title ? "text-dimBlue" : "text-dimGryee" }
                     ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle((prev)=> !prev)}
              />

              <div
                id='cccc'
                className={`${toggle ? 'flex ' : "hidden"}
                p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-raleway font-medium cursor-pointer text-[16px] ${
                        active === nav.title ? "text-dimBlue" : "text-dimGryee"
                      } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                      onClick={() => setActive(nav.title)}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        </nav>
      </div>
      
</header>
    
  );
}

export default Navs;
