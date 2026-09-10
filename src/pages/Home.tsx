import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero-header">
          <p className="home-role">Software Developer</p>
        </div>

        <div className="home-name-block">
          <h1>Richard Hanly</h1>
        </div>

        <div className="home-intro-grid">
          <div className="home-intro-copy">
            <p className="home-intro-statement">
              I build software that connects to real equipment, tracks operational data,
              and turns messy workflows into tools people can actually use.
            </p>

            <div className="home-actions">
              <Link to="/projects" className="primary-button">
                View Projects
              </Link>

              <a
                href="https://github.com/richardhanly-us"
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
          <div className="home-education">
            <span>Background</span>
            <p>B.A.S. Software Development</p>
            <small>Austin Community College · Central Texas</small>
          </div>
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