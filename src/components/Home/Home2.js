import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/photo.png';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn, FaStackOverflow, FaTelegram } from 'react-icons/fa';

function Home2() {
  return (
    <Container fluid className='home-about-section mb-5' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              I have worked in full stack engineering for my entire over 9 years
              career and my commitment to critical thinking and attention to
              detail have gotten me to where the senior full stack developer in
              Quarashi, Inmetrics, Ticket Kingdom company. I am self-motivated,
              energetic collaborator who thrives on working in a fast-paced
              enrivonmnet with tight deadlines and have a desire to stay updated
              on current and new technologies. So I have engaged as a role of
              leader in Ticket Kingdom company, contributing to make a
              innovative result and better progress.
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img
                src={myImg}
                className='img rounded-circle'
                width={350}
                height={350}
                alt='avatar'
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social mt-5'>
            <h1>FIND ME ON</h1>
            <p>
              Please feel free to <span className='purple'>Connect </span>with
              me ...
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/glistenstar'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'>
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://stackoverflow.com/users/14933532/glistenstar'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'>
                  <FaStackOverflow />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/marko-kujacic-761b12230/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'>
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.showwcase.com/glistenstar'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                  style={{ textDecoration: 'none' }}>
                  <p>S</p>
                </a>
              </li>

              <li className='social-icons'>
                <a
                  href='https://t.me/GlistenSTAR'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                  style={{ textDecoration: 'none' }}>
                  <FaTelegram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
