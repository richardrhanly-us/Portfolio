function SortView() {
  return (
    <main>
      {
        <section id="sortview-case-study" className="section case-study">
          <p className="section-label">Project Case Study</p>
          <h2>SortView</h2>

          <div className="case-study-intro">
            <div className="case-study-copy">
              <h3>Turning machine logs into useful operational data</h3>

              <p>
                The centerpiece of the SortView project is the Automated
                Materials Handler (AMH). As library patrons return their items,
                the AMH scans the items, communicates with the library ILS
                system, and routes each item into the appropriate bin.
              </p>

              <p>
                Each transaction generates log data. SortView collects that
                data, sends it through a FastAPI backend, stores structured
                records in PostgreSQL, and presents the results through a
                Streamlit dashboard.
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
                  <source
                    src="/videos/sortview-walkthrough.mp4"
                    type="video/mp4"
                  />
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
                  <source src="/videos/SortDemo.mp4" type="video/mp4" />
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
                automatically, an API to validate and store them, and a
                dashboard that turns the data into reports, alerts, and
                operational insights.
              </p>
            </article>

            <article>
              <h3>What I Built</h3>
              <p>
                The system includes automated ingestion, FastAPI endpoints,
                PostgreSQL storage, Alembic migrations, authentication, branch
                access controls, reporting tools, automated tests, and
                deployment monitoring.
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
        </section> /* paste the entire SortView case study section here */
      }
    </main>
  );
}

export default SortView;
