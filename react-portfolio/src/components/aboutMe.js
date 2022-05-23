import React from 'react';
import '../styles/aboutMe.css'
import pic from '../images/selfie.jpg'
import Footer from './footer';
import Navigation from './navigation';
// import MobileNav from './mobileNav';

function AboutMe() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                crossorigin="anonymous"
            />
            <link rel="stylesheet" href="../styles/aboutMe.css" />

            <Navigation/>
           

            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className=" mainHeader3">About Me</h1>
                </div>
            </div>

            

            <div className='row mainRow justify-content-center'>
                <div className='col-8 mainCol'>
                    <img src={pic} alt='' className='mainPic'></img>
                </div>
            </div>

            <br/>
           
            <div className='row mainRow justify-content-center'>
                <div className='col-6 secondCol'>
                    <p className='textArea'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eius, quasi animi repudiandae consequatur
                     dicta itaque nobis tempora quaerat libero iste exercitationem placeat, praesentium hic officia obcaecati dolor harum? Harum!</p>
                </div>
            </div>

            <br/>
            <br/>

            <Footer/>













        </>
    )
}

export default AboutMe;