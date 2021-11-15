import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { animateScroll as scroll } from "react-scroll";
import { RoughNotation } from "react-rough-notation";
import { contact } from '../data.js'
import avatar from '../avatar.svg'



const Contact = ({ id }) => {

    const [animate, setanimate] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset >= 3300) {
                setanimate(true);
            } else {
                setanimate(false);
            }
        });

    }, [])

    const scrollToTop = (e) => {
        e.preventDefault()
        scroll.scrollToTop();
    };

    return (

        <Container id={id} className="rounded bg-white shadow p-4  mt-5" style={{ minWidth: '500px' }}>

            <h2 className="text-center" style={{ margin: '4rem' }}>
                Get in Touch
            </h2>

            <Container className="rounded shadow p-5 w-50" style={{ minWidth: 'fit-content' }}>
                <h4 id="email" style={{ textDecoration: 'underline', textAlign: 'center', paddingBottom: '2rem' }}>{contact.email}</h4>
                <Row xs={2} md={2} lg={2} className="justify-content-center">
                    <Col className="w-auto"><a href={contact.twitter} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} size="3x"></FontAwesomeIcon></a></Col>
                    <Col className="w-auto"><a href={contact.linkedin} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="3x"></FontAwesomeIcon></a></Col>
                </Row>
            </Container>
            <Container className="d-flex flex-column justify-content-center align-items-center overlay-text" style={{ position: 'relative', bottom: '4vh' }}>
                <img id="avatar" onClick={scrollToTop} style={{ width: '14rem', boxShadow: '0 5px 5px -5px #333' }} src={avatar} alt="herro" />
                <p className="lead" style={{ marginTop: '30px' }}> Made with <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="noreferrer" target="_blank" style={{ textDecoration: 'none' }}>❤️</a> by<RoughNotation type="underline" show={animate} color="#b71c1c"> Rahul</RoughNotation></p>
            </Container>


        </Container>
    )
}

export default Contact
