import React, { useState, useEffect, useRef } from 'react';
import './home.css';
import pp from './pp.jpg';
import logoBrown from './logoBrown.png';
import horizontal_1 from './horizontal_1.jpg'
import horizontal_2 from './horizontal_2.jpg'
import horizontal_3 from './horizontal_3.jpg'
import project_3 from './project_3.png'
import vertical_1 from './vertical_1.jpg'
import vertical_2 from './vertical_2.jpg'
import vertical_3 from './vertical_3.jpg'
import gear_1 from './gear_1.png'
import gear_2 from './gear_2.png'
import gear_3 from './gear_3.png'
import gear_4 from './gear_4.png'
import arrow from './arrow.png'
import PDFViewer from './pdf_viewer.js'
import emailjs from '@emailjs/browser'
import my_cv from './my_cv.pdf';

{/*Main Page*/}

function Home() {

  {/*Importing pdf's*/}
  const project1 = 'https://drive.google.com/file/d/16-5IL0Bb_yWRVi-23l_v5hLe3pllFQ_C/preview';
  const project2 = 'https://drive.google.com/file/d/1coB1Ym08o2ZbllU9jFXW33CeLXeKUiTn/preview';
  const coinfidanceUrl = 'https://coin-fidance.vercel.app';

  {/*Gear button functionality*/}
  const [currentGearIndex, setCurrentGearIndex] = useState(0);

  const gearImages = [gear_1, gear_2, gear_3, gear_4]

  const [isVisible, setIsVisible] = useState(false);

 const previousGear = () => {
    setCurrentGearIndex((prevIndex) => 
      prevIndex <= 0 ? gearImages.length - 1 : prevIndex - 1
    );
  };

  const nextGear = () => {
    setCurrentGearIndex((prevIndex) => 
      prevIndex >= gearImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    setIsVisible(true);
  }, []); 

  {/*Scroll effect only at certain point functionality*/}
  const useIntersectionObserver = (options = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasIntersected, setHasIntersected] = useState(false);
    const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected){
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    );

    if(ref.current){
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current){
        observer.unobserve(ref.current);
      }
    };
  }, [hasIntersected, options]);
  return [ref, isIntersecting, hasIntersected];
};

const FadeInOnScroll = ({ children, delay = 0, duration = 0.6, triggerOnce = true}) => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  const shouldAnimate = triggerOnce ? hasIntersected : isIntersecting;

  return(
    <div
    ref = {ref}
    style = {{
      opacity: shouldAnimate ? 1 : 0,
      transform: shouldAnimate ? 'translateY(0)' : 'translateY(30px)',
      transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,

    }}
    >
      {children}
    </div>
  );
};

{/*Form submission sent directly to email*/}
  const form = useRef();

  const submissionButton = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8hk6nvi', 'template_vgq36vp', form.current, {
        publicKey: 'RjlieaxWq7kbEjkwY',
      })
      .then(
        () => {
          window.alert('Your message has been sent');
        },
        (error) => {
           window.alert('Message has not been sent due to an error please re-send', error.text);
        },
      );
  };


  return (
    <div className="container">

    {/*Home Page*/}
    <section id="home">
    <FadeInOnScroll delay={0.1} triggerOnce={false}>
    <div className="home">
      <div 
        className={`fadeContainer ${isVisible ? 'fade-in' : ''}`} 
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0%)' : 'translateY(-100%)',
          transition: 'opacity 2.5s ease-in-out, transform 2s ease-in-out',
        }}
      >
        <div className="initialText">
          <h1 className="hwu">Hey Whats up</h1>
          <div className="meAndLogo">
            <h1>
              Im <img src={logoBrown} alt="logo" width="auto" height="75px" style={{ transform: 'translate(-4px, 22px)', paddingLeft: '24px' }} class="initialLogo"/> <span className="ansen">ansen</span>
            </h1>
          </div>
          <p className="smallText"><a href="https://www.cityu.edu.hk" style={{ textDecoration: 'none', color: '#5d4037' }} className="CityULink" target="_blank">CityU Hong Kong</a> Computer Science student</p>
        </div>
        <div className="myImage">
          <img src={pp} alt="Profile" width="auto" height="500px" style={{ borderRadius: '50%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }} />
        </div>
      </div>
    </div>
    </FadeInOnScroll>
    </section>

{/*CS Page*/}
    
    <section id="cs">
    <FadeInOnScroll delay={0.2} triggerOnce={false}>
    <div className="CS">
        <h1 className="secondary_heading_text">My CS Experience</h1>
        <h2 className="tertiary_heading_text">Get to know me</h2>
        <p className="CS_content_text" align="justify">I believe that advancements in technology are inevitable especially in the field of artificial intelligence. As a result, I hold deeply a responsibility especially as a computer science student, to be able to understand how to use and implement technology and software accordingly and responsibly. </p>
        
        

        <h2 className="tertiary_heading_text">My Past Projects</h2>

        <table className="myProjects" align='center'>
          <tr>
            <td><div className="project_1"><PDFViewer PDFUrl={project1}/></div></td>
            <td width='50px'></td>
            <td><div className="project_1"><PDFViewer PDFUrl={project2}/></div></td>
            <td width='50px'></td>
            <td>
              <div className="project_1">
                <a href={coinfidanceUrl} target="_blank" rel="noreferrer">
                  <img src={project_3} alt="Coinfidance" className="project_image" />
                </a>
              </div>
            </td>
          </tr>
        </table>


        <h2 align="center" className="button_link_text">More about CS career on my Linkedin</h2>
        <p align="center"><button type="button" className="button_link"><a href="https://www.linkedin.com/in/hansen-yosia-geraldi-aa963b363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" style={{textDecoration: 'none', color: '#5d4037', fontSize: '25px'}}  target="_blank">Check out my Linkedin</a></button></p>
    </div>
    </FadeInOnScroll>
    </section>

    {/*Photo Page*/}
    
    <section id="photo">
    <FadeInOnScroll delay={0.3} triggerOnce={false}>
    <div className="photo">
        <h1 className="secondary_heading_text">My Photography</h1>
        <h2 className="photo_tertiary_text" align="center" id="g1">My Gear</h2>

        <p align="center">
        <table>
          <tr>
            <td width="250px" align="center"><img src={arrow} onClick={previousGear} style={{transform: 'rotate(180deg)'}} className="arrowIcon"/></td>
            <td align="center" width="362px"><img alt="gear_image" src={gearImages[currentGearIndex]} style={{height:'320px', width: 'auto'}}/></td>
            <td width="250px" align="center"><img src={arrow} onClick={nextGear} className="arrowIcon"/></td>
          </tr>
        </table>
        </p>
        <br></br>
        
        <h2 className="photo_tertiary_text" align="center">My Photos</h2>

        <table align="center" className="image_table">
          <tr>
            <td><img src={vertical_1} alt="photo 1"  height="350px" width="auto"/> <img src={horizontal_1} alt="photo 2"  height="350px" width="auto"/></td>
          </tr>
          <tr>
            <td><img src={horizontal_2} alt="photo 3" height="350px" width="auto"/> <img src={vertical_2} alt="photo 4"  height="350px" width="auto"/></td>
          </tr>
          <tr>
            <td><img src={vertical_3} alt="photo 5"  height="350px" width="auto"/> <img src={horizontal_3} alt="photo 6"  height="350px" width="auto"/></td>
          </tr>
        </table>

        <h2 align="center" className="button_link_text">Check out more of my Photography</h2>
        <p align="center"><button type="button" className="button_link"><a href="https://www.instagram.com/hansenyg07?igsh=MWoxbWJjbmk4NDYyOQ==" style={{textDecoration: 'none', color: '#5d4037', fontSize: '25px'}}  target="_blank">Check out my Instagram</a></button></p>
        </div>
    </FadeInOnScroll>
    </section>

    {/*Contact Page*/}
    
    <section id="contact">
    <FadeInOnScroll delay={0.4} triggerOnce={false}>
    <div className="contact">
      <div 
        className={`fadeContainerContact ${isVisible ? 'fade-in' : ''}`} 
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0%)' : 'translateY(-100%)',
          transition: 'opacity 3s ease-in-out, transform 2s ease-in-out',
        }}
      >
      <h1 className="secondary_heading_text">Ask Me Anything</h1>
      <h2 className="so">So... What do you want to know</h2>
      <form ref={form} onSubmit={submissionButton}>
        <table align="center">
          <tr>
            <td><textarea className="formName" name="formName">Name</textarea><textarea className="formContact" name="formContact">Your contact Instagram or Email</textarea></td>
          </tr>
          <tr>
            <td><textarea className="formSubject" name="formSubject">Subject</textarea></td>
          </tr>
          <tr>
            <td><textarea className="formContent" name="formContent"></textarea></td>
          </tr>
          <tr>
            <td align="center"><button type="submit" className="buttonSubmit">Submit</button> <button type="reset" className="buttonReset">Reset</button></td>
          </tr>
        </table>
      </form>
      </div>
      </div>
    </FadeInOnScroll>
    </section>

    </div>
  );
}

export default Home;