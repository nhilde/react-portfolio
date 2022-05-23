import React from 'react';
import '../styles/contact.css'
import Footer from './footer';
import Navigation from './navigation';


function Contact() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                crossorigin="anonymous"
            />
            <link rel="stylesheet" href="../styles/contact.css" />

            <Navigation />

            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className=" contactHeader">Contact Me</h1>
                </div>
            </div>




            <div className='row mainRow justify-content-center'>
                <div className='col-6 secondCol'>

                    <a href='https://github.com/nhilde' className='links' >My Github</a>

                    <a href="https://www.linkedin.com/in/noah-hildebrand-46677b233/" className='links'>My LinkedIn</a>

                    <a href="mailto:nhilde21@gmail.com" className='links'>nhilde21@gmail.com</a>

                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlInput1"></label>
                            <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Your name"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1"></label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1"></label>
                            <textarea placeholder="Message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-dark">Submit</button>
                    </form>
                    
                </div>
            </div>

        <br/>
        <br/>

            <Footer />











            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        </>
    )
}

export default Contact;