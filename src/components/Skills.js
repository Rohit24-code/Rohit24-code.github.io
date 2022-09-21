import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import react from '../assets/skillsPhotos/react.png'
import redux from '../assets/skillsPhotos/redux.png'
import html from '../assets/skillsPhotos/html.png'
import css from '../assets/skillsPhotos/css.png'
import express from '../assets/skillsPhotos/express.png'
import javascript from '../assets/skillsPhotos/javascript.jfif'
import vercel from '../assets/skillsPhotos/vercel.png'
import vscode from '../assets/skillsPhotos/vscode.png'
import nodejs from '../assets/skillsPhotos/nodejs.jfif'
import typescript from '../assets/skillsPhotos/typescript.png'
import Netlify from '../assets/skillsPhotos/Netlify.jfif'
import mongo from '../assets/skillsPhotos/mongo.png'
import mongoose from '../assets/skillsPhotos/mongoose.png'
import git from '../assets/skillsPhotos/git.png'
import github from '../assets/skillsPhotos/git.jfif'
import next from '../assets/skillsPhotos/next.jfif'
import postman from '../assets/skillsPhotos/postman.png'
import Heroku from '../assets/skillsPhotos/Heroku.png'
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <div className="skilldiv">
                <img src={html} alt="React"/>
                <img src={css} alt="React"/>
                <img src={javascript} alt="React"/>
                <img src={react} alt="React"/>
                <img src={redux} alt="React"/>
                <img src={nodejs} alt="React"/>
                <img src={express} alt="React"/>
                <img src={mongo} alt="React"/>
                <img src={mongoose} alt="React"/>
                <img src={typescript} alt="React"/>
                <img src={next} alt="React"/>
                <img src={Netlify} alt="React"/>
                <img src={postman} alt="React"/>
                <img src={vercel} alt="React"/>
                <img src={git} alt="React"/>
                <img src={github} alt="React"/>
                <img src={vscode} alt="React"/>
                <img src={Heroku} alt="React"/>
               
              </div>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Adaptable</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Flexible</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Interpersonal Skills</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Problem solver</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}
