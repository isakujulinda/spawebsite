import React, { useState } from 'react';
import './BlogModal.css';
// import blog1 from '../../assets/images/blog1.jpg';
// import blog2 from '../../assets/images/blog2.jpg';
// import blog3 from '../../assets/images/blog3.jpg';
// import blog4 from '../../assets/images/blog4.jpg';

export default function BlogModal() {
  const [modal, setModal] = useState(null);

  const blogs = [
    {
      id: 1,
      image: "https://placehold.co/400x400/png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi laudantium cupiditate fugit, impedit fugiat voluptatem?"
    },
    {
      id: 2,
      image: "https://placehold.co/400x400/png",
       title: "Lorem ipsum dolor sit amet consectetur.",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi laudantium cupiditate fugit, impedit fugiat voluptatem?"
    },
    {
      id: 3,
      image: "https://placehold.co/400x400/png",
       title: "Lorem ipsum dolor sit amet consectetur.",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi laudantium cupiditate fugit, impedit fugiat voluptatem?"
    },
    {
      id: 4,
      image: "https://placehold.co/400x400/png",
       title: "Lorem ipsum dolor sit amet consectetur.",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi laudantium cupiditate fugit, impedit fugiat voluptatem?"
    }
  ];

  const openModal = (id) => setModal(id);
  const closeModal = () => setModal(null);

  const activeBlog = blogs.find((blog) => blog.id === modal);

  return (
    <div className="blog-container">
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="blog-item"
            onClick={() => openModal(blog.id)}
          >
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
          </div>
        ))}
      </div>

      {activeBlog && (
        <div className="modal">
          <div className="overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <h2>{activeBlog.title}</h2>
            <p>{activeBlog.text}</p>
            <button className="close-modal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
