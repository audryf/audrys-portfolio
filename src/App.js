import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer'
import Resume from './components/Resume';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {

    return (
        <Router>
            <div className="container main-text-color">

                <Header />
                <main>
                    <Switch>
                        <Route exact path="/" component={About} />
                        <Route exact path="/portfolio" component={ProjectList} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/resume" component={Resume} />
                    </Switch>
                </main>
                <Footer />

            </div>
        </Router>


    );
}

export default App;
