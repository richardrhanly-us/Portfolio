import { Link } from "react-router-dom";

import "../App.css";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Software Developer Portfolio</p>

          <h1>Richard Hanly</h1>

          <h2>
            I build practical software for data, automation, and real-world
            operations.
          </h2>

          <p className="intro">
            Software development graduate and digital services specialist with
            experience building full-stack applications, data systems, APIs, and
            operational tools.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="primary-button">
              View Projects
            </Link>

            <Link to="/about" className="secondary-button">
              About Me
            </Link>

            <a
              href="https://github.com/richardrhanly-us"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              GitHub
            </a>
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

              <p className="tech">
                Python · FastAPI · PostgreSQL · Streamlit
              </p>

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
                comparing five-man units, evaluating replacements, and
                exploring player combinations.
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