import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import Toggleimg from "../assets/img/Toggleimg.png";
// import projImg3 from "../assets/img/project-img3.png";
import zaraimg from "../assets/img/zara.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import { DiNodejs } from "react-icons/di";
import { FaDharmachakra, FaBootstrap, FaReact } from "react-icons/fa";
import { SiCss3, SiExpress, SiMongodb, SiRedux } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import TrackVisibility from 'react-on-screen';
import react from "../assets/skillsPhotos/react.png";


export const Projects = () => {

  const projects = [
    {
      title: "Zara Clone",
      description:
        "An extremly popular E-commerce application to shop online clothing & accessories.It has all features from sign-up to order placement",
      imgUrl: zaraimg,
      git: "https://github.com/Rohit24-code/Zara-clone",
      url: "https://zara-clone-git-main-rohit24-code.vercel.app/",
      techstack: [
        <FaReact size={32} />,
        <FaDharmachakra size={28} />,
        <SiCss3 size={28} />,
      ],
    },
    {
      title: "Bluefly clone",
      description:
        "E-commerce web application to shop online clothing & accessories.we have built the features from sign-up to order placement",
      imgUrl: projImg2,
      git: "https://github.com/optimizershivam/Bluefly-webapp",
      url: "https://stunning-stroopwafel-8b6ace.netlify.app/",
      techstack: [
        <ImHtmlFive size={28} />,
        <SiCss3 size={28} />,
        <IoLogoJavascript size={32} />,
        <FaBootstrap size={28} />,
      ],
    },
    {
      title: "Fabelley Clone",
      description:
        "E-commerce application to shop online clothing & accessories for females.It has all features from sign-up to order placement",
      imgUrl: projImg1,
      git: "https://github.com/Rgond1/faballey",
      url: "https://candid-pie-1843a0.netlify.app/",
      techstack: [
        <ImHtmlFive size={28} />,
        <SiCss3 size={28} />,
        <IoLogoJavascript size={32} />,
        <FaBootstrap size={28} />,
      ],
    },
    {
      title: "Toggle Track Clone",
      description:
        "An extremly popular Tracking application to track you precious time being spend.It has all the CRUD operations and your password will be hashed too",
      imgUrl: Toggleimg,
      git: "https://github.com/Rohit24-code/Toggle_Track_clone",
      url: "https://toggletrack-rho.vercel.app/",
      techstack: [
        <FaReact size={32} />,
        <FaDharmachakra size={28} />,
        <SiCss3 size={28} />,
        <SiExpress size={28} />,
        <SiMongodb size={28} />,
        <SiRedux size={28} />,
        <DiNodejs size={28} />,
      ],
    },
  ];

  // const projects2 = [
  //   {
  //     title: "Fabelley Clone",
  //     description:
  //       "E-commerce application to shop online clothing & accessories for females.It has all features from sign-up to order placement",
  //     imgUrl: projImg1,
  //     git: "https://github.com/Rgond1/faballey",
  //     url: "https://candid-pie-1843a0.netlify.app/",
  //     techstack: "Html Css Javascript Bootstrap",
  //   },
  //   {
  //     title: "Bluefly clone",
  //     description:
  //       "E-commerce web application to shop online clothing & accessories.we have built the features from sign-up to order placement",
  //     imgUrl: projImg2,
  //     git: "https://github.com/optimizershivam/Bluefly-webapp",
  //     url: "https://stunning-stroopwafel-8b6ace.netlify.app/",
  //     techstack: "Html Css Javascript Bootstrap",
  //   },
  //   {
  //     title: "Spotify Clone",
  //     description: "Listen to music for free",
  //     imgUrl: projImg3,
  //     git: "https://github.com/Rohit24-code/spotify-clone",
  //     url: "https://reliable-sawine-d325a7.netlify.app/",
  //     techstack: `Html Css Javascript Bootstrap`,
  //   },
  // ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Since I started working as a web developer.I worked on many
                    projects some of my projects.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link
                          style={{ cursor: "pointer" }}
                          eventKey="first"
                        >
                          First Tab
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          style={{ cursor: "pointer" }}
                          eventKey="second"
                        >
                          Second Tab
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          style={{ cursor: "pointer" }}
                          eventKey="third"
                        >
                          Third Tab
                        </Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="second">
                        <p>
                          Added this tab as too excited to add more projects
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Added this tab as too excited to add more projects
                        </p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
