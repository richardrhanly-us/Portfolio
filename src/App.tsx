import "./App.css";

function App() {
  return (
    <main>
      <section className="hero">
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
          <a href="#projects" className="primary-button">
            View Projects
          </a>

          <a
            href="https://github.com/richardrhanly-us"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            GitHub
          </a>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-label">Featured Work</p>
        <h2>Projects</h2>

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
                <a href="#sortview-case-study">View Details</a>

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

              <p className="tech">
                React · TypeScript · Supabase · Vite
              </p>

              <div className="project-links">
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
        </div>
      </section>

      <section id="sortview-case-study" className="section case-study">
        <p className="section-label">Project Case Study</p>
        <h2>SortView</h2>

        <div className="case-study-intro">
          <div className="case-study-copy">
            <h3>Turning machine logs into useful operational data</h3>

            <p>
              SortView was built around an Automated Materials Handler used in
              daily library operations. The machine scans returned items,
              identifies each barcode, and routes the item to the appropriate
              destination.
            </p>

            <p>
              Each transaction generates log data. SortView collects that data,
              sends it through a FastAPI backend, stores structured records in
              PostgreSQL, and presents the results through a Streamlit
              dashboard.
            </p>

            <div className="case-study-links">
              <a
                href="https://sortview.streamlit.app/?guest=1"
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Open Live Application
              </a>

              <a
                href="https://github.com/richardrhanly-us/amh-analytics-dashboard"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                View Source Code
              </a>
            </div>
          </div>

          <figure className="video-container">
            <video
              controls
              preload="metadata"
              poster="/images/sortview-dashboard.png"
              className="project-video"
            >
              <source
                src="/public/videos/sortdemo.mp4"
                type="video/mp4"
              />
              Your browser does not support embedded video.
            </video>

            <figcaption>
              An item being scanned and routed by the Automated Materials
              Handler.
            </figcaption>
          </figure>
        </div>

        <div className="case-study-details">
          <article>
            <h3>The Problem</h3>
            <p>
              The sorter generated valuable operational information, but the
              raw logs were difficult to review, compare, and use for
              troubleshooting or long-term analysis.
            </p>
          </article>

          <article>
            <h3>The Solution</h3>
            <p>
              I built a Windows-side agent to collect new log records
              automatically, an API to validate and store them, and a dashboard
              that turns the data into reports, alerts, and operational
              insights.
            </p>
          </article>

          <article>
            <h3>What I Built</h3>
            <p>
              The system includes automated ingestion, FastAPI endpoints,
              PostgreSQL storage, Alembic migrations, authentication, branch
              access controls, reporting tools, automated tests, and deployment
              monitoring.
            </p>
          </article>
        </div>

        <div className="architecture">
          <h3>System Architecture</h3>

          <div className="architecture-flow">
            <span>AMH Sorter Logs</span>
            <span>Windows Agent</span>
            <span>FastAPI Backend</span>
            <span>PostgreSQL</span>
            <span>Streamlit Dashboard</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;