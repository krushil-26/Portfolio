import React from 'react'

const Home = () => {
  return (
    <div className='full-home-section'>
        <div className='home-section'>
            <div className='home-section-part-1'>
                <p className='intro-section-name'>
                    Hi,My Name is Krushil Thakkar
                </p>
                <p className='intro-section-quote'>
                    A Frontend developer with the passion for learning and creating web pages 
                </p>
                <p className='social-media-icons'>
                    <a href="https://www.facebook.com/people/Krushil-Thakkar/pfbid02p17kTHR1Heji1a1nFYzyjAivAjUbu6XH9dpiEXGTWTEXHKf16yBkfisrsAV1eqoyl/" target="_blank"><i class="fa fa-facebook-f text-light"></i></a>
                    <a href="https://www.linkedin.com/in/krushil-thakkar-237661213/" target="_blank"><i class="fa fa-linkedin text-light"></i></a>
                    <a href="#"><i class="fa fa-twitter text-light"></i></a>
                    <a href="https://github.com/krushil-26" target="_blank"><i class="fa fa-github text-light"></i></a>
                </p>
            </div>
        </div>
        <div className='home-section-part-2'>
            <h1 style={{textAlign: "center",marginTop:"20px",fontSize:"54px",textDecoration:"underline"}}>Skills</h1>
            <div className='skills-section'>
                <p style={{fontWeight:"700",fontSize:"34px",textDecoration:"underline"}}>Frontend</p>
                <div className='skills-icons front-end-icons'>
                    <img src='https://cdn-icons-png.flaticon.com/512/5968/5968267.png' alt='Html'/>
                    <img src='https://cdn-icons-png.flaticon.com/512/5968/5968242.png' alt='css'/>
                    <img src='https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png' alt='Javascript'/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='React'/> 
                </div>
                <p style={{fontWeight:"700",fontSize:"34px",textDecoration:"underline"}}>backend</p>
                <div className='skills-icons back-end-icons'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png' alt='Python'/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home
