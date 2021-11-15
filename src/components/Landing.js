import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button, Nav, Navbar } from 'react-bootstrap'
import emoji from '../emoji.jpg'
import { Link } from "react-scroll";
import { resumeLink } from '../data.js';
//import Zoom from 'react-reveal/Zoom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Landing = () => {

    const [colorChange, setColorChange] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset >= 50) {
                setColorChange(true);
            } else {
                setColorChange(false);
            }
        });

    }, [])



    return (
        <Container fluid id="grad" className="py-5">

            <Navbar fixed="top" collapseOnSelect expand="md" className="pt-5" id={colorChange ? 'navcolorChange' : 'nav'} style={{
                paddingRight: '6rem', paddingLeft: '2rem', textAlign: 'end',
                placeContent: 'flex-end'
            }}>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end'>

                    <Nav>
                        <Nav.Item>
                            <Link activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-850}
                                duration={200}>
                                <Nav.Link eventKey="1">About</Nav.Link></Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={200}>
                                <Nav.Link eventKey="2">Skills</Nav.Link></Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={200}>
                                <Nav.Link eventKey="3">Projects</Nav.Link></Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={200}>
                                <Nav.Link eventKey="4">Contact</Nav.Link></Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Container id="hero-container" className="rounded shadow p-5" style={{ minWidth: '500px', background: 'rgba(255, 255, 255, 0.52)', marginTop: '7rem' }}>
                <Row id="hero-row" xs={1} md={2} lg={2} className="justify-content-center">
                    <Col data-aos="fade-up" data-aos-duration="1500" className="m-2 w-auto">
                        <Card id="hero-card" className="shadow rounded-3 p-4" style={{
                            maxWidth: '18rem', textAlign: '-webkit-center',
                            alignItems: 'center', background: 'rgba(255, 255, 255, 0.52)'
                        }}>
                            <Card.Img variant="top" src={emoji} className="w-50 rounded-circle shadow" />
                            <Card.Body>
                                <Card.Title><h5 id="greet">Hello!</h5></Card.Title>
                                <Card.Text >
                                    <p id="intro" className="lead" style={{ color: '#040404' }} > <b>I'm</b> Rahul Chauhan <br></br>
                                        MERN Stack Web Dev<br></br>
                                        Java Programmer</p>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col data-aos="fade-down" data-aos-duration="1500" style={{
                        alignself: 'center',
                        paddingTop: '2rem',
                        textAlign: 'center', alignSelf: 'center'
                    }}><p id="about" className="lead" style={{ color: '#040404', fontWeight: '300' }}> A Self-Motivated Web Developer using MERN Stack.<br></br>
                            Passionate and Interested in exploring <br></br> things and learning new things.<br></br>
                            A Java Programming Enthusiast too! <br></br></p>
                        <a
                            href={resumeLink.link} rel="noreferrer" target="_blank"
                            download
                        >
                            <Button id="gradbuttons" style={{ background: 'linear-gradient(to right, #30CFD0 0%, #330867 100%)', border: 'none', borderRadius: 'unset', fontWeight: '500', letterSpacing: '3px' }} className="btn rounded m-4">Resume</Button></a>
                    </Col>
                </Row>
            </Container>


        </Container>
    )
}

export default Landing
