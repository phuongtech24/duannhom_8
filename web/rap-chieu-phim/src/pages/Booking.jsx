import React, { useState } from "react";
import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";

const movies = [
  { id: 1, title: "Avengers: Endgame" },
  { id: 2, title: "Inception" },
  { id: 3, title: "Joker" },
];

const showtimes = ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "9:30 PM"];

const seats = Array.from({ length: 20 }, (_, i) => i + 1);

const Booking = () => {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedShowtime, setSelectedShowtime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seat)
        ? prevSeats.filter((s) => s !== seat)
        : [...prevSeats, seat]
    );
  };

  const handleBooking = () => {
    if (!selectedMovie || !selectedShowtime || selectedSeats.length === 0) {
      alert("Vui lòng chọn đầy đủ thông tin đặt vé!");
      return;
    }
    alert(
      `Bạn đã đặt vé thành công!\nPhim: ${selectedMovie}\nSuất chiếu: ${selectedShowtime}\nGhế: ${selectedSeats.join(", ")}`
    );
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center">🎟️ Đặt vé xem phim</h2>

      {/* Chọn phim */}
      <Form.Group>
        <Form.Label>Chọn phim:</Form.Label>
        <Form.Control
          as="select"
          value={selectedMovie}
          onChange={(e) => setSelectedMovie(e.target.value)}
        >
          <option value="">-- Chọn phim --</option>
          {movies.map((movie) => (
            <option key={movie.id} value={movie.title}>
              {movie.title}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      {/* Chọn suất chiếu */}
      <Form.Group className="mt-3">
        <Form.Label>Chọn suất chiếu:</Form.Label>
        <Row>
          {showtimes.map((time, index) => (
            <Col key={index} xs={4} md={2} className="mb-2">
              <Button
                variant={selectedShowtime === time ? "primary" : "outline-dark"}
                onClick={() => setSelectedShowtime(time)}
                className="w-100"
              >
                {time}
              </Button>
            </Col>
          ))}
        </Row>
      </Form.Group>

      {/* Chọn ghế ngồi */}
      <Form.Group className="mt-3">
        <Form.Label>Chọn ghế:</Form.Label>
        <Row>
          {seats.map((seat) => (
            <Col key={seat} xs={3} md={2} className="mb-2">
              <Button
                variant={selectedSeats.includes(seat) ? "success" : "outline-secondary"}
                onClick={() => toggleSeat(seat)}
                className="w-100"
              >
                {seat}
              </Button>
            </Col>
          ))}
        </Row>
      </Form.Group>

      {/* Nút đặt vé */}
      <div className="text-center mt-4">
        <Button variant="danger" size="lg" onClick={handleBooking}>
          Đặt vé ngay
        </Button>
      </div>
    </Container>
  );
};

export default Booking;
