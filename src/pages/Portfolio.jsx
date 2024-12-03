import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "../components/CardComponent";

const Portfolio = () => {
  const projects = [
    {
      title: "Pawsitive Connection",
      image: "pawSS.png",
      description: "Pet adoption site",
      link: "https://pawsitive-connection-ruys.onrender.com/",
    },
    {
      title: "Cookmate",
      image: "cookmateSS1.png",
      description: "Recipe sharing",
      link: "https://cookmate-755p.onrender.com",
    },
    {
      title: "Film Fetcher",
      image: "/filmfetcherSS.png",
      description: "Find movies and tv shows to watch",
      link: "https://ckisi.github.io/film-fetcher/",
    },
    {
      title: "Tech Blog",
      image: "techblogSS1.png",
      description: "Blog using PostgreSQL",
      link: "https://tech-blog-ncr7.onrender.com/",
    },
    {
      title: "Task Board",
      image: "taskboardSS.png",
      description: "Board to keep track of tasks",
      link: "https://ckisi.github.io/task-board/",
    },
    {
      title: "Weather Dashboard",
      image: "weatherdashboardSS.png",
      description: "Find the weather for any location using weather API",
      link: "https://ckisi.github.io/weather-dashboard/",
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">My Portfolio</h1>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} sm={6} xs={12} key={index}>
            <CardComponent
              title={project.title}
              image={project.image}
              description={project.description}
              link={project.link}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
