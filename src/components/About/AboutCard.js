import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Darshan </span>
            from <span className="purple"> Karur, India.</span>
            <br />I am an undergrad pursuing B.E. in Computer Technology in MIT,
            Chennai.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring the world of Security
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Doing things you love sculpts you who you truly are!"{" "}
          </p>
          <footer className="blockquote-footer">Darshan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
