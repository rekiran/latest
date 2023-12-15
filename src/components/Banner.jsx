import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Banner.css";
import downloadIcon from "../assets/download.png";
import viewfileIcon from "../assets/viewfile.png";
import resume from "../assets/KiranResume-2023.pdf";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [" Software Developer", " Web Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="wrapper-banner">
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    {/*<span className="tagline">Welcome to my Portfolio</span>*/}
                    <h1>Hi! I'm Kiran</h1>
                    <br />
                    <h2>
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='[ " Software Developer", " Web Designer" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h2>
                    <p>
                      Self-driven, quick learner, passionate programmer with a
                      curious mind who enjoys solving a complex and challenging
                      real-world problems.
                    </p>

                    <div id="resumeMain">
                      <a id="resumeView" href={resume} target="_blank">
                        View Resume
                        <img src={viewfileIcon} />
                      </a>
                      <a id="resumeDownload" href={resume} download>
                        Download Resume
                        <img src={downloadIcon} />
                      </a>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
