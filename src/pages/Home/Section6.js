import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import User1 from "../../assets/blog/review-author-1.jpg";

import User2 from "../../assets/blog/review-author-2.jpg";
import User3 from "../../assets/blog/review-author-3.jpg";
import User5 from "../../assets/blog/review-author-5.jpg";

function Section6() {
  return (
    <section className="blog_section">
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User1} className="img-fluid" alt="User-1" />
                </div>
                <p>
                  Nous croyons en l'art de servir plus que de la bonne
                  nourriture : nous visons à offrir une expérience culinaire
                  inoubliable. Notre personnel accueillant, notre ambiance
                  conviviale et notre souci du détail garantissent que chaque
                  visite chez [Nom du Magasin de Burgers] est un moment
                  mémorable. Venez avec faim, repartez heureux !
                </p>

                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>

                <h5>BY AMELTE NEWLOVE</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User2} className="img-fluid" alt="User-2" />
                </div>
                <p>
                  Nous croyons en l'art de servir plus que de la bonne
                  nourriture : nous visons à offrir une expérience culinaire
                  inoubliable. Notre personnel accueillant, notre ambiance
                  conviviale et notre souci du détail garantissent que chaque
                  visite chez [Nom du Magasin de Burgers] est un moment
                  mémorable. Venez avec faim, repartez heureux !
                </p>

                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>

                <h5>BY AMELTE NEWLOVE</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User3} className="img-fluid" alt="User-3" />
                </div>
                <p>
                  Nous croyons en l'art de servir plus que de la bonne
                  nourriture : nous visons à offrir une expérience culinaire
                  inoubliable. Notre personnel accueillant, notre ambiance
                  conviviale et notre souci du détail garantissent que chaque
                  visite chez [Nom du Magasin de Burgers] est un moment
                  mémorable. Venez avec faim, repartez heureux !
                </p>

                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>

                <h5>BY AMELTE NEWLOVE</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User5} className="img-fluid" alt="User-5" />
                </div>
                <p>
                  Nous croyons en l'art de servir plus que de la bonne
                  nourriture : nous visons à offrir une expérience culinaire
                  inoubliable. Notre personnel accueillant, notre ambiance
                  conviviale et notre souci du détail garantissent que chaque
                  visite chez [Nom du Magasin de Burgers] est un moment
                  mémorable. Venez avec faim, repartez heureux !
                </p>

                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>

                <h5>BY AMELTE NEWLOVE</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default Section6;
