import React from 'react';
import About from './components/About';
import Header from './components/Header';


// import About from './components/About';
import './App.css';

function App() {
    return (
        <div className="App container">
            <Header>
            </Header>
            <main>
                <About></About>
                
            </main>
        
        </div>
       
    );
}

export default App;
