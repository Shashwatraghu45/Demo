import React from 'react';
import './index.css';
import Head from './components/head';
import First from './components/firstsection';
import Form from './components/homeform';
import Information from './components/information';
import Second from './components/second';
import Third from './components/third';
import Fourth from './components/fourth';
import Fifth from './components/fifth';
import Sixth from './components/sixth';
import Seventh from './components/seventh';

const App = () => {
  return (
      <>
          <Head />
          <div className="bg-[url('./pitchers/ban.jpg')] bg-cover h-screen  justify-center items-center">
              <div className="homepage flex flex-col lg:flex-row items-center">
                  <div className="m-10">
                      <First />
                  </div>
                  <div>
                      <Form     />
                  </div>
              </div>
          </div>
          <Information />
          <Second />
          <Third/>
          <Fourth />
          <Fifth/>
          <Sixth />
          <Seventh />
           

      </>
  );
};
export default App;

