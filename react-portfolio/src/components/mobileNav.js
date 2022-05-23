import React from 'react';
import { Link } from 'react-router-dom';

function MobileNav() {
    return(
        <>
        <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                crossorigin="anonymous"
            />
            <link rel='stylesheet' href='../styles/mobileNav.css' />

            <div className="mobileNav" id="test">
                    <div className="linkBar">
                        <Link className="nav-item nav-link mobileLinks" to="/">Home</Link>
                        <Link className="nav-item nav-link mobileLinks" to="/aboutme">About Me</Link>
                        <Link className="nav-item nav-link mobileLinks" to="/work">My Work</Link>
                        <Link className="nav-item nav-link mobileLinks" to="/contact">Contact</Link>

                    </div>
                </div>



        
        </>
    )
}

export default MobileNav;