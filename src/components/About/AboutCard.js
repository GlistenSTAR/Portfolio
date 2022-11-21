import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Marko Kujacic </span>
            from <span className="purple"> Belgrade, Serbia.</span>
            <br/> I have 8 years of experience writing web apps that span consumer productivity software to
            mission-critical financial trading platforms.
            I have worked in full stack engineering for my entire developing career and my commitment to
            critical thinking and attention to detail have gotten me to where the senior full stack developer
            in Inmetrics company.
            I am self-motivated, energetic collaborator who thrives on working in a fast-paced environment
            with tight deadlines and have a desire to stay updated on current and new technologies.
            So I have engaged as a role of leader in this company, contributing to make a innovative result
            and better progress.
            Due to pandemic, I had to end up my role in this company earlier and now I am working as
            full stack developer on upwork.
            I have keen insight into what it takes to run a successful project because I have taken part in
            different successful projects across from startup to multi vendors.
            My career goal is to have an opportunity to learn and grow my skills from a technical standpoint,
            and a chance to learn more skills over time. After reading the job description for this role, it
            sounds like this could be a good match for what I’m looking for.
            I`d love to work for the company innovative and ready to expand.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Speak less, Work more!"{" "}
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Inhale confidence, exhale doubt."{" "}
          </p>
          <footer className="blockquote-footer">Marko's Motto</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
