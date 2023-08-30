import React from 'react';
import "./About.scss";

import { Container, Row, Col, Image } from 'react-bootstrap';
function About() {
  return (
    <div className="about">
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Image src="https://svmsolutions.b-cdn.net/wp-content/uploads/2020/01/converting-about-us-page.jpg" alt="About Us" fluid />
        </Col>
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum aliquet tortor eu dignissim. Vivamus
            euismod, ipsum eget efficitur facilisis, metus mauris dignissim lorem, eget volutpat risus lectus vel nisl.
          </p>
          <p>
            Phasellus nec sem nec est interdum porttitor. Sed in arcu quis ipsum auctor euismod nec vel eros. In vitae
            justo malesuada, laoreet libero at, hendrerit velit. Fusce vel posuere tellus, ac pharetra neque. Fusce
            suscipit sapien vel mauris posuere convallis.
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
};
export default About;
