import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { data } from '../data.js'
import Cards from './Cards'
import { RoughNotation } from "react-rough-notation";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Projects = ({ id }) => {

    const [animate, setanimate] = useState(false);

    useEffect(() => {
        var projectdiv = document.getElementById("projects");
        window.addEventListener("scroll", () => {

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (window.pageYOffset <= projectdiv.offsetTop + 100)) {
                // true for mobile device
                setanimate(true);
                return;
            }
            else if (window.pageYOffset >= projectdiv.offsetTop - 150) {
                setanimate(true);
            }
            else {
                setanimate(false);
            }
        });

    }, [])

    return (
        <Container id={id} fluid className="bg-white shadow p-4 mt-5" style={{ minWidth: '1000px', paddingBottom: '3rem !important', paddingRight: '5rem !important', paddingLeft: '5rem !important', textAlign: '-webkit-center' }}>

            <h2 className="text-center" style={{ margin: '2rem', marginBottom: '4rem' }}>
                <RoughNotation type="highlight" show={animate} color="#fff176">
                    Projects
                </RoughNotation></h2>
            <Row xs={1} md={2} lg={2} >

                {data.map(post => (
                    <Col data-aos="zoom-in" data-aos-duration="1000" key={post.title}>
                        <Cards data={post} />
                    </Col>

                ))}

            </Row>

        </Container>
    )
}

export default Projects
