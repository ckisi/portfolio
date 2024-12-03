import React from "react";
import { Card } from "react-bootstrap";

const CardComponent = ({ title, image, description, link }) => {
  return (
    <Card className="mb-4" style={{ width: "18rem" }}>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </a>
    </Card>
  );
};

export default CardComponent;
