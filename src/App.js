import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import ProjectList from './components/ProjectList'

function App() {
    // const [contactSelected, setContactSelected] = useState(false);
    // const [aboutSelected, setAboutSelected] = useState(true);
    // const [portfolioSelected, setPortfolioSelected] = useState(false)

    return (
        <div className="container">
            <div className="">
            <Header/>
            <main>
                <ProjectList/>
                <About/>
                <Contact/>
            </main>
            </div>
            
        
        </div>
       
    );
}

export default App;
