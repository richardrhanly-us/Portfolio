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
              <a
                href="https://github.com/richardrhanly-us"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/richardhanly/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="mailto:richardrhanly@gmail.com">
                richardrhanly@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="hero-ribbon">
          <div className="hero-footer">
            <article className="hero-highlight">
              <span>Based In</span>
              <p>Central Texas</p>
            </article>

            <article className="hero-highlight">
              <span>Education</span>
              <p>B.A.S. Software Development</p>
              <small>Austin Community College</small>
            </article>

            <article className="hero-highlight">
              <span>Credentials</span>

              <div className="credential-list">
                <p>Microsoft Office Specialist: Excel 2019 Associate</p>
                <p>Occupational Skills Award — Computer Programming</p>
              </div>

              <small>Microsoft · Austin Community College</small>
            </article>

            <article className="hero-highlight">
              <span>Recognition</span>
              <p>Core Values Award</p>
              <small>City of New Braunfels</small>
            </article>
          </div>

          <div className="hero-footer-actions">
            <Link to="/projects" className="hero-work-link">
              Selected work ↓
            </Link>
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
              src="/images/rotationlab.png"
              alt="RotationLab NBA lineup and rotation analysis application"
              className="project-image"
            />

            <div className="project-content">
              <h3>RotationLab</h3>

              <p>
                A full-stack NBA lineup and rotation analysis application for
                comparing five-man units, evaluating replacements, and exploring
                player combinations.
              </p>

              <p className="tech">
                React · TypeScript · FastAPI · Python · NBA Data
              </p>

              <div className="project-links">
                <Link to="/projects/rotationlab">View Project</Link>
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
