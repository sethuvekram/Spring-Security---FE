import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import About from '../about/About';
import Categories from '../categories/Categories';
import Products from '../products/Products';
import Support from '../support/Support';
import Head from '../head/Head';
import "./Dashboard.scss";
import Footer from '../footer/Footer';
import BlogPost from '../BlogPost.jsx/BlogPost';
import Homec from '../homec/Homec';
import Category1 from '../categories/listcategories/Category1/Category1';
import Category2 from '../categories/listcategories/Category2/Category2';
import Category3 from '../categories/listcategories/Category3/Category3';
import Category4 from '../categories/listcategories/Category4/Category4';
import Category5 from '../categories/listcategories/Category5/Category5';

function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState('homec');
  
  const handleNavbarClick = (componentName) => {
    setSelectedComponent(componentName);
  };
   
  const components = {
    about: <About />,     
    categories: <Categories />,
    products: <Products />,
    support: <Support />,
    homec: <Homec />,
    category1: <Category1 />,
    category2: <Category2 />,
    category3: <Category3 />,
    category4: <Category4 />,
    category5: <Category5 />,
  };
  
  return (
    <div className='App'>
      <Head/>
      <Navbar onNavbarClick={handleNavbarClick} />
      {components[selectedComponent]}
      <Footer/>
    </div>
  );
}

export default Dashboard;
