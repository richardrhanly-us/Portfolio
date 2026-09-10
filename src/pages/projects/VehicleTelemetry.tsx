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
              The Vehicle Telemetry Platform connects directly to your vehicle
              through an OBD-II adapter and turns raw diagnostic data into a live
              monitoring and recording system.
            </p>

            <p>
              The application connects to the vehicle, checks which data the car can provide,
              and displays that information live in the browser. It can also record a drive,
              flag conditions such as high engine load or temperature, and replay a recorded
              trip later for review.
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
                Snapshot of the dashboard using the playback feature.
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="case-study-details">
          <article>
            <h3>The Problem</h3>

            <p>
              Collecting useful telemetry from a real vehicle involves more than just
              displaying diagnostic values. Before anything can appear on the dashboard,
              the software has to figure out what the vehicle supports, establish a stable
              connection, and handle situations where data is delayed, missing, or
              unavailable.
            </p>
          </article>

          <article>
            <h3>The Solution</h3>

            <p>
              The vehicle-telemetry system was built and designed to handle those problems without letting a bad response or
              hardware issue bring down the application. It can detect the vehicle, check
              which commands are available, manage the serial connection, and keep the
              application state consistent as conditions change.
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
              A hardware demonstration showing the OBDLink EX connected to
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
