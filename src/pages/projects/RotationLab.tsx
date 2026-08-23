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
              RotationLab is a full-stack basketball analytics application that
              is designed to explore how different player combinations perform
              together and how lineup changes may affect a certain rotation.
            </p>

            <p>
              RotationLab turns lineup data into a useful tool for evaluating how
              player combinations perform together. It helps illuminate which
              groups are working well, where a rotation may be vulnerable, and how a
              change in personnel could affect the units around it.
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

          <div className="case-study-media-column">
            <figure className="case-study-image-container">
              <img
                src="/images/rotationlab.png"
                alt="RotationLab NBA lineup analysis interface"
                className="case-study-image"
              />

              <figcaption>
                RotationLab provides interactive lineup comparison, replacement
                analysis, and player-combination evaluations.
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="case-study-details">
          <article>
            <h3>The Problem</h3>

            <p>
              NBA lineup data contains useful information about how groups of
              players perform together, but raw lineup tables are difficult
              to work with. It was tedious to compare combinations, evaluate alternatives, and understand how
              replacing one player might affect a rotation.
            </p>
          </article>

          <article>
            <h3>The Solution</h3>

            <p>
              I built an interactive decision-support application that organizes
              lineup data around these questions: Which units perform best?
              How do similar lineups compare? Which players should serve as
              replacements? And which four-player cores produce strong results
              across multiple combinations?
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

        <section className="project-walkthrough">
          <div className="project-walkthrough-header">
            <p className="section-label">Application Walkthrough</p>

            <h3>RotationLab Demo</h3>

            <p>
              A walkthrough of the lineup comparison, leaderboard analysis,
              replacement analysis, and four-player core workflows.
            </p>
          </div>

          <video
            controls
            preload="metadata"
            poster="/images/rotationlab.png"
            className="project-walkthrough-video"
          >
            <source
              src="/videos/rotationlab-walkthrough.mp4"
              type="video/mp4"
            />
            Your browser does not support embedded video.
          </video>
        </section>
      </section>
    </main>
  );
}

export default RotationLab;
