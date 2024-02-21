import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quarashi_market from "../../Assets/Projects/quarashi_market.png";
import ticketkingdom from "../../Assets/Projects/ticketkingdom.png";
import spectre from "../../Assets/Projects/spectre.png";
import quarashi from "../../Assets/Projects/quarashi.png";
import suicide from "../../Assets/Projects/suicide.png";
import emotion from "../../Assets/Projects/emotion.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <h1 style={{height: "50vh", marginTop: "60px"}}>Adding soon...</h1> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quarashi}
              isBlog={false}
              title="Quarashi"
              description="Quarashi is big DAO and a mobile for the DeFi future Blockchain UI MultiChain Crypto wallet, Privacy Chat, DEX, IDO Launchpad, VPN, Incognito Browser, Airdrops.Experienced in development RWD and SPA with Sveltekit, Svelte store, jQuery,Bootstrap, HTML5, Tailwind CSS, GraphQL, ES6, Babel, Express, Eslint.Understands Server Side Rendering, Virtual DOM, Performance optimization."
              ghLink="https://github.com/quarashi-network/"
              demoLink="https://quarashi.network/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spectre}
              isBlog={false}
              title="Svelte Spectre"
              description="UI-kit based on spectre.css and powered by SvelteJS. See the documentation, which is also a component explorer (storybook). Focus to make Periodic Table. Can select three ingredient or groups."
              ghLink="https://github.com/basf/svelte-spectre"
              demoLink="https://kit.metis.science/docs/components/periodictable"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quarashi_market}
              isBlog={false}
              title="Quarashi Market"
              description="it's Sub-platform for Quarashi Netowkr. Can get coin price every 5 mins and recommend news and storys. I have done this project using Sveltekit, Node.js, Coingecko api, mongodb, aws lamda, ec2. Private repo"
              ghLink="https://github.com/GlistenSTAR/Quarashi-market"
              demoLink="https://markets.quarashi.network/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticketkingdom}
              isBlog={false}
              title="Ticket Tools"
              description="This project for ticket kingdom company. Can get ticket amount from 8 sites and event notify for soldout and event new add. As stack, React.js as frontend, Backend is python, using python selenium, BS4, Node.js Puppeteer.js. This one is still private repos."
              ghLink="https://github.com/ticketkingdom"
              demoLink="https://github.com/TicketKingdom/Ticket-Tools"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/GlistenSTAR/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
