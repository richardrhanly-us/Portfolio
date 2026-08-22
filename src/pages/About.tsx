function About() {
  return (
    <main>
      <section className="section about-page">
        <p className="section-label">About</p>

        <div className="about-layout">
          <div className="about-copy">
            <h2>About Me</h2>

            <p className="about-lead">
              I build software around real problems: messy workflows,
              operational data, repetitive tasks, and systems that need to be
              easier to use.
            </p>

            <p>
              My name is Richard Hanly, and I am a software development graduate
              and digital services specialist with real world experience working
              on systems and full stack development. That background has shaped
              the way I approach software development. I want to understand the
              workflow first, then build something practical around it that
              people in that industry would find useful.
            </p>

            <p>
              I have an array of projects that span full-stack web applications,
              APIs, data processing, automation, machine learning, cloud
              infrastructure, networking, and analytics. I enjoy projects where
              software has a clear purpose and where the technical decisions
              connect directly to how someone will actually use the system.
            </p>

            <p>
              I have worked extensively with library technology and operational
              systems, which has given me hands-on experience troubleshooting
              production workflows. My experience with integrating software on
              real equipment has shown me the importance of supporting users and
              making products that improve their workflow.
            </p>

            <p>
              I am particularly interested in software engineering roles where I
              can combine application development, data, APIs, automation, and
              systems thinking to build reliable tools that solve concrete
              problems.
            </p>
          </div>

          <div className="about-photo-column">
            <img
              src="/images/Profilepic.jpg"
              alt="Richard Hanly"
              className="about-photo"
            />
          </div>
        </div>

        <div className="about-skills">
          <div>
            <p className="section-label">Development</p>
            <p>
              Python · TypeScript · JavaScript · React · FastAPI · SQL · C++ ·
              Java
            </p>
          </div>

          <div>
            <p className="section-label">Data & Backend</p>
            <p>
              PostgreSQL · Pandas · REST APIs · Supabase · Chroma · Machine
              Learning
            </p>
          </div>

          <div>
            <p className="section-label">Infrastructure</p>
            <p>
              AWS · Linux · Docker · GitHub Actions · Networking · Monitoring
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
