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

          <a
            href="https://www.linkedin.com/in/richardhanly/"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            LinkedIn
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
                <a href="#library-ai-case-study">View Details</a>

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
                <a href="#flowboard-case-study">View Details</a>

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
                <a href="#nba-case-study">View Details</a>

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
                <a href="#poker-case-study">View Details</a>

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
                <a href="#homelab-case-study">View Details</a>

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

      <section id="sortview-case-study" className="section case-study">
        <p className="section-label">Project Case Study</p>
        <h2>SortView</h2>

        <div className="case-study-intro">
          <div className="case-study-copy">
            <h3>Turning machine logs into useful operational data</h3>

            <p>
              The centerpiece of the SortView project is the Automated
              Materials Handler (AMH). As library patrons return their items,
              the AMH scans the items, communicates with the library ILS system,
              and routes each item into the appropriate bin.
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

          <div className="case-study-media-column">
            <figure className="video-container">
              <video
                controls
                preload="metadata"
                poster=""
                className="project-video"
              >
                <source src="/videos/sortview-walkthrough.mp4" type="video/mp4" />
                Your browser does not support embedded video.
              </video>



            </figure>

            <div className="demo-video-section">
              <figcaption>
                An item being scanned and routed by the Automated Materials
                Handler.
              </figcaption>

              <video
                controls
                preload="metadata"
                poster=""
                className="demo-video"
              >
                <source
                  src="/videos/SortDemo.mp4"
                  type="video/mp4"
                />
                Your browser does not support embedded video.
              </video>
            </div>
          </div>
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

      <section id="library-ai-case-study" className="section case-study">
        <p className="section-label">Project Case Study</p>
        <h2>Library AI Assistant</h2>

        <div className="case-study-intro">
          <div className="case-study-copy">
            <h3>Grounded answers from uploaded documents</h3>

            <p>
              Library AI Assistant is a retrieval-augmented generation
              application that allows users to upload PDF documents and ask
              questions about their contents.
            </p>

            <p>
              The system extracts and chunks document text, generates vector
              embeddings, stores searchable content in Chroma, retrieves
              relevant passages, and returns an answer with supporting source
              references.
            </p>

            <div className="case-study-links">
              <a
                href="https://library-ai-assistant.streamlit.app/"
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Open Live Application
              </a>

              <a
                href="https://github.com/richardrhanly-us/library-ai-assistant"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                View Source Code
              </a>
            </div>
          </div>

          <figure className="case-study-image-container">
            <img
              src="/images/library-ai-assistant.png"
              alt="Library AI Assistant application interface"
              className="case-study-image"
            />

            <figcaption>
              Users can upload documents, ask questions, and review supporting
              source passages.
            </figcaption>
          </figure>
        </div>

        <div className="case-study-details">
          <article>
            <h3>The Problem</h3>
            <p>
              Important information inside long documents can be difficult to
              locate quickly, especially when users do not know the exact words
              used in the source material.
            </p>
          </article>

          <article>
            <h3>The Solution</h3>
            <p>
              I built a semantic retrieval pipeline that searches document
              meaning rather than relying only on exact keyword matches, then
              supplies the retrieved passages to the language model as context.
            </p>
          </article>

          <article>
            <h3>What I Built</h3>
            <p>
              The application includes PDF processing, text chunking, OpenAI
              embeddings, Chroma vector storage, FastAPI endpoints, a Streamlit
              interface, source citations, duplicate detection, document
              management, and automated tests.
            </p>
          </article>
        </div>

        <div className="architecture">
          <h3>System Architecture</h3>

          <div className="architecture-flow">
            <span>PDF Upload</span>
            <span>Text Processing</span>
            <span>OpenAI Embeddings</span>
            <span>Chroma Search</span>
            <span>Grounded Response</span>
          </div>
        </div>
      </section>

      <section id="flowboard-case-study" className="section case-study">
        <p className="section-label">Project Case Study</p>
        <h2>FlowBoard</h2>

        <div className="case-study-intro">
          <div className="case-study-copy">
            <h3>A full-stack task management workflow</h3>

            <p>
              FlowBoard is a task management application built around a visual
              drag-and-drop workflow. Users can create, edit, prioritize,
              organize, and move tasks through different stages of completion.
            </p>

            <p>
              The frontend is built with React and TypeScript, while Supabase
              provides authentication, PostgreSQL storage, and database-level
              access controls.
            </p>

            <div className="case-study-links">
              <a
                href="https://next-play-task-board-black.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Open Live Application
              </a>

              <a
                href="https://github.com/richardrhanly-us/next-play-task-board"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                View Source Code
              </a>
            </div>
          </div>

          <figure className="case-study-image-container">
            <img
              src="/images/flowboard.png"
              alt="FlowBoard task management dashboard"
              className="case-study-image"
            />

            <figcaption>
              Tasks can be organized by workflow stage, priority, and due date.
            </figcaption>
          </figure>
        </div>

        <div className="case-study-details">
          <article>
            <h3>The Problem</h3>
            <p>
              Task lists can become difficult to manage when users cannot
              quickly see what is planned, underway, under review, or
              completed.
            </p>
          </article>

          <article>
            <h3>The Solution</h3>
            <p>
              I created a visual board that lets users manage tasks through
              clear workflow columns with drag-and-drop movement, filtering,
              priorities, and due dates.
            </p>
          </article>

          <article>
            <h3>What I Built</h3>
            <p>
              The application includes user authentication, task CRUD
              operations, drag-and-drop interactions, responsive design,
              filtering, Supabase integration, PostgreSQL storage, and
              row-level security.
            </p>
          </article>
        </div>

        <div className="architecture">
          <h3>System Architecture</h3>

          <div className="architecture-flow">
            <span>React Interface</span>
            <span>TypeScript State</span>
            <span>Supabase Client</span>
            <span>PostgreSQL</span>
            <span>Row-Level Security</span>
          </div>
        </div>
      </section>

      <section id="nba-case-study" className="section case-study">
        <p className="section-label">Project Case Study</p>
        <h2>NBA Prediction Model</h2>

        <div className="case-study-intro">
          <div className="case-study-copy">
            <h3>Turning player game logs into performance predictions</h3>

            <p>
              The NBA Prediction Model is a data and machine-learning
              application that evaluates player scoring performance using
              historical game logs and rolling statistical features.
            </p>

            <p>
              Users can search for a player, enter a proposed points line, and
              compare it with the model prediction and estimated over-or-under
              probability.
            </p>

            <div className="case-study-links">
              <a
                href="https://edgeanalyticsnba.streamlit.app/"
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Open Live Application
              </a>

              <a
                href="https://github.com/richardrhanly-us/NBA_Player_Performance_Data_Pipeline"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                View Source Code
              </a>
            </div>
          </div>

          <figure className="case-study-image-container">
            <img
              src="/images/NBA.PNG"
              alt="NBA player performance prediction application"
              className="case-study-image"
            />

            <figcaption>
              The application compares a model prediction with a user-provided
              betting line.
            </figcaption>
          </figure>
        </div>

        <div className="case-study-details">
          <article>
            <h3>The Problem</h3>
            <p>
              Raw game logs provide useful information, but recent form, shot
              volume, minutes, and long-term scoring trends must be combined
              before they can support a meaningful prediction.
            </p>
          </article>

          <article>
            <h3>The Solution</h3>
            <p>
              I built a repeatable pipeline that collects player data,
              engineers rolling features, applies a trained regression model,
              and presents the result through an interactive Streamlit
              interface.
            </p>
          </article>

          <article>
            <h3>What I Built</h3>
            <p>
              The project includes API-based data collection, Pandas
              transformations, feature engineering, scikit-learn regression
              models, model evaluation, probability estimates, Streamlit
              deployment, and GitHub Actions checks.
            </p>
          </article>
        </div>

        <div className="architecture">
          <h3>Data Pipeline</h3>

          <div className="architecture-flow">
            <span>NBA Game Logs</span>
            <span>Data Cleaning</span>
            <span>Feature Engineering</span>
            <span>Regression Model</span>
            <span>Streamlit Results</span>
          </div>
        </div>
      </section>

      <section id="poker-case-study" className="section case-study">
        <p className="section-label">Project Case Study</p>
        <h2>Poker Night Tracker</h2>

        <div className="case-study-intro">
          <div className="case-study-copy">
            <h3>Tracking sessions, results, and long-term player performance</h3>

            <p>
              Poker Night Tracker is a full-stack Google Apps Script
              application for recording poker sessions, calculating player
              statistics, and presenting leaderboards and personal dashboards.
            </p>

            <p>
              The application uses Google Sheets as its data store and connects
              session records with scanned score sheets stored in Google Drive.
            </p>

            <div className="case-study-links">
              <a
                href="https://script.google.com/macros/u/1/s/AKfycbyx76atANNkWPlOzC8SUJvLaeU9zpWs5G_IgWBXxyXLaDRQpCCMjAubccVFyp--DNJWfw/exec"
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Open Live Application
              </a>

              <a
                href="https://github.com/richardrhanly-us/poker-night-tracker"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                View Source Code
              </a>
            </div>
          </div>

          <figure className="case-study-image-container">
            <img
              src="/images/poker-capture.PNG"
              alt="Poker Night Tracker dashboard"
              className="case-study-image"
            />

            <figcaption>
              Session results are converted into player dashboards,
              leaderboards, and historical statistics.
            </figcaption>
          </figure>
        </div>

        <div className="case-study-details">
          <article>
            <h3>The Problem</h3>
            <p>
              Results were recorded manually, but calculating long-term
              winnings, rankings, attendance, and player trends required
              repeated spreadsheet work.
            </p>
          </article>

          <article>
            <h3>The Solution</h3>
            <p>
              I built a browser-based interface that records session data,
              performs calculations automatically, and generates
              player-specific and group-level statistics.
            </p>
          </article>

          <article>
            <h3>What I Built</h3>
            <p>
              The system includes session entry, automated calculations,
              historical leaderboards, player dashboards, profit tracking,
              Google Sheets storage, Google Drive integration, and a responsive
              HTML and JavaScript interface.
            </p>
          </article>
        </div>

        <div className="architecture">
          <h3>System Architecture</h3>

          <div className="architecture-flow">
            <span>Web Interface</span>
            <span>Google Apps Script</span>
            <span>Google Sheets</span>
            <span>Google Drive</span>
            <span>Player Dashboards</span>
          </div>
        </div>
      </section>

      <section id="homelab-case-study" className="section case-study">
        <p className="section-label">Project Case Study</p>
        <h2>Homelab Network Infrastructure</h2>

        <div className="case-study-intro">
          <div className="case-study-copy">
            <h3>Building a complete network and server environment</h3>

            <p>
              This project documents the design and implementation of a working
              homelab built around UniFi networking, structured Ethernet
              cabling, Ubuntu Server, Docker, network-wide DNS filtering, and
              infrastructure monitoring.
            </p>

            <p>
              The environment provides a practical platform for learning Linux
              administration, networking, containers, DNS, monitoring,
              security planning, and infrastructure troubleshooting.
            </p>

            <div className="case-study-links">
              <a
                href="https://github.com/richardrhanly-us/homelab-network-infrastructure"
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                View Documentation
              </a>
            </div>
          </div>

          <figure className="case-study-image-container">
            <img
              src="/images/rack-front-view.jpeg"
              alt="Physical homelab network rack"
              className="case-study-image"
            />

            <figcaption>
              The network rack containing the gateway, managed switch, patch
              panel, server hardware, and supporting infrastructure.
            </figcaption>
          </figure>
        </div>

        <div className="case-study-details">
          <article>
            <h3>The Goal</h3>
            <p>
              I wanted to build a reliable environment for learning networking,
              Linux administration, container deployment, DNS, monitoring, and
              infrastructure security through hands-on work.
            </p>
          </article>

          <article>
            <h3>The Implementation</h3>
            <p>
              I installed structured Cat6 cabling, configured a UniFi gateway,
              managed PoE switch and wireless access point, deployed Ubuntu
              Server, and added Docker-based services for management and
              monitoring.
            </p>
          </article>

          <article>
            <h3>What I Built</h3>
            <p>
              The environment includes Pi-hole and Unbound DNS, Docker,
              Portainer, Uptime Kuma, network storage, SSH administration,
              service validation, security documentation, and planned VLAN and
              firewall segmentation.
            </p>
          </article>
        </div>

        <div className="architecture">
          <h3>Network Architecture</h3>

          <div className="architecture-flow">
            <span>Internet</span>
            <span>UniFi Gateway</span>
            <span>Managed PoE Switch</span>
            <span>Pi-hole and Unbound</span>
            <span>Ubuntu Docker Host</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;