import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header>
                <Navigation>
                </Navigation>
            </Header>
            <main>
                <About></About>
                <Portfolio>
                    <Project></Project>
                </Portfolio>
            </main>
            <Footer>
                
            </Footer>
        </div>
    );
}

export default App;
