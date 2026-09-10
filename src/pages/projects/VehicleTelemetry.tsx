function VehicleTelemetry() {
  return (
    <main>
      <section id="vehicle-telemetry-case-study" className="section case-study">
        <p className="section-label">Project Case Study</p>

        <h2>Vehicle Telemetry Platform</h2>

        <div className="case-study-intro">
          <div className="case-study-copy">
            <h3>
              Real-time vehicle telemetry, recording, and replay from physical
              hardware
            </h3>

            <p>
              The Vehicle Telemetry Platform connects directly to a vehicle
              through an OBD-II adapter and turns diagnostic data into a live
              monitoring and recording system.
            </p>

            <p>
              The application checks which data the vehicle can provide and
              displays that information live in the browser. It can record an
              entire drive, flag conditions such as high engine load or
              temperature, and replay a previous trip later for review.
            </p>

            <div className="case-study-links">
              <a
                href="https://vehicle-telemetry-platform.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Open Live Demo
              </a>

              <a
                href="https://github.com/richardrhanly-us/vehicle-telemetry-platform"
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
                src="/images/telemetry_dashboard_playback.PNG"
                alt="Vehicle Telemetry Platform replaying recorded vehicle telemetry"
                className="case-study-image"
              />

              <figcaption>
                Dashboard view while replaying a recorded vehicle trip.
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="case-study-details">
          <article>
            <h3>The Problem</h3>

            <p>
              Collecting useful telemetry from a real vehicle involves more than
              simply reading and displaying diagnostic values. The software has
              to establish a reliable connection, determine which readings the
              vehicle supports, and deal with data that may be delayed, missing,
              or unavailable.
            </p>
          </article>

          <article>
            <h3>The Solution</h3>

            <p>
              I built the system so those connection and data issues can be
              handled without taking down the rest of the application. It can
              identify the vehicle, check which commands are available, manage
              the serial connection, and keep the live dashboard and recording
              system working even when individual readings fail.
            </p>
          </article>

          <article>
            <h3>What I Built</h3>

            <p>
              The platform includes vehicle scanning, supported-command
              detection, live telemetry, WebSocket updates, trip recording,
              JSONL storage, connection-health monitoring, configurable alarms,
              historical trip review, playback controls, and automated tests.
            </p>
          </article>
        </div>

        <div className="architecture">
          <h3>System Architecture</h3>

          <div className="architecture-flow">
            <span>Vehicle ECU</span>
            <span>OBDLink EX</span>
            <span>Python Acquisition</span>
            <span>FastAPI / WebSocket</span>
            <span>Runtime + Alarm Engine</span>
            <span>Dashboard + Trip Storage</span>
          </div>
        </div>

        <section className="project-walkthrough">
          <div className="project-walkthrough-header">
            <p className="section-label">Hardware Demonstration</p>

            <h3>Vehicle Connection and Telemetry Demo</h3>

            <p>
              This demonstration shows the OBDLink EX connected to the vehicle,
              the application scanning for the diagnostic interface, identifying
              the vehicle, and beginning live telemetry collection.
            </p>
          </div>

          <video
            controls
            preload="metadata"
            poster="/images/Telemetry_dashboard_scanning.PNG"
            className="project-walkthrough-video"
          >
            <source src="/videos/OBD_SCAN_DEMO.mp4" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </section>
      </section>
    </main>
  );
}

export default VehicleTelemetry;