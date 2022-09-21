import { Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { BsGithub } from "react-icons/bs";


export const ProjectCard = ({ title, description,techstack, imgUrl ,url, git }) => {

  return (
    <Col size={500} sm={6} md={4} lg={6}>
      <div className="proj-imgbx">
        <a href={url}>
          <img src={imgUrl} alt="project" />
        </a>
        <div className="proj-txtx">
          <h4 style={{ color: "blue", marginBottom: 0 }}>{title}</h4>
          {/* <span>{description}</span> */}
          {/* <h6
            style={{
              color: "blue",
              textDecoration: "underline",
              marginBottom: 0,
            }}
          > */}
          {/* Tech Stack */}
          {/* </h6> */}
          {/* <span style={{ padding: "0 5px 0 5px" ,marginTop:0 }}>{techstack}</span> */}
        </div>
      </div>
      <div
        style={{
          alignItem: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3 style={{ color: "#542fb6" }}>{title}</h3>
      </div>
      <div>
        <p className="desc">{description}</p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginBottom:"20px"

        }}
      >
        <h5>Tech Stack : </h5>
        <div
          style={{
            display: "flex",
            gap: "5px",
          }}
        >
          {techstack.map((e) => (
            <div>{e}</div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <button>
          <a
            style={{ color: "white" }}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            Live Project <ArrowRightCircle size={25} />
          </a>
        </button>
        <button>
          <a style={{ color: "white" }} href={git} target="_blank">
            Github <BsGithub size={25} />
          </a>
        </button>
      </div>
    </Col>
  );
}
