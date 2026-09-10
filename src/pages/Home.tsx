import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero-grid">
          <div className="home-identity">
            <p className="home-kicker">Richard Hanly / Software Developer</p>

            <h1>
              Software for systems,
              <br />
              operations, and hardware.
            </h1>

            <p className="home-summary">
              I build applications and technical systems around real-world
              workflows, operational data, infrastructure, automation, and
              physical hardware.
            </p>

            <div className="home-actions">
              <Link to="/projects" className="primary-button">
                Explore Projects
              </Link>

              <a
                href="https://github.com/richardrhanly-us"
                target="_blank"
                rel="noreferrer"
                className="home-text-link"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/richardhanly/"
                target="_blank"
                rel="noreferrer"
                className="home-text-link"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <aside className="home-profile">
            <div className="home-profile-row">
              <span>Location</span>
              <strong>Central Texas</strong>
            </div>

            <div className="home-profile-row">
              <span>Education</span>
              <strong>B.A.S. Software Development</strong>
            </div>

            <div className="home-profile-row">
              <span>College</span>
              <strong>Austin Community College</strong>
            </div>

            <div className="home-profile-row">
              <span>Focus</span>
              <strong>
                Applications · Systems · Infrastructure · Hardware Integration
              </strong>
            </div>
          </aside>
        </div>
      </section>

      <section className="home-work">
        <div className="home-work-heading">
          <p className="home-kicker">Current Systems</p>

          <div className="home-work-title-row">
            <h2>Selected Engineering Work</h2>

            <Link to="/projects" className="home-text-link">
              All Projects ↗
            </Link>
          </div>
        </div>

        <div className="home-project-list">
          <article className="home-project">
            <div className="home-project-index">01</div>

            <div className="home-project-copy">
              <p className="home-project-type">Operational Analytics</p>
              <h3>SortView</h3>

              <p>
                A multi-part system for collecting, storing, and visualizing
                automated materials handler activity for library operations.
              </p>

              <p className="home-project-tech">
                Python / FastAPI / PostgreSQL / Streamlit
              </p>

              <Link to="/projects/sortview" className="home-project-link">
                View system ↗
              </Link>
            </div>

            <Link
              to="/projects/sortview"
              className="home-project-media"
              aria-label="View SortView project"
            >
              <img
                src="/images/sortview-dashboard.png"
                alt="SortView analytics dashboard"
              />
            </Link>
          </article>

          <article className="home-project">
            <div className="home-project-index">02</div>

            <div className="home-project-copy">
              <p className="home-project-type">Infrastructure & Reliability</p>
              <h3>AWS Cloud Reliability Lab</h3>

              <p>
                A Terraform-managed AWS reliability environment for automated
                deployment, centralized monitoring, controlled failure testing,
                and service recovery.
              </p>

              <p className="home-project-tech">
                AWS / Terraform / Linux / nginx / systemd / CloudWatch
              </p>

              <Link
                to="/projects/cloud-reliability-lab"
                className="home-project-link"
              >
                View system ↗
              </Link>
            </div>

            <Link
              to="/projects/cloud-reliability-lab"
              className="home-project-media"
              aria-label="View AWS Cloud Reliability Lab project"
            >
              <img
                src="/images/Architecture-diagram.png"
                alt="Cloud Reliability Lab AWS architecture diagram"
              />
            </Link>
          </article>

          <article className="home-project">
            <div className="home-project-index">03</div>

            <div className="home-project-copy">
              <p className="home-project-type">Hardware Telemetry</p>
              <h3>Vehicle Telemetry Platform</h3>

              <p>
                A hardware-integrated telemetry platform that connects to real
                vehicles over OBD-II, records operating data, evaluates alarms,
                and replays captured road tests through the monitoring system.
              </p>

              <p className="home-project-tech">
                Python / FastAPI / WebSockets / OBD-II / React / TypeScript
              </p>

              <Link
                to="/projects/vehicle-telemetry"
                className="home-project-link"
              >
                View system ↗
              </Link>
            </div>

            <Link
              to="/projects/vehicle-telemetry"
              className="home-project-media"
              aria-label="View Vehicle Telemetry Platform project"
            >
              <img
                src="/images/telemetry_dashboard_playback.PNG"
                alt="Vehicle Telemetry Platform replaying recorded OBD-II vehicle data"
              />
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;