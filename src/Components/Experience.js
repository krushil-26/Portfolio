import React from 'react'
import pdf from "../krushil_thakkar.pdf"

const Experience = () => {
  return (
    <div className='experience-section'>
        <div className='experience-section-parts'>
            <div className='experience-section-part-1'>
                <h1 className='experience-heading'>Experience</h1>
                <hr style={{backgroundColor:"orange",border:"0",height:"8px"}}/>
                <div className='experince-text'>
                    <ul>
                        <li><h3 className='software-engineer-text-heading' style={{fontSize:"35px"}}>Junior Software Engineer</h3></li>
                        <p className='software-engineer-text'>I Worked on the Multiple Projects in Odoo ERP. 
                            I Mostly worked on the Frontend side. In Frontend side I used Html
                            , Css, Javascript and Jquery </p>
                        <li><h3 className='software-engineer-text-heading' style={{fontSize:"35px"}}>Traniee Software Engineer</h3></li>
                        <p className='software-engineer-text'>In Training I Learned the Python Basics and Advanced.
                        I also Learned Javascript and Jquery and Learned SQL Commands</p>
                    </ul>
                    <div style={{margin: "auto",width: "fit-content",marginTop: "56px"}}>
                    <a href={pdf} download="Krushil" target='_blank'>
                        <button type="button" className='download-button'>Download CV</button>
                    </a>    
                    </div>
                </div>
            </div>
        </div>
        <div className='education-section-parts'>
            <h1 className='education-heading'>Education</h1><hr style={{backgroundColor:"black",height:"8px"}}/>
            <div className='education-text'>
                    <ul>
                        <li><h3 className='education-heading-para' style={{fontSize:"35px"}}>LJ Institute of Engineering and Technology</h3></li>
                        <p className='education-para'>BE in Elecronics and Communication</p>
                        <p className='education-para'>CGPA 8.46</p>
                        <li><h3 className='education-heading-para' style={{fontSize:"35px"}}>Shree Durga Higher Secondary School</h3></li>
                        <p className='education-para'>HSC Gujrat Board</p>
                        <p className='education-para'>68%</p>
                        <li><h3 className='education-heading-para' style={{fontSize:"35px"}}>Shree Durga Higher Secondary School</h3></li>
                        <p className='education-para'>SSC Gujrat Board</p>
                        <p className='education-para'>67%</p>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default Experience
