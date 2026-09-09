function VehicleTelemetry() {
  return (
    <main>
      <section id="vehicle-telemetry-case-study" className="section case-study">
        <p className="section-label">Project Case Study</p>

        <h2>Vehicle Telemetry Platform</h2>

        <div className="case-study-intro">
          <div className="case-study-copy">
            <h3>
              Real-time telemetry acquisition and replay from physical vehicle
              hardware
            </h3>

            <p>
              The Vehicle Telemetry Platform connects directly to a real vehicle
              through an OBD-II adapter and turns diagnostic data into a live
              monitoring and recording system.
            </p>

            <p>
              The application discovers supported vehicle parameters, streams
              operating data into a browser dashboard, records complete
              road-test sessions, evaluates configurable alarm conditions, and
              replays captured telemetry through the same runtime pipeline used
              during live acquisition.
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
                Recorded real-world vehicle telemetry replayed through the live
                monitoring dashboard.
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="case-study-details">
          <article>
            <h3>The Problem</h3>

            <p>
              Collecting useful telemetry from real vehicle hardware requires
              more than displaying diagnostic values. The software must handle
              vehicle discovery, supported-command detection, unreliable serial
              communication, missing responses, and changing runtime state
              without allowing hardware failures to destabilize the application.
            </p>
          </article>

          <article>
            <h3>The Solution</h3>

            <p>
              I built a telemetry pipeline that separates hardware acquisition
              from application state and presentation. OBD-II responses are
              normalized into typed telemetry samples, streamed to a browser
              dashboard, evaluated by an alarm engine, and recorded for later
              analysis and replay.
            </p>
          </article>

          <article>
            <h3>What I Built</h3>

            <p>
              The platform includes vehicle scanning, supported-command
              discovery, live telemetry acquisition, WebSocket updates, trip
              recording, JSONL persistence, acquisition-health monitoring,
              configurable alarms, historical trip analysis, playback controls,
              and automated tests.
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
              A real hardware demonstration showing the OBDLink EX connected to
              the vehicle, the application scanning for the diagnostic
              interface, identifying the vehicle, and beginning telemetry
              acquisition.
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
