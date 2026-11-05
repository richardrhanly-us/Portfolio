
function SortView() {
  return (
    <main>
      <section id="sortview-case-study" className="section case-study">
        <p className="section-label">Project Case Study</p>
        <h2>SortView</h2>

        <div className="case-study-intro">
          <div className="case-study-copy">
            <h3>
              From equipment telemetry to a cloud-hosted analytics platform
            </h3>

            <p>
              SortView is a full-stack software platform I designed and
              developed to transform automated library equipment logs into
              actionable operational intelligence.
            </p>

            <p>
              The platform integrates with a library's Automated Materials
              Handler (AMH), which scans returned materials, communicates
              with the library's Integrated Library System (ILS), and
              routes items into designated sorting bins.
            </p>

            <p>
              A Windows-based collection service processes the machine's
              transaction logs and transmits operational data to a FastAPI
              backend backed by PostgreSQL. A React and TypeScript application,
              hosted through AWS S3 and CloudFront, provides interactive
              analytics, reporting, and operational visibility.
            </p>

            <div className="case-study-links">
              <a
                href="https://app.sortviewapp.com/"
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
                className="project-video"
              >
                <source src="/videos/SortDemo.mp4" type="video/mp4" />
                Your browser does not support embedded video.
              </video>

              <figcaption>
                An item being scanned and routed by the Automated
                Materials Handler, the physical equipment that
                generates SortView's operational data.
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="case-study-details">
          <article>
            <h3>The Problem</h3>
            <p>
              Automated materials handling equipment generates valuable
              transaction data, but raw machine logs are difficult to
              interpret, compare, and analyze. Operational teams need
              better visibility into throughput, sorting activity,
              equipment utilization, and collection reliability.
            </p>
          </article>

          <article>
            <h3>The Solution</h3>
            <p>
              I developed an automated collection pipeline and a
              cloud-hosted application that transforms machine-generated
              logs into structured operational data. The platform
              provides historical reporting, real-time operational
              views, and monitoring capabilities.
            </p>
          </article>

          <article>
            <h3>What I Built</h3>
            <p>
              A full-stack system incorporating a Windows collector,
              FastAPI services, PostgreSQL, Alembic database migrations,
              a React and TypeScript frontend, authentication,
              access controls, automated regression testing,
              and operational monitoring.
            </p>
          </article>
        </div>

        <div className="architecture">
          <h3>System Architecture</h3>

          <p className="sortview-section-description">
            SortView connects physical library infrastructure to a
            cloud-hosted application through an automated data
            collection and processing pipeline.
          </p>

          <div className="architecture-flow sortview-architecture-flow">
            <span>AMH Transaction Logs</span>
            <span>Windows Collector</span>
            <span>FastAPI Backend</span>
            <span>PostgreSQL Database</span>
            <span>React Application</span>
          </div>

          <p className="sortview-architecture-note">
            The React and TypeScript frontend is built with Vite and
            deployed to Amazon S3, with CloudFront providing application
            delivery through the SortView domain.
          </p>
        </div>

        <section className="sortview-engineering">
          <p className="section-label">Engineering and Implementation</p>
          <h3>Beyond the Dashboard</h3>

          <p className="sortview-section-description">
            Developing SortView required solving problems across data
            collection, backend engineering, frontend development,
            infrastructure, reliability, and software delivery.
          </p>

          <div className="case-study-details sortview-engineering-grid">
            <article>
              <h3>Reliable Data Collection</h3>
              <p>
                Developed a Windows-based agent that periodically
                processes equipment logs, tracks collection progress,
                buffers records, and retries failed uploads. Recovery
                mechanisms help maintain collection continuity when
                connectivity or backend services are interrupted.
              </p>
            </article>

            <article>
              <h3>Full-Stack Application</h3>
              <p>
                Built REST API services with FastAPI and PostgreSQL,
                using Alembic to manage database schema changes.
                Developed a React and TypeScript interface for
                operational analytics, historical reporting,
                and administrative functionality.
              </p>
            </article>

            <article>
              <h3>Cloud Infrastructure</h3>
              <p>
                Deployed the frontend using Amazon S3 and CloudFront,
                configured application delivery through a custom
                domain, and established a repeatable build and
                deployment workflow for frontend updates.
              </p>
            </article>

            <article>
              <h3>Operational Analytics</h3>
              <p>
                Implemented dashboards for sorting throughput,
                hourly activity, bin distribution, holds and
                transit activity, and historical trends.
                Live Today views provide visibility into current
                equipment activity.
              </p>
            </article>

            <article>
              <h3>Security and Monitoring</h3>
              <p>
                Integrated authentication and access controls
                alongside operational monitoring features.
                Collector heartbeat tracking and administrative
                failure visibility support troubleshooting
                and system health assessment.
              </p>
            </article>

            <article>
              <h3>Testing and Delivery</h3>
              <p>
                Established automated testing across application
                components, including backend validation and
                frontend regression coverage. Used Git-based
                feature branches, code reviews, and deployment
                validation to manage changes.
              </p>
            </article>
          </div>
        </section>

        <section className="sortview-development">
          <p className="section-label">Ongoing Development</p>
          <h3>Customer Deployment and Productization</h3>

          <p>
            SortView is also being developed into a software product
            that can be installed and operated by other libraries
            using compatible automated materials handling equipment.
          </p>

          <p>
            Current work includes a Windows GUI installer,
            collector configuration and recovery workflows,
            customer installation documentation, and onboarding
            procedures. These capabilities are being developed
            and validated as part of the product's deployment
            and commercialization process.
          </p>

          <p>
            This phase extends the project beyond application
            development into software packaging, installation,
            supportability, and repeatable customer deployment.
          </p>
        </section>

        <section className="project-walkthrough">
          <div className="project-walkthrough-header">
            <p className="section-label">Application</p>
            <h3>Explore SortView</h3>

            <p>
              Explore the current React application, including
              operational reporting and the analytics interface
              developed for automated materials handling data.
            </p>
          </div>

          <div className="case-study-links">
            <a
              href="https://app.sortviewapp.com/"
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              View SortView Application
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}

export default SortView;
