import React from 'react';
import '../styles/homepage.css';
import github from '../images/githubdark.png'
import linkedin from '../images/linkedindark.png'
import emailLogo from '../images/emaildark.png'

function Footer() {
    return (
        <>
            <div class="container-fluid footer">
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
        </>
    )
}

export default Footer;