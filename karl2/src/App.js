import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="main-body">
        <section className="section-intro">
          <div className="content-block name-container">
            <div className="name">KARL RODULFO</div>
            <div className="subtitle">Frontend Engineer</div>
          </div>
        </section>

        <section className="section-work">
          <div className="content-block">
            <div className="resume-container">
              <div className="work-experience">
                <div className="job-row">
                  <div className="bullet-container">
                    <FontAwesomeIcon size='2x' icon={faBuilding} color='#2d3047'/>
                  </div>
                  <div className='title'>Work Experience</div>
                </div>
                <div className="job-row">
                  <div className="bullet-container bullet" />
                  <div className="job-body">
                    <div>
                      <span className='title'>Gooten Inc</span>
                      <br />
                      <span className='title-2'>Frontend Developer</span>
                    </div>
                    {/* <div className="job-desc">
                      <div>
                        Developed and implemented the company’s first
                        comprehensive Design System - converted all UI to
                        modular components, which greatly accelerated front end
                        development. Maintained the component library in
                        Storybook JS.
                      </div>
                      <div>
                        Responsible for migrating the administrative platform
                        from AngularJS to a more modern React framework.
                      </div>
                      <div>
                        Oversaw multiple feature planning, development, and
                        implementation.
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="job-row">
                  <div className="bullet-container bullet" />
                  <div className="job-body">

                  <div className="job-info">
                    <div className="job-logo unpakt"> </div>

                    <div>
                      <p className="job-title">FRONT END DEVELOPER</p>
                      <p>Unpakt | '08-Present</p>
                    </div>
                  </div>
                  <div>
                    <button className="more-info" >
                    <FontAwesomeIcon icon={faPlusCircle} color='#2d3047'/>
                      </button>
                  </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
