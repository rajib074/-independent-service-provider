import React from 'react';
import Banar from '../Banar/Banar';
import Eaxtra from '../Eastra/Eaxtra';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
          <Banar></Banar>
          <Services></Services>
          <Eaxtra></Eaxtra>
          <Footer></Footer>
        </div>
    );
};

export default Home;