import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import fi_lab1 from '../assets/fi_lab1.jpg'
import fi_lab2 from '../assets/fi_lab2.jpg'
import fi_lab3 from '../assets/fi_lab3.jpg'
import fi_lab4 from '../assets/fi_lab4.jpg'
const images = [fi_lab1, fi_lab2, fi_lab3, fi_lab4];

// Function to chunk the array dynamically based on screen size
const chunkArray = (arr, chunkSize) => {
  let chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

const ResponsiveCarousel = () => {
  const [chunks, setChunks] = useState([]);

  useEffect(() => {
    // Function to determine chunk size based on screen width
    const updateChunks = () => {
      let chunkSize = 1; // Default: Small screens

      if (window.innerWidth >= 992) {
        chunkSize = 4; // Large screens (≥992px)
      } else if (window.innerWidth >= 768) {
        chunkSize = 2; // Medium screens (≥768px, <992px)
      }

      setChunks(chunkArray(images, chunkSize));
    };

    updateChunks(); // Initial call
    window.addEventListener("resize", updateChunks);
    return () => window.removeEventListener("resize", updateChunks);
  }, []);

  return (
    <Carousel interval={3000} controls indicators className="mt-3">
      {chunks.map((group, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center align-items-center gap-4">
            {group.map((imgSrc, i) => (
              <img key={i} src={imgSrc} alt="" width={300} height={300} className="img-fluid" />
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ResponsiveCarousel;
