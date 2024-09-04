import React from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import './home.css'; // Importing the Home-specific CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome

const Home = () => {
  return (
    <div>
      {/* Welcome Section */}
      <section id="home" className="min-vh-100 d-flex align-items-center">
        <Container>
          <Row>
            <Col md={12}>
              <h1 className="text-uppercase fw-semibold display-1">Welcome to Artshine</h1>
              <h4 className="mt-3 mb-4">
                <i>“Art is not what you see, but what you make others see.” <br /> ~Edgar Degas</i>
              </h4>
              <Button
                className="btn btn-light"
                onClick={() => window.location.href = 'https://www.instagram.com/arttshine_/?igsh=MXBwaHg2dzY2bjRsdA%3D%3D'}
              >
                <i className="fab fa-instagram"></i>&nbsp;&nbsp;SAY HELLO TO ART!!!
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Carousel Section */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="https://plus.unsplash.com/premium_photo-1673514503544-1b8c10dd8019?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3w0fHx8ZW58MHx8fHx8" alt="First slide" />
          <Carousel.Caption>
            <h3>Abstract Visions</h3>
            <p>Dive into bold, imaginative art that transcends reality.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://c4.wallpaperflare.com/wallpaper/161/191/646/macro-paint-blur-palette-wallpaper-preview.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h3>Dynamic Figures</h3>
            <p>Admire expressive, movement-filled art that captures the human form in action.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://i0.wp.com/artpaintingblog.com/wp-content/uploads/2022/11/lake-cover.jpg?fit=1000%2C679&ssl=1" alt="Third slide" />
          <Carousel.Caption>
            <h3>Serene Seascapes</h3>
            <p>Bask in tranquil, ocean-inspired scenes that evoke calm and peace.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Image and Information Section */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <img src="https://www.straight.com/files/v3/styles/gs_standard/public/galleries/16/03/img_0920_1.jpg?itok=6MbixRuu" className="img-fluid" alt="Sample" />
          </Col>
          <Col md={6}>
            <h2>Gateway to Artistic Excellence</h2>
            <p>
              Welcome to Artshine, your premier destination for exceptional art. Our site features a diverse collection of artworks across various styles and mediums, including vibrant landscapes, abstract visions, classic portraits, and more. Explore our galleries to discover stunning paintings, intricate sketches, and mesmerizing mandalas. Whether you're an art enthusiast or a collector, Artshine offers a curated selection of high-quality pieces that captivate and inspire. Join our community to stay updated on new arrivals, artist spotlights, and exclusive events.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Work Images Section */}

      <Container className="my-5">
        <Row>
          <Col md={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://img.freepik.com/premium-photo/space-wallpaper-transparent-universe-abstract-planetarium_743855-6445.jpg?w=360" />
              <Card.Body>
                <Card.Title>Ethereal Dreamscape</Card.Title>
                <Card.Text>
                  A surreal blend of vibrant colors and abstract shapes that evoke a sense of otherworldly tranquility.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/024/600/538/large_2x/neon-colored-cityscape-skyline-at-night-generative-ai-photo.jpg" />
              <Card.Body>
                <Card.Title>Urban Echoes</Card.Title>
                <Card.Text>
                  A dynamic depiction of city life with bold, geometric patterns and contrasting hues.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5aRMrOXBN-saPVW1_ooNxO1-T7unpiTgTfb4x0II55LVOIEfQ9lbbte99M6mSU2xgOWY&usqp=CAU" />
              <Card.Body>
                <Card.Title>Nature's Harmony</Card.Title>
                <Card.Text>
                  A serene landscape combining realistic elements with a touch of impressionism.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/digital-painting-old-clock_23-2151570645.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid" />
              <Card.Body>
                <Card.Title>Reflections of Time</Card.Title>
                <Card.Text>
                  An introspective piece exploring the concept of time through layered textures.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <Container>
          <h2 className="text-center mb-4">What Our Clients Say</h2>
          <Carousel>
            {[1, 2, 3].map((item, index) => (
              <Carousel.Item key={index}>
                <Row className="justify-content-center text-center">
                  <Col md={8} lg={6}>
                    <Card className="testimonial-card p-4">
                      <Card.Body>
                        <div className="testimonial-img-container">
                          <img
                            src={`https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg`}
                            className="rounded-circle"
                            alt={`Client ${item}`}
                          />
                        </div>
                        <h5 className="mt-3">Client {item}</h5>
                        <p className="testimonial-text">
                          "This is a testimonial description from client {item}. Excellent service and
                          support throughout the project."
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>
    </div>
  );
};

export default Home;
