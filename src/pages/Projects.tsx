import { Link } from "react-router-dom";

function Projects() {
  return (
    <main>
      <section id="projects" className="section">
        <p className="section-label">Featured Work</p>
        <h2>Projects</h2>
        <p className="projects-intro">
          Selected work across full-stack development, data systems, automation,
          infrastructure, and applied software engineering.
        </p>
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
                <Link to="/projects/sortview" className="project-detail-link">
                  View Project →
                </Link>

                <a
                  href="https://sortview.streamlit.app/?guest=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/richardrhanly-us/amh-analytics-dashboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <img
              src="/images/library-ai-assistant.png"
              alt="Library AI Assistant interface"
              className="project-image"
            />

            <div className="project-content">
              <h3>Library AI Assistant</h3>

              <p>
                A retrieval-augmented generation application that answers
                questions from uploaded documents and returns supporting
                sources.
              </p>

              <p className="tech">
                Python · FastAPI · Chroma · OpenAI · Streamlit
              </p>

              <div className="project-links">
                <Link to="/projects/library-ai" className="project-detail-link">
                  View Project →
                </Link>

                <a
                  href="https://library-ai-assistant.streamlit.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/richardrhanly-us/library-ai-assistant"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <img
              src="/images/flowboard.png"
              alt="FlowBoard task management dashboard"
              className="project-image"
            />

            <div className="project-content">
              <h3>FlowBoard</h3>

              <p>
                A full-stack task management application with authentication,
                drag-and-drop workflows, priorities, filters, and responsive
                design.
              </p>

              <p className="tech">React · TypeScript · Supabase · Vite</p>

              <div className="project-links">
                <Link to="/projects/flowboard" className="project-detail-link">
                  View Project →
                </Link>

                <a
                  href="https://next-play-task-board-black.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/richardrhanly-us/next-play-task-board"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
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
                supporting basketball operations decision making.
              </p>

              <p className="tech">
                React · TypeScript · FastAPI · Python · NBA Data
              </p>

              <div className="project-links">
                <Link
                  to="/projects/rotationlab"
                  className="project-detail-link"
                >
                  View Project →
                </Link>

                <a
                  href="https://rotation-lab.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/richardrhanly-us/RotationLab"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
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
              <h3>Water Utility GIS Operations Dashboard</h3>

              <p>
                An interactive GIS application for visualizing, filtering,
                inspecting, and analyzing simulated water utility
                infrastructure.
              </p>

              <p className="tech">
                React · TypeScript · ArcGIS · Vitest · GitHub Actions
              </p>

              <div className="project-links">
                <Link
                  to="/projects/water-utility-gis"
                  className="project-detail-link"
                >
                  View Project →
                </Link>

                <a
                  href="https://water-utility-gis.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/richardrhanly-us/water-utility-gis"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <img
              src="/images/NBA.PNG"
              alt="NBA player performance prediction dashboard"
              className="project-image"
            />

            <div className="project-content">
              <h3>NBA Prediction Model</h3>

              <p>
                A Streamlit application that uses player game logs, feature
                engineering, and regression modeling to estimate NBA player
                scoring performance and evaluate betting lines.
              </p>

              <p className="tech">
                Python · Pandas · Machine Learning · Streamlit
              </p>

              <div className="project-links">
                <Link
                  to="/projects/nba-prediction"
                  className="project-detail-link"
                >
                  View Project →
                </Link>

                <a
                  href="https://edgeanalyticsnba.streamlit.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/richardrhanly-us/NBA_Player_Performance_Data_Pipeline"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <img
              src="/images/poker-capture.PNG"
              alt="Poker Night Tracker dashboard"
              className="project-image"
            />

            <div className="project-content">
              <h3>Poker Night Tracker</h3>

              <p>
                A full-stack tracking system for poker sessions, player
                performance, leaderboards, scanned score sheets, and
                year-over-year statistics.
              </p>

              <p className="tech">
                JavaScript · Google Apps Script · Google Sheets · Google Drive
              </p>

              <div className="project-links">
                <Link
                  to="/projects/poker-tracker"
                  className="project-detail-link"
                >
                  View Project →
                </Link>

                <a
                  href="https://script.google.com/macros/u/1/s/AKfycbyx76atANNkWPlOzC8SUJvLaeU9zpWs5G_IgWBXxyXLaDRQpCCMjAubccVFyp--DNJWfw/exec"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/richardrhanly-us/poker-night-tracker"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <img
              src="/images/aircraft-mission-simulator.png"
              alt="Aircraft Mission Systems Simulator telemetry and command interface"
              className="project-image"
            />

            <div className="project-content">
              <h3>Aircraft Mission Systems Simulator</h3>

              <p>
                A C++17 distributed-systems simulation that models aircraft
                telemetry, mission-control commands, UDP communication, fault
                detection, and command acknowledgments.
              </p>

              <p className="tech">C++17 · CMake · UDP · JSON · CTest</p>

              <div className="project-links">
                <Link
                  to="/projects/aircraft-simulator"
                  className="project-detail-link"
                >
                  View Project →
                </Link>

                <a
                  href="https://github.com/richardrhanly-us/aircraft-mission-simulator"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <img
              src="/images/rack-front-view.jpeg"
              alt="Homelab network rack and infrastructure"
              className="project-image"
            />

            <div className="project-content">
              <h3>Homelab Network Infrastructure</h3>

              <p>
                A working homelab built with UniFi, Ubuntu Server, Docker,
                Pi-hole, Unbound, Portainer, and Uptime Kuma.
              </p>

              <p className="tech">
                Linux · Docker · UniFi · Pi-hole · Networking
              </p>

              <div className="project-links">
                <Link to="/projects/homelab" className="project-detail-link">
                  View Project →
                </Link>

                <a
                  href="https://github.com/richardrhanly-us/homelab-network-infrastructure"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Projects;
