import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';
import { AppContext, defaultObject } from '../pages/AppContext';

class App extends Component {
  render(){ 
  return (
    <div className="app">
      <AppContext.Provider value={defaultObject}>
      <header>
        {<Header/>}
      </header>
      <main>
        <aside>
          {<Navigation/>}
        </aside>
        <section className='page'>
          {<Page/>}
        </section>
      </main>
      <footer>
        {<Footer/>}  
      </footer>       
      </AppContext.Provider>
   
    </div>
  );
} }

export default App;
