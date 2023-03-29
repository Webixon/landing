import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import '../styles/App.css'
import MainSection from './MainSection'


const App = () => {
    return(
        <div>
            <Header />
            <div className='container'>
                <Navigation/>
                <MainSection/>
            </div>
        </div>
    )
}

export default App;