import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-topline">
          <p>Software Developer</p>
          <p>Portfolio / 2026</p>
        </div>
        <div className="hero-layout">
          <div className="hero-name">
            <h1>Richard Hanly</h1>

            <div className="hero-meta hero-meta-under-name">
              <span>Central Texas</span>
              <span>B.A.S. Software Development</span>
              <span>Austin Community College</span>
            </div>
          </div>

          <div className="hero-introduction">
            <p className="hero-statement">
              I build software for
              <span> real-world systems.</span>
            </p>

            <p className="hero-description">
              Full-stack applications, data systems, automation, analytics, and
              infrastructure built around practical problems.
            </p>

            <div className="hero-primary-links">
              <Link to="/projects" className="primary-button">
                View Projects
              </Link>

              <a
                href="https://github.com/richardrhanly-us"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/richardhanly/"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-featured">
        <div className="section-heading-row">
          <div>
            <p className="section-label">Featured Work</p>
            <h2>Selected Projects</h2>
          </div>

          <Link to="/projects" className="text-link">
            View All Projects →
          </Link>
        </div>

        <div className="project-grid">
          <article className="project-card">
            <img
              src="/images/sortview-dashboard.png"
              alt="SortView analytics dashboard"
              className="project-image"
            />

            <div className="project-content">
              <h3>SortView</h3>

              <p>
                A multi-part system for collecting, storing, and visualizing
                automated materials handler activity for library operations.
              </p>

              <p className="tech">Python · FastAPI · PostgreSQL · Streamlit</p>

              <div className="project-links">
                <Link to="/projects/sortview">View Project</Link>
              </div>
            </div>
          </article>

          <article className="project-card">
            <img
              src="/images/Architecture-diagram.png"
              alt="Cloud Reliability Lab AWS architecture diagram"
              className="project-image"
            />

            <div className="project-content">
              <h3>AWS Cloud Reliability Lab</h3>

              <p>
                A Terraform-managed AWS reliability environment for automated
                deployment, centralized monitoring, controlled failure testing,
                and service recovery.
              </p>

              <p className="tech">
                AWS · Terraform · Linux · nginx · systemd · CloudWatch
              </p>

              <div className="project-links">
                <Link to="/projects/cloud-reliability-lab">View Project</Link>
              </div>
            </div>
          </article>

          <article className="project-card">
            <img
              src="/images/GIS-image.png"
              alt="Water Utility GIS Operations Dashboard"
              className="project-image"
            />

            <div className="project-content">
              <h3>Water Utility GIS Dashboard</h3>

              <p>
                An interactive GIS application for visualizing, filtering,
                inspecting, and analyzing simulated water utility
                infrastructure.
              </p>

              <p className="tech">
                React · TypeScript · ArcGIS · Vitest · GitHub Actions
              </p>

              <div className="project-links">
                <Link to="/projects/water-utility-gis">View Project</Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;
