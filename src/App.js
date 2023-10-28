
import styles from "./styles";
import Navs from "./components/Nav/Navs";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";
import MoreServices from "./pages/MoreServices";

const App = () => (
  <div className="bg-white w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flex}`}>
      <div className={`${styles.boxWidth}`}>
        <Navs/>
      </div>
    </div>
    
    <div className={`${styles.boxWidth}`}>
        <Home/>
        <Clients/>
    </div>

    <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Services />
        <MoreServices/>
        <Contact />
      </div>
    </div>
    
  </div>
);

export default App;


// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// import './App.css';
// import Layout from './components/Layout/Layout';
// import Home from './pages/Home';
// import About from './pages/About';
// import { Fragment } from 'react';
// import Services from './pages/Services';
// import Contact from './pages/Contact';


// const routes = createBrowserRouter(createRoutesFromElements(
//   <Route path='/' element={<Layout/>}>
//     <Route index path='/home' element={<Home/>}/>
//     <Route path='/about' element={<About/>} />
//     <Route path='/services' element={<Services/>} />
//     <Route path='/contact' element={<Contact/>} />
//   </Route>
// ))

// function App() {
//   return (
//     <Fragment>
//         <RouterProvider router={routes}/>
//     </Fragment>
//   );
// }

// export default App;

