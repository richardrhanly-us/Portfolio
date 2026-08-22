function LibraryAI() {
  return (
    <main>
      {
        <section id="poker-case-study" className="section case-study">
          <p className="section-label">Project Case Study</p>
          <h2>Poker Night Tracker</h2>

          <div className="case-study-intro">
            <div className="case-study-copy">
              <h3>
                Tracking sessions, results, and long-term player performance
              </h3>

              <p>
                Poker Night Tracker is a full-stack Google Apps Script
                application for recording poker sessions, calculating player
                statistics, and presenting leaderboards and personal dashboards.
              </p>

              <p>
                The application uses Google Sheets as its data store and
                connects session records with scanned score sheets stored in
                Google Drive.
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
                Google Sheets storage, Google Drive integration, and a
                responsive HTML and JavaScript interface.
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
      }
    </main>
  );
}

export default LibraryAI;
