import React from "react";
import { Container, Navbar, Nav, Card, Row, Col, Button } from "react-bootstrap";

const movies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    image: "https://via.placeholder.com/300x400",
  },
  {
    id: 2,
    title: "Inception",
    image: "https://via.placeholder.com/300x400",
  },
  {
    id: 3,
    title: "Joker",
    image: "https://via.placeholder.com/300x400",
  },
];

const Home = () => {
  return (
    <>
    
      <div
        style={{
          backgroundImage: "url('https://via.placeholder.com/1500x500')",
          height: "300px",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>Chào mừng đến với Hub Cinemas!</h1>
      </div>

      {/* Danh sách phim nổi bật */}
      <Container className="mt-4">
        <h2 className="text-center">🎬 Phim nổi bật</h2>
        <Row>
          {movies.map((movie) => (
            <Col key={movie.id} md={4} className="mb-3">
              <Card>
                <Card.Img variant="top" src={movie.image} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Button variant="primary">Xem ngay</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="text-center p-3 bg-dark text-white mt-4">
        © 2025 Hub Cinemas - All Rights Reserved
      </footer>
    </>
  );
};

export default Home;
