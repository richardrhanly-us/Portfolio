function LibraryAI() {
  return (
    <main>
      {
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
      }
    </main>
  );
}

export default LibraryAI;
