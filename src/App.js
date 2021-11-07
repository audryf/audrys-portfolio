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
    document.title = "Audry Ford - Web Developer"
    // const [aboutSelected, setAboutSelected] = useState(true);
    // const [contactSelected, setContactSelected] = useState(false);
    // const [resumeSelected, setResumeSelected] = useState(false);
    // const [projectSelected, setProjectSelected] = useState(false);

    return (
        <Router>
            <div className="container main-text-color">

                <Header />
                <main>
                    {/* {(()=> {
                        if (aboutSelected) {
                            setContactSelected(false);
                            setProjectSelected(false);
                            setResumeSelected(false);
                            return <About />
                        }
                        else if (contactSelected) {
                            setAboutSelected(false);
                            setProjectSelected(false);
                            setResumeSelected(false);
                            return <Contact />
                        }
                        else if (resumeSelected) {
                            setAboutSelected(false);
                            setContactSelected(false);
                            setProjectSelected(false);
                            return <Resume />
                        }
                        else {
                            setAboutSelected(false);
                            setContactSelected(false);
                            setResumeSelected(false);
                            return <ProjectList />
                        }
                    })} */}






                    <Switch>
                        <Route exact path="/audrys-portfolio" component={About} />
                        <Route exact path="/portfolio" component={ProjectList} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/resume" component={Resume} />
                    </Switch>
                   
                </main>
                {/* <About /> */}
                <Footer />

            </div>
        </Router>


    );
}

export default App;
