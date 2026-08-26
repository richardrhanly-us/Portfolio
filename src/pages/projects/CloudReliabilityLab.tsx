function CloudReliabilityLab() {
  return (
    <main>
      <section className="section case-study">
        <p className="section-label">Project Case Study</p>

        <h2>Cloud Reliability Lab</h2>

        <div className="case-study-intro">
          <div className="case-study-copy">
            <h3>
              Building a reproducible AWS environment for deployment,
              monitoring, failure recovery, and incident response
            </h3>

            <p>
              Cloud Reliability Lab is an infrastructure and reliability
              engineering project that I built around the idea of operating a
              small web service in AWS. The goal was not simply to deploy an
              application, but to practice the systems work required to keep a
              service observable, recoverable, and reproducible. The next phase
              of this project is to host the SortView project on AWS.
            </p>

            <p>
              I built the environment using Terraform, Amazon EC2, Amazon Linux,
              nginx, systemd, AWS Systems Manager, CloudWatch, and S3-backed
              Terraform state. I then introduced controlled failures to verify
              automatic service recovery, centralized logging, and alarm
              behavior.
            </p>

            <div className="case-study-links">
              <a
                href="https://github.com/richardrhanly-us/cloud-reliability-lab"
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                View Source Code
              </a>
            </div>
          </div>

          <div className="case-study-media-column">
            <figure className="case-study-image-container">
              <img
                src="/images/Architecture-diagram.png"
                alt="Cloud Reliability Lab AWS architecture diagram"
                className="case-study-image"
              />

              <figcaption>
                Terraform-managed AWS architecture with EC2, nginx, systemd,
                CloudWatch, Systems Manager, IAM, and S3 remote state.
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="case-study-details">
          <article>
            <h3>The Problem</h3>

            <p>
              I wanted hands-on experience running a service in AWS, not just
              deploying something. My goal was to understand what happens after
              deployment, like: how the server is configured, how the application is
              managed, how failures are detected, and how the system recovers
              when something goes wrong.
            </p>
          </article>

          <article>
            <h3>The Solution</h3>

            <p>
              I built the environment from the ground up with Terraform and EC2,
              then configured the server to run a FastAPI application behind
              nginx. systemd manages the application process, Systems Manager
              provides remote access, and CloudWatch gives me a central place to
              watch the service and its logs.
            </p>
          </article>

          <article>
            <h3>What I Built</h3>

            <p>
              The finished lab is a reproducible AWS deployment that I can
              destroy and rebuild from code. I added centralized logging,
              automatic service recovery, and failure alarms, then deliberately
              crashed the application to verify that the recovery and monitoring
              worked the way I expected.
            </p>
          </article>
        </div>

        <div className="architecture">
          <h3>Reliability Workflow</h3>

          <div className="architecture-flow">
            <span>Process Failure</span>
            <span>systemd Recovery</span>
            <span>journald Export</span>
            <span>CloudWatch Logs</span>
            <span>Failure Metric</span>
            <span>CloudWatch Alarm</span>
          </div>
        </div>

        <div className="case-study-details">
          <article>
            <h3>Controlled Failure Testing</h3>

            <p>
              I intentionally terminated the running Uvicorn process with
              SIGKILL to test how the environment behaved during an unexpected
              application failure. systemd detected the terminated process,
              moved the service into automatic recovery, and restarted the
              application without manual intervention.
            </p>
          </article>

          <article>
            <h3>Centralized Failure Detection</h3>

            <p>
              A dedicated journal exporter follows systemd lifecycle events for
              the application and writes them to a log collected by the
              CloudWatch Agent. This makes service-level events such as process
              termination, failed states, scheduled restarts, and successful
              recovery visible in CloudWatch.
            </p>
          </article>

          <article>
            <h3>Validated Alerting</h3>

            <p>
              A Terraform-managed CloudWatch Logs metric filter converts systemd
              failure events into a custom failure metric. During a controlled
              failure test, the application recovered successfully, the failure
              event reached CloudWatch, the metric was generated, and the
              associated alarm transitioned to ALARM.
            </p>
          </article>
        </div>

        <div className="architecture">
          <h3>Validated Results</h3>

          <div className="architecture-flow">
            <span>Automatic Restart ✓</span>
            <span>Health Recovery ✓</span>
            <span>CloudWatch Logging ✓</span>
            <span>Failure Alarm ✓</span>
            <span>SSM Access ✓</span>
            <span>Terraform Rebuild ✓</span>
          </div>
        </div>

        <section className="project-walkthrough">
          <div className="project-walkthrough-header">
            <p className="section-label">Infrastructure Walkthrough</p>

            <h3>Cloud Reliability Lab Architecture</h3>

            <p>
              The architecture shows the complete AWS deployment, including
              networking, application hosting, service management, centralized
              observability, remote administration, and Terraform-managed
              infrastructure.
            </p>
          </div>

          <figure className="case-study-image-container">
            <img
              src="/images/Architecture-diagram.png"
              alt="Detailed Cloud Reliability Lab AWS infrastructure architecture"
              className="case-study-image"
            />

            <figcaption>
              Walkthrough video coming soon. The current architecture diagram
              shows the deployed and validated infrastructure.
            </figcaption>
          </figure>
        </section>
      </section>
    </main>
  );
}

export default CloudReliabilityLab;
