function RotationLab() {
  return (
    <main>
      <section className="section case-study">
        <p className="section-label">Project Case Study</p>
        <h2>RotationLab</h2>

        <div className="case-study-intro">
          <div className="case-study-copy">
            <h3>Turning NBA lineup data into rotation decision support</h3>

            <p>
              RotationLab is a full-stack basketball analytics application
              designed to explore how different player combinations perform
              together and how lineup changes may affect a rotation.
            </p>

            <p>
              The application combines NBA lineup data with player-level
              filtering, lineup comparison, replacement analysis, and
              four-player core analysis to turn raw statistics into an
              interactive basketball operations workflow.
            </p>

            <div className="case-study-links">
              <a
                href="https://rotation-lab.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Open Live Application
              </a>

              <a
                href="https://github.com/richardrhanly-us/RotationLab"
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
              src="/images/rotationlab.png"
              alt="RotationLab NBA lineup analysis interface"
              className="case-study-image"
            />

            <figcaption>
              RotationLab provides interactive lineup comparison, replacement
              analysis, and player-combination evaluation.
            </figcaption>
          </figure>
        </div>

        <div className="case-study-video-section">
          <div className="case-study-video-heading">
            <p className="section-label">Application Walkthrough</p>
            <h3>RotationLab Demo</h3>

            <p>
              A walkthrough of the lineup comparison, leaderboard, replacement
              analysis, and four-player core workflows.
            </p>
          </div>

          <video
            className="case-study-video"
            controls
            preload="metadata"
            poster="/images/rotationlab.png"
          >
            <source
              src="/videos/rotationlab-walkthrough.mp4"
              type="video/mp4"
            />

            Your browser does not support the video tag.
          </video>
        </div>

        <div className="case-study-details">
          <article>
            <h3>The Problem</h3>

            <p>
              NBA lineup data contains useful information about how groups of
              players perform together, but raw lineup tables make it difficult
              to compare combinations, evaluate alternatives, and understand
              how replacing one player might affect a rotation.
            </p>
          </article>

          <article>
            <h3>The Solution</h3>

            <p>
              I built an interactive decision-support application that organizes
              lineup data around basketball questions: which units perform
              best, how similar lineups compare, which players may serve as
              replacements, and which four-player cores produce strong results
              across multiple combinations.
            </p>
          </article>

          <article>
            <h3>What I Built</h3>

            <p>
              The application includes a React and TypeScript frontend, FastAPI
              analytics backend, NBA data processing, lineup ranking, advanced
              efficiency metrics, player filtering, replacement discovery,
              four-player core analysis, automated tests, and production
              deployment.
            </p>
          </article>
        </div>

        <div className="architecture">
          <h3>System Architecture</h3>

          <div className="architecture-flow">
            <span>NBA Data</span>
            <span>Python Processing</span>
            <span>FastAPI Analytics</span>
            <span>React Interface</span>
            <span>Rotation Analysis</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RotationLab;