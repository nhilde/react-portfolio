import React from 'react';
import '../styles/homepage.css'
import pic from '../images/selfie.jpg'
import { Link } from 'react-router-dom'
import Footer from './footer';
import Navigation from './navigation';



function Homepage() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                crossorigin="anonymous"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@100;200;300&family=Raleway:wght@500&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="../styles/homepage.css" />
            <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
            
            <Navigation/>
            
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className=" mainHeader2">Noah Hildebrand</h1>
                </div>
            </div>

            <div className='picRow'>
                <img src={pic} alt='' className='mainPic'></img>
            </div>

            {/* <h2>Full Stack Developer</h2> */}
            <br/>
            <div className='boxCol'>
            <h4 className='skills'>HTML/CSS | Javascript | NodeJS | Express | MongoDB | MySQL | React</h4>
            </div>
            <br/>

            <div className="container-fluid text-center">
                <br />
                <div className="row">
                    <div className="col-sm-4 boxCol">

                        <h3 className='homeBox'><Link className="pageLink" to="/aboutme">About Me</Link></h3>
                    </div>
                    <div className="col-sm-4 boxCol">

                        <h3 className='homeBox'><Link className="pageLink" to="/work">My Work</Link></h3>
                    </div>
                    <div className="col-sm-4 boxCol">
                        <h3 className='homeBox'><Link className="pageLink" to="/contact">Contact Me</Link></h3>

                    </div>
                </div>
            </div>

            <br/>
            <br/>
            
            
            

            <Footer/>




            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        </>
    )
}
export default Homepage;