'use client';

import { Col, Container, Row, Button } from 'react-bootstrap';
import './globals.css';
import { useSession } from 'next-auth/react';

/** The Home page. */
const Home = () => {
  const { data: session } = useSession();

  const handleClick = () => {
    if (session) {
      window.location.href = '/sessions';
    } else {
      window.location.href = '/auth/signin';
    }
  };

  return (
    <main>
      <Container id="landing-page" fluid className="py-3">
        <Row id="home" className="about-row align-middle text-center vh-100">
          <Col xs={12} className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="title">
              <strong>Study</strong>
            </h1>
            <h1 className="title">
              <strong>Buddy</strong>
            </h1>
            <h2 className="py-4">&quot;Your study success starts with a buddy&quot;</h2>
            <Button className="get-started" onClick={handleClick}>
              <span className="text-decoration-none" style={{ color: 'black' }}>
                Get Started
              </span>
            </Button>
          </Col>
        </Row>
        <Row id="about" className="tutorial-row vh-100">
          <h1 className="mt-5">What is Study Buddy?</h1>
          <Col className="col-centered">
            <div className="container_temp">
              <div className="overlay_temp text-center">Project Image Here</div>
            </div>
          </Col>
          <Col className="col-centered">
            <div className="container">
              <div className="overlay" />
              <p className="text">
                Study buddy is an application to find a buddy to study with. With study buddy, you can find and schedule
                study sessions.
              </p>
            </div>
          </Col>
        </Row>
        <Row id="tutorial" className=" vh-100">
          <h1 className="mt-5">Tutorial</h1>
          <Col className="vid-col-centered">
            <div className="container">
              <div className="vid-overlay" />
              <p className="text pt-5">This is the video demo</p>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
