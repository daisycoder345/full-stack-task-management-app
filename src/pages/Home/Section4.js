import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
    <section className="promotion_section">
        <Container>
            <Row className="align-items-center">
                <Col lg={6} classname="text-center mb-5 mb-lg-0">
                <img src={PromotionImage} className="img-fluid" alt="Promotion" />


                </Col>

                <Col lg={6} className="px-5">
                <h2>Nothing brings people together like a good burger</h2>
                <p>Bienvenue 
                      une expérience inoubliable. Que vous ayez envie 
                      d'un cheeseburger classique ou de quelque chose 
                      de plus aventureux, nous avons de quoi satis</p>

                   <ul>
                    <li>
                        <p>
                        cheeseburger classique ou de quelque chose de plus aventureux, nous avons de quoi satis
                        </p>
                    </li>
                    <li>
                        <p>
                        cheeseburger classique ou de quelque chose de plus aventureux, nous avons de quoi satis

                        </p>
                    </li>
                    <li>
                        <p>
                        cheeseburger classique ou de quelque chose de plus aventureux, nous avons de quoi satis

                        </p>
                    </li>
                    </ul>   

                </Col>
            </Row>
        </Container>
    </section>
   { /* BG Parallax Scroll */}
   <section className="bg_parallax_scroll"></section>
    </>
  )
}

export default Section4