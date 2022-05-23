import React from 'react';
import '../styles/work.css'
// import filmFan from '../images/filmfanpic.png'
import weatherDash from '../images/weatherdash.png'
import nbaWiz from '../images/nbawizpic.png'
import passwordGen from '../images/passwordGen.png'
import noteTaker from '../images/notetaker.png'
import teamGen from '../images/teamGen.png'
import tracker from '../images/employeeTracker.png'
import ecom from '../images/ecomBackend.png'
import readMe from '../images/readMeGen.png'
import github from '../images/githubdark.png'
import linkedin from '../images/linkedindark.png'
import emailLogo from '../images/emaildark.png'
import Navigation from './navigation';

function Work() {
    return (
        <>

            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                crossorigin="anonymous"
            />
            <link rel='stylesheet' href="../styles/work.css"></link>

            <Navigation/>

            <h1 className='workHeader'>My Work</h1>

            {/* <div className="row justify-content-center appRow">
                <div className="col-8 appCol">
                    <h3> <a href="https://morning-escarpment-82921.herokuapp.com/" class="appName">Film Fan</a></h3>
                    <img src={filmFan} className="projectScreenshot" alt='' />
                    <a href="https://github.com/nhilde/film-fan-nh" className="projectLinks">GitHub Repository</a>
                    <br />
                    <a href="https://morning-escarpment-82921.herokuapp.com/" className="projectLinks">Deployed Application</a>
                </div>
            </div> */}

            <div className="row justify-content-center appRow">
                <div className="col-8 appCol">
                    <h3> <a href="https://nhilde.github.io/weatherDashboard/" class="appName">Weather Dashboard</a></h3>
                    <img src={weatherDash} className="projectScreenshot" alt='' />
                    <a href="https://github.com/nhilde/weatherDashboard" className="projectLinks">GitHub Repository</a>
                    <br />
                    <a href="https://nhilde.github.io/weatherDashboard/" className="projectLinks">Deployed Application</a>
                </div>
            </div>

            <div className="row justify-content-center appRow">
                <div className="col-8 appCol">
                    <h3> <a href="https://nhilde.github.io/nba-wizard/" class="appName">NBA Wizard</a></h3>
                    <img src={nbaWiz} className="projectScreenshot" alt='' />
                    <a href="https://github.com/nhilde/nba-wizard" className="projectLinks">GitHub Repository</a>
                    <br />
                    <a href="https://nhilde.github.io/nba-wizard/" className="projectLinks">Deployed Application</a>
                </div>
            </div>

            <div className="row justify-content-center appRow">
                <div className="col-8 appCol">
                    <h3> <a href="https://nhilde.github.io/PasswordGenerator/" class="appName">Password Generator</a></h3>
                    <img src={passwordGen} className="projectScreenshot" alt='' />
                    <a href="https://github.com/nhilde/PasswordGenerator" className="projectLinks">GitHub Repository</a>
                    <br />
                    <a href="https://nhilde.github.io/PasswordGenerator/" className="projectLinks">Deployed Application</a>
                </div>
            </div>

            <div className="row justify-content-center appRow">
                <div className="col-8 appCol">
                    <h3> <a href="https://fathomless-oasis-10431.herokuapp.com/" class="appName">Note Taker</a></h3>
                    <img src={noteTaker} className="projectScreenshot" alt='' />
                    <a href="https://github.com/nhilde/noteTaker" className="projectLinks">GitHub Repository</a>
                    <br />
                    <a href="https://fathomless-oasis-10431.herokuapp.com/" className="projectLinks">Deployed Application</a>
                </div>
            </div>

            <div className="row justify-content-center appRow">
                <div className="col-8 appCol">
                    <h3> <a href="https://github.com/nhilde/teamGenerator" class="appName">Team Profile Generator</a></h3>
                    <img src={teamGen} className="projectScreenshot" alt='' />
                    <a href="https://github.com/nhilde/teamGenerator" className="projectLinks">GitHub Repository</a>
                    <br />

                </div>
            </div>

            <div className="row justify-content-center appRow">
                <div className="col-8 appCol">
                    <h3> <a href="https://github.com/nhilde/employeeTracker" class="appName">Employee Tracker</a></h3>
                    <img src={tracker} className="projectScreenshot" alt='' />
                    <a href="https://github.com/nhilde/employeeTracker" className="projectLinks">GitHub Repository</a>
                    <br />

                </div>
            </div>

            <div className="row justify-content-center appRow">
                <div className="col-8 appCol">
                    <h3> <a href="https://github.com/nhilde/ecomBackend" class="appName">eCom Backend</a></h3>
                    <img src={ecom} className="projectScreenshot" alt='' />
                    <a href="https://github.com/nhilde/ecomBackend" className="projectLinks">GitHub Repository</a>
                    <br />

                </div>
            </div>

            <div className="row justify-content-center appRow">
                <div className="col-8 appCol">
                    <h3> <a href="https://github.com/nhilde/readMeGenerator" class="appName">README Generator</a></h3>
                    <img src={readMe} className="projectScreenshot" alt='' />
                    <a href="https://github.com/nhilde/readMeGenerator" className="projectLinks">GitHub Repository</a>
                    <br />

                </div>
            </div>



            <div class="container-fluid">
                <div class="row justify-content-center ">

                    <div className='col-3 logoCol'>
                        <a href='https://github.com/nhilde'><img src={github} alt='' className='logos' /> </a>
                    </div>

                    <div className='col-3 logoCol'>
                        <a href='https://www.linkedin.com/in/noah-hildebrand-46677b233/'><img src={linkedin} alt='' className='logos' /> </a>
                    </div>

                    <div className='col-3 logoCol'>
                        <a href='mailto:nhilde21@gmail.com'><img src={emailLogo} alt='' className='logos' /> </a>

                    </div>
                </div>
            </div>

            <br/>




        </>
    )
}

export default Work;