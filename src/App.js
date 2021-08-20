import mp from './ucla marcus.JPG';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <div className="img-container">
              <img src={mp} alt="mp"></img>
              <div className="vl"></div>
            </div>
          </Col>

          <Col xs={12} sm={8}>
            <div className="content">
              <div className="text-container">
                <div className="greeting-head">
                  Hi! <span className="wave">👋</span> I'm Marcus. 
                </div>
                <div className="greeting-text">
                  Glad you came! Here's a little about me:
                </div>
                <hr></hr>
                {/* <hr/> */}
                <div className="about-container">
                  <ul className="about-text">
                    <li>🐻&nbsp; Rising senior studying CS at <span className="ucla"><a className="about-link" href="https://www.cs.ucla.edu/" target="_blank">UCLA</a></span></li>
                    <li>🧑‍💻&nbsp; SDE Intern at <span className="aws"><a className="about-link" href="https://aws.amazon.com/" target="_blank">Amazon Web Services</a></span></li>
                    <li>📚&nbsp; Project Manager and Consultant at <span className="tbg"><a className="about-link" href="https://www.thebruingroupconsulting.com/" target="_blank">The Bruin Group</a></span></li>
                    <li>🕺&nbsp; Pre-pandemic Dancer at <span className="koreos"><a className="about-link" href="https://www.youtube.com/watch?v=8iFPm9Nfb3g" target="_blank">Koreos</a></span> and <span className="sama"><a className="about-link" href="https://www.youtube.com/watch?v=DK_MgCA4YZg&list=PLxpuy5i_iKW4BW9i6gukBXXfd_AiirRCz&index=4" target="_blank">Samahang Modern</a></span></li>
                    <li>🎮&nbsp; Hard-stuck iron Valorant gamer</li>
                  </ul>
                </div>
              </div>
              <div className="links-container">
                <div className="links-group">
                  <a className="link-text" href="https://www.linkedin.com/in/marcusrpearce/" target="_blank">linkedin</a>
                  <a className="link-text" href="https://drive.google.com/file/d/1FDWxdG899Z7PVG1dH9yVCRUBdGDNC535/view?usp=sharing" target="_blank">resume</a>
                  <a className="link-text" href="https://github.com/marcuspearce" target="_blank">github</a>
                </div>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default App;
