import React from 'react';
import Navbars from '../Nav/Navbars';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
     <Navbars/>
     <main>
       <Outlet/>
     </main>
     
    </>
  );
}

export default Layout;
