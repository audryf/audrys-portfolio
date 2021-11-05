import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {

    return (
        <Router>
            <div className="container main-text-color">
                <div className="">
                    <Header />
                    <main>
                        <Switch>
                            <Route exact path="/" component={About} />
                            <Route path="/portfolio" component={ProjectList} />
                            <Route path="/contact" component={Contact} />
                        </Switch>
                        {/* <About />
                        <Contact />
                        <ProjectList /> */}
                    </main>
                    <Footer />
                </div>
            </div>
        </Router>


    );
}

export default App;
