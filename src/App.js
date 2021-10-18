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
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Modal = ({ modalContent, setShowModal }) => {
  const closeModal = () => {
    if (
      document &&
      document.getElementById("backdrop") &&
      document.getElementById("modal")
    ) {
      const backdrop = document.getElementById("backdrop");
      backdrop.classList.remove("fadeIn");
      backdrop.classList.add("fadeOut");

      const modal = document.getElementById("modal");
      modal.classList.remove("fadeIn");
      modal.classList.add("fadeOutUp");
    }

    setTimeout(() => setShowModal(false), 600)
  };
  return (
    <>
      <div
        id="backdrop"
        className="modal-backdrop animated fadeIn"
        onClick={() => closeModal()}
      ></div>
      <div className="modal-container">
        <div id="modal" className="modal animated fadeInDown">
          <div className="modal-close-button" onClick={() => closeModal()}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </div>

          <div>{modalContent}</div>
        </div>
      </div>
    </>
  );
};

function App() {
  const [iconStyle, setIconStyle] = useState(faAt);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const setModal = (type) => {
    setShowModal(true);

    const body = () => {
      switch (type) {
        case "gooten":
          return {
            title: "Front End Developer",
            subtitle: "Gooten Inc · Dec 2019 - Present",
            bullets: [
              "Developed and implemented the company’s first comprehensive modular design system. Converted all UI to reusable components, which greatly accelerated front end development. Maintained the component library in Storybook JS.",
              "Responsible for migrating the company’s administrative platform from AngularJS to a more modern React framework and improved overall product performance and speed of development and delivery.",
              "Oversaw planning, development, and implementation of  multiple new features in a high traffic ecommerce admin app.",
            ],
          };
        case "unpakt":
          return {
            title: "Front End Developer",
            subtitle: "Unpakt · Oct 2018 - Dec 2019",
            bullets: [
              "Oversaw front-end design, development and implementation of all apps and features on the Unpakt.com marketplace product line.",
              "Facilitated the migration of high traffic e-commerce web applications from old frameworks (Ruby on Rails, Angular) to React JS",
              "Managed product interfaces and makes sure all web applications are optimized for SEO, accessibility, and UI/UX.",
            ],
          };
        case "discovery":
          return {
            title: "Television Producer",
            subtitle: "Discovery · Apr 2010 - Mar 2018",
            bullets: [
              "Co-produced and project managed a dozen highly rated specials and nonfiction series across multiple cable networks (Discovery Channel, Animal Planet, TLC).",
              "Worked closely with vendors and production companies to keep deliverables on time, on budget, and meeting all editorial requirements. Provided creative direction on all projects.",
            ],
          };
        case "nbc":
          return {
            title: "News Researcher",
            subtitle: "NBC News · 2009 - 2010",
            bullets: [
              "Provided breaking news updates to producers. Functioned as researcher and primary fact checker for all health-related stories for NBC News TODAY, Dateline, and Nightly News.",
              "Initiated outreach to interview subjects and conducted pre-interviews for segments.",
            ],
          };
        case "sju":
          return {
            title: "St. John's University",
            subtitle: "2004-2007",
            bullets: [
              "Bachelor of Science, Communications / Minor in Business Administration",
              " Graduated Summa Cum Laude, Salutatorian (3.98 GPA)",
              "STJ Presidential Scholar (full four-year scholarship)",
            ],
          };
        case "nycda":
          return {
            title: "New York Code & Design Academy",
            subtitle: "2018",
            bullets: [
              "Graduate of software engineering intensive (bootcamp) focusing on full-stack development. Created dynamic web applications using a variety of platforms, frameworks, and languages including: Ruby, Ruby on Rails, Javascript, jQuery, AJAX, HTML5, CSS3, sass, Postgresql, Bootstrap, SQL, Git, and Heroku.",
            ],
          };
        default:
          return {};
      }
    };

    setModalContent(
      <div>
        <div className="modal-header">
          <h2>{body().title}</h2>
          <p>{body().subtitle}</p>
        </div>
        <div className="modal-body">
          <ul>
            {body().bullets.map((pt) => (
              <li>{pt}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      {showModal && (
        <Modal modalContent={modalContent} setShowModal={setShowModal} />
      )}
      <div className="main-body">
        <section className="section-intro">
          <div className="content-block name-container">
            <div className="name animated fadeInUp">KARL RODULFO</div>
            <div className="subtitle animated fadeInDown">
              Frontend Engineer
            </div>
          </div>
          <div className="bio-container content-block">
            <div className="bio-body animated bounceInUp">
              <div className="bio-text">
                Hi! I'm a software engineer who is passionate about modern
                design, usability, clean patterns, and design systems.
              </div>
              <div className="bio-face">
                <img alt="my face" src="myface.png" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-work">
          <div className="resume-title content-block">
            <div className="title">RESUME &nbsp;</div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/document/d/1t26Q2GkD27utept7YbRbLWLP-UBWSBe_sioL3k0Zshc/edit?usp=sharing"
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
                      <button
                        className="more-info"
                        onClick={() => setModal("gooten")}
                      >
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
                      <button
                        className="more-info"
                        onClick={() => setModal("unpakt")}
                      >
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
                      <button
                        className="more-info"
                        onClick={() => setModal("discovery")}
                      >
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
                      <button
                        className="more-info"
                        onClick={() => setModal("nbc")}
                      >
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
                      <button
                        className="more-info"
                        onClick={() => setModal("nycda")}
                      >
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
                      <button
                        className="more-info"
                        onClick={() => setModal("sju")}
                      >
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
                  <p>Copywriting</p>
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
