import React, { useState, useEffect, useRef } from 'react';
import logoCream from './logoCream.png';
import './sidebar.css';
import homeImage from './home-image.png';
import CSImage from './CS-image.png';
import photoImage from './photo-image.png';
import contactImage from './contact-image.png';
import emailImage from './email-image.png';
import linkedinImage from './linkedin-image.png';
import githubImage from './github-image.png';
import instaImage from './insta-image.png';

function Sidebar(){
    {/*Scroll onto different parts of page*/}
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    {/*Fade onload*/}
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []); 

  return (
    <div 
        className={`fadeContainerSidebar ${isVisible ? 'fade-in' : ''}`} 
        style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 1.2s ease-in-out, opacity 1s ease-in-out',
        }}
      >
    <div className="sidebar-container">
    <table>
    <tr height="25px">
      </tr>
      <tr>
          <td  align="center">
            <div className="logoCreamContainer" onClick={() => scrollToSection('home')}>
                <img src={logoCream} alt="logo" width="50px" height="auto"/>
                <div className="logoCreamText">
                    Home
                </div>
            </div>
          </td>
      </tr>
      <tr height="200px">
      </tr>
      <tr>
          <td  align="center" height="60px">
            <div className="home_ImageContainer" onClick={() => scrollToSection('home')}>
                <img src={homeImage} alt="home-image" width="40px" height="auto"  className="home_Image"/>
                <div className="home_ImageText">
                    Home
                </div>
            </div>
            </td>
      </tr>
      <tr>
          <td  align="center" height="60px">
            <div className="CS_ImageContainer" onClick={() => scrollToSection('cs')}>
                <img src={CSImage} alt="CS-image" width="40px" height="auto"/>
                <div className="CS_ImageText">
                    My CS Experience
                </div>
            </div>
            </td>
      </tr>    
      <tr>
          <td  align="center" height="60px">
            <div className="photo_ImageContainer" onClick={() => scrollToSection('photo')}>
                <img src={photoImage} alt="photo-image" width="40px" height="auto"/>
                <div className="photo_ImageText">
                    My Photography
                </div>
            </div>
            </td>
      </tr> 
      <tr>
          <td  align="center" height="60px">
            <div className="contact_ImageContainer" onClick={() => scrollToSection('contact')}>
                <img src={contactImage} alt="contact-image" width="40px" height="auto"/>
                <div className="contact_ImageText">
                    Contact Me
                </div>
            </div>
            </td>
      </tr> 
      <tr height="100px">
      </tr>
      <tr>
          <td  align="center" height="30px"><a href="mailto:hansenygeraldi@gmail.com"  target="_blank">
            <div className="email_ImageContainer">
                <img src={emailImage} alt="email-image" width="20px" height="auto"/>
                <div className="email_ImageText">
                    Email Me
                </div>
          </div>
          </a></td>
      </tr>
      <tr>
          <td  align="center" height="30px"><a href="https://www.linkedin.com/in/hansen-yosia-geraldi-aa963b363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "  target="_blank">
          <div className="linkedin_ImageContainer">
                <img src={linkedinImage} alt="linkedin-image" width="20px" height="auto"/>
                <div className="linkedin_ImageText">
                    My Linkedin
                </div>
          </div>
          </a></td>
      </tr>    
      <tr>
          <td  align="center" height="30px"><a href="https://github.com/Fvast" target="_blank">
            <div className="github_ImageContainer">
                <img src={githubImage} alt="github-image" width="20px" height="auto"/>
                <div className="github_ImageText">
                    My Github
                </div>
          </div>
          </a></td>
      </tr> 
      <tr>
          <td  align="center" height="30px"><a href="https://www.instagram.com/hansenyg07?igsh=MWoxbWJjbmk4NDYyOQ==" target="_blank">
          <div className="instagram_ImageContainer">
                <img src={instaImage} alt="insta-image" width="20px" height="auto"/>
                <div className="instagram_ImageText">
                    My Instagram
                </div>
            </div>
          </a></td>
      </tr> 
    </table>
    </div>
    </div>
  );
}

export default Sidebar