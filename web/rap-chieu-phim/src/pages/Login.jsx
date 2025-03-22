import React, { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        matKhau: password, // Phải trùng với backend (matKhau)
      });

      if (response.data.status === "success") {
        setSuccess("Đăng nhập thành công!");
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Lưu user vào localStorage
        window.location.href = "/"; // Điều hướng về trang chính
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("Có lỗi xảy ra. Vui lòng thử lại.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card style={{ width: "400px", padding: "20px" }}>
        <Card.Body>
          <h2 className="text-center">Đăng nhập</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Nhập email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4 w-100">
              Đăng nhập
            </Button>
          </Form>
          <p className="mt-3 text-center">
            Chưa có tài khoản? <a href="/register">Đăng ký ngay</a>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
