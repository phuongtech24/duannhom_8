import React from "react";
import { useNavigate } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    image: "/images/avengers.jpg",
    description: "Nhóm Avengers hợp lực để đảo ngược hậu quả của cú búng tay.",
  },
  {
    id: 2,
    title: "Inception",
    image: "/images/inception.jpg",
    description: "Một nhóm đặc vụ xâm nhập vào giấc mơ để đánh cắp bí mật.",
  },
  {
    id: 3,
    title: "Joker",
    image: "/images/joker.jpg",
    description: "Một câu chuyện về Arthur Fleck, người trở thành Joker huyền thoại.",
  },
];

const Movies = () => {
  const navigate = useNavigate(); // Hook để điều hướng

  return (
    <div className="container mt-4">
      <h1 className="text-center">Danh sách phim</h1>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-4">
            <div className="card">
              <img src={movie.image} className="card-img-top" alt={movie.title} />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.description}</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => navigate("/booking")} // Điều hướng đến trang đặt vé
                >
                  Đặt vé ngay
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
