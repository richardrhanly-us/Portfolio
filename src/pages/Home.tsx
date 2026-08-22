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

              <p className="tech">Python · FastAPI · PostgreSQL · Streamlit</p>

              <div className="project-links">
                <Link to="/projects/sortview">View Project</Link>
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
                <Link to="/projects/flowboard">View Project</Link>
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
                <Link to="/projects/library-ai">View Project</Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;
