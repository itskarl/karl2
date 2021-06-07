import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faPlusCircle,
  faGraduationCap,
  faCogs,
  faCode,
  faCalendarCheck,
  faSearchPlus,
  faMarker,
  faFileExport,
  faEnvelope,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function App() {
  const [iconStyle, setIconStyle] = useState(faAt);

  return (
    <div className="App">
      <div className="main-body">
        <section className="section-intro">
          <div className="content-block name-container">
            <div className="name animated fadeInUp">KARL RODULFO</div>
            <div className="subtitle animated fadeInDown">
              Frontend Engineer
            </div>
          </div>
        </section>

        <section className="section-work">
          <div className="resume-title content-block">
            <div className="title">RESUME &nbsp;</div>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1tmIurUx5q66yT4HyVhKfGeLeqJGUD7Nu/view?usp=sharing"
            >
              <FontAwesomeIcon icon={faFileExport} color="#2d3047" />
            </a>
          </div>
          <div className="content-block resume-block">
            <div className="resume-container">
              <div className="work-experience">
                <div className="job-row">
                  <div className="bullet-container">
                    <FontAwesomeIcon
                      size="2x"
                      icon={faBriefcase}
                      color="#2d3047"
                    />
                  </div>
                  <div className="title">&nbsp;Work Experience</div>
                </div>

                <div className="job-row">
                  <div className="bullet-container bullet" />
                  <div className="job-body">
                    <div className="job-info">
                      <div className="job-logo gooten"> </div>
                      <div>
                        <p className="job-title">FRONT END DEVELOPER</p>
                        <p>Gooten | 11.19 - Present</p>
                      </div>
                    </div>
                    <div>
                      <button className="more-info">
                        <FontAwesomeIcon icon={faPlusCircle} color="#2d3047" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="job-row">
                  <div className="bullet-container bullet" />
                  <div className="job-body">
                    <div className="job-info">
                      <div className="job-logo unpakt"> </div>
                      <div>
                        <p className="job-title">FRONT END DEVELOPER</p>
                        <p>Unpakt | 09.18 - 11.19</p>
                      </div>
                    </div>
                    <div>
                      <button className="more-info">
                        <FontAwesomeIcon icon={faPlusCircle} color="#2d3047" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="job-row">
                  <div className="bullet-container bullet" />
                  <div className="job-body">
                    <div className="job-info">
                      <div className="job-logo discovery"> </div>
                      <div>
                        <p className="job-title">TELEVISION PRODUCER</p>
                        <p>Discovery Channel | 04.10 02.18</p>
                      </div>
                    </div>
                    <div>
                      <button className="more-info">
                        <FontAwesomeIcon icon={faPlusCircle} color="#2d3047" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="job-row">
                  <div className="bullet-container bullet" />
                  <div className="job-body">
                    <div className="job-info">
                      <div className="job-logo news"> </div>
                      <div>
                        <p className="job-title">NEWS RESEARCHER</p>
                        <p>NBC News | 2.09 - 04.10</p>
                      </div>
                    </div>
                    <div>
                      <button className="more-info">
                        <FontAwesomeIcon icon={faPlusCircle} color="#2d3047" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-container">
              <div className="work-experience">
                <div className="job-row">
                  <div className="bullet-container">
                    <FontAwesomeIcon
                      size="2x"
                      icon={faGraduationCap}
                      color="#2d3047"
                    />
                  </div>
                  <div className="title">&nbsp;Education</div>
                </div>

                <div className="job-row">
                  <div className="bullet-container bullet" />
                  <div className="job-body">
                    <div className="job-info">
                      <div className="edu-logo nycda"> </div>
                      <div>
                        <p className="job-title">NY CODE & DESIGN</p>
                        <p>Software Enigneering Intensive</p>
                      </div>
                    </div>
                    <div>
                      <button className="more-info">
                        <FontAwesomeIcon icon={faPlusCircle} color="#2d3047" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="job-row">
                  <div className="bullet-container bullet" />
                  <div className="job-body">
                    <div className="job-info">
                      <div className="edu-logo sju"> </div>
                      <div>
                        <p className="job-title">ST JOHN'S UNIVERSITY</p>
                        <p>B.S. Communications TV & Film</p>
                      </div>
                    </div>
                    <div>
                      <button className="more-info">
                        <FontAwesomeIcon icon={faPlusCircle} color="#2d3047" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="resume-container">
              <div className="work-experience">
                <div className="job-row">
                  <div className="bullet-container">
                    <FontAwesomeIcon size="2x" icon={faCode} color="#2d3047" />
                  </div>
                  <div className="title">&nbsp; LANGUAGES</div>
                </div>
                <div className="skill-row">
                  <div className="main-skill">
                    <i
                      style={{ color: "#ffc457" }}
                      className="devicon-html5-plain"
                    ></i>
                  </div>
                  <p>HTML/HTML5, Accessibility, SEO</p>
                </div>

                <div className="skill-row">
                  <div className="main-skill">
                    <i
                      style={{ color: "#4effee" }}
                      className="devicon-css3-plain"
                    ></i>
                  </div>
                  <p>CSS/CSS3, SASS, Bootstrap, Responsive Design</p>
                </div>

                <div className="skill-row">
                  <div className="main-skill">
                    <i
                      style={{ color: "#87c2f7" }}
                      className="devicon-javascript-plain"
                    ></i>
                  </div>
                  <p>Javascript, ES6, React JS, Storybook, ES6, Angular JS</p>
                </div>

                <div className="skill-row">
                  <div className="main-skill">
                    <i
                      style={{ color: "#ff5572" }}
                      className="devicon-ruby-plain"
                    ></i>
                  </div>
                  <p>Ruby, Ruby on Rails</p>
                </div>
              </div>
            </div>

            <div className="resume-container">
              <div className="work-experience">
                <div className="job-row">
                  <div className="bullet-container">
                    <FontAwesomeIcon size="2x" icon={faCogs} color="#2d3047" />
                  </div>
                  <div className="title">&nbsp;SKILLS</div>
                </div>
                <div className="skill-row">
                  <div className="main-skill">
                    <FontAwesomeIcon icon={faCalendarCheck} />
                  </div>
                  <p>Project Management</p>
                </div>

                <div className="skill-row">
                  <div className="main-skill">
                    <FontAwesomeIcon icon={faSearchPlus} />
                  </div>
                  <p>SEO Implemenation</p>
                </div>

                <div className="skill-row">
                  <div className="main-skill">
                    <FontAwesomeIcon icon={faMarker} />
                  </div>
                  <p>Copywrinting</p>
                </div>

                <div className="skill-row">
                  <div className="main-skill">
                    <i className="devicon-photoshop-line colored"></i>
                  </div>
                  <p>Adobe Photoshop, Illustrator</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-contact">
          <div className="contact-container">
            <div className="large-icon">
              <FontAwesomeIcon icon={iconStyle} />
            </div>
            <a
              href="mailto:karlrodulfo@gmail.com"
              rel="noopener noreferrer"
              className="contact-button"
              onMouseOver={() => setIconStyle(faEnvelope)}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <div>
                <p>Email</p>
                <p>karlrodulfo@gmail.com</p>
              </div>
            </a>
            <a
              href="https://github.com/itskarl"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
              onMouseOver={() => setIconStyle(faGithubAlt)}
            >
              <FontAwesomeIcon icon={faGithubAlt} />
              <div>
                <p>Github</p>
                <p>github.com/itskarl</p>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/karlrodulfo"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
              onMouseOver={() => setIconStyle(faLinkedinIn)}
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
              <div>
                <p>LinkedIn</p>
                <p>linked.com/in/karlrodulfo</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
