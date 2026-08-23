function FlowBoard() {
  return (
    <main>
      <section id="flowboard-case-study" className="section case-study">
        <p className="section-label">Project Case Study</p>

        <h2>FlowBoard</h2>

        <div className="case-study-intro">
          <div className="case-study-copy">
            <h3>A full-stack task management workflow</h3>

            <p>
              FlowBoard is a task management application built around a visual
              drag-and-drop workflow. Users are able to create tasks and keep them
              organized using an intuitive workflow and a kanban style task management system.
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

          <div className="case-study-media-column">
            <figure className="case-study-image-container">
              <img
                src="/images/flowboard.png"
                alt="FlowBoard task management application"
                className="case-study-image"
              />

              <figcaption>
                The FlowBoard task board with visual workflow columns. Users can choose task
                prioritization, or use the drag-and-drop movements for easy managmenet.
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="case-study-details">
          <article>
            <h3>The Problem</h3>

            <p>
              Task lists can become difficult to manage, and a disorganized task list defeates the purpose.
              When users cannot quickly see what is planned, or identifuy high priority tasks, productivity can be slowed down.
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

        <section className="project-walkthrough">
          <div className="project-walkthrough-header">
            <p className="section-label">Application Walkthrough</p>

            <h3>FlowBoard Demo</h3>

            <p>
              A walkthrough of task creation, workflow management,
              drag-and-drop movement, priorities, due dates, and filtering.
            </p>
          </div>

          <video
            controls
            preload="metadata"
            poster="/images/flowboard.png"
            className="project-walkthrough-video"
          >
            <source
              src="/videos/FlowBoard-walthrough.mp4"
              type="video/mp4"
            />

            Your browser does not support embedded video.
          </video>
        </section>
      </section>
    </main>
  );
}

export default FlowBoard;