function VehicleTelemetry() {
  return (
    <main>
      <section className="section case-study">
        <p className="section-label">Project Case Study</p>

        <h2>Vehicle Telemetry Platform</h2>

        <div className="case-study-intro">
          <div className="case-study-copy">
            <h3>
              Real-time vehicle telemetry acquisition, monitoring, recording,
              and replay using physical OBD-II hardware
            </h3>

            <p>
              The Vehicle Telemetry Platform is a hardware-integrated telemetry
              system that connects directly to a real vehicle through an
              OBD-II adapter, discovers supported vehicle parameters, streams
              live operating data, records complete driving sessions, detects
              configurable alarm conditions, and replays recorded trips through
              the same runtime processing pipeline.
            </p>

            <p>
              Rather than relying on simulated vehicle data, I developed and
              tested the platform against physical vehicles using an OBDLink EX
              USB adapter. Recorded road tests include live speed, RPM,
              throttle, engine load, temperatures, airflow, manifold pressure,
              module voltage, trip distance, and acquisition-health metrics.
            </p>

            <div className="case-study-links">
              <a
                href="https://github.com/richardrhanly-us/vehicle-telemetry-platform"
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                View Source Code
              </a>
            </div>
          </div>

          <figure className="case-study-image-container">
            <img
              src="/images/telemetry_dashboard_playback.PNG"
              alt="Vehicle Telemetry Platform replaying a recorded road test with live telemetry cards and playback controls"
              className="case-study-image"
            />

            <figcaption>
              Recorded road-test telemetry replayed through the same dashboard
              used for live vehicle monitoring.
            </figcaption>
          </figure>
        </div>

        <div className="case-study-details">
          <article>
            <h3>The Problem</h3>

            <p>
              Vehicle diagnostics expose useful operating data, but collecting
              that data from real hardware introduces challenges that are not
              present in a simulated dashboard. The application has to discover
              the vehicle, determine which OBD-II parameters are actually
              supported, handle serial and connection failures, normalize
              inconsistent responses, and preserve useful telemetry without
              allowing hardware issues to destabilize the rest of the system.
            </p>
          </article>

          <article>
            <h3>The Solution</h3>

            <p>
              I built a telemetry pipeline that separates hardware acquisition
              from application state and presentation. The system connects to
              the vehicle, queries supported parameters, converts responses into
              a typed telemetry model, publishes the latest sample to the
              application runtime, streams updates to a browser dashboard, and
              records each session for later analysis and replay.
            </p>
          </article>

          <article>
            <h3>What I Built</h3>

            <p>
              The platform uses Python, FastAPI, WebSockets, python-OBD,
              Chart.js, and an OBDLink EX adapter. It includes vehicle scanning,
              supported-command discovery, live telemetry acquisition, trip
              recording, JSONL persistence, alarm evaluation, acquisition
              health monitoring, historical trip analysis, recorded-session
              playback, automated tests, and failure-state handling.
            </p>
          </article>
        </div>

        <div className="architecture">
          <h3>Telemetry Pipeline</h3>

          <div className="architecture-flow">
            <span>Vehicle ECU</span>
            <span>OBDLink EX</span>
            <span>Python Acquisition</span>
            <span>Typed Telemetry Model</span>
            <span>Runtime + Alarm Engine</span>
            <span>FastAPI / WebSocket</span>
            <span>Dashboard + Trip Storage</span>
          </div>
        </div>

        <div className="case-study-details">
          <article>
            <h3>Real Hardware Acquisition</h3>

            <p>
              The acquisition layer communicates with the vehicle through the
              diagnostic port rather than generating synthetic telemetry. A
              vehicle scan establishes the connection, identifies the vehicle,
              discovers supported OBD-II commands, and builds the set of
              parameters that can safely be queried during a telemetry session.
            </p>
          </article>

          <article>
            <h3>Telemetry Normalization</h3>

            <p>
              Raw diagnostic responses are converted into a consistent typed
              telemetry sample before they reach the rest of the application.
              The model includes powertrain, thermal, airflow, pressure, and
              electrical measurements along with sample duration, sample rate,
              missing-value counts, query failures, connection status, sequence
              numbers, and timestamps.
            </p>
          </article>

          <article>
            <h3>Failure-Aware Design</h3>

            <p>
              Hardware communication is treated as an unreliable boundary.
              Unsupported parameters, missing responses, serial failures, and
              disconnects are handled explicitly rather than assumed away.
              Acquisition-health information is exposed alongside vehicle data
              so that the system can distinguish a real telemetry condition
              from a data-collection problem.
            </p>
          </article>
        </div>

        <div className="case-study-details">
          <article>
            <h3>Trip Recording</h3>

            <p>
              Complete telemetry sessions can be recorded to disk with vehicle
              metadata and timestamps. The trip summary calculates values such
              as duration, distance, average speed, moving time, stopped time,
              maximum RPM, sample rate, and acquisition performance while
              preserving the underlying telemetry samples for deeper analysis.
            </p>
          </article>

          <article>
            <h3>Playback Through the Live Pipeline</h3>

            <p>
              Recorded trips are not displayed as static charts. Playback feeds
              historical samples back through the same runtime state used by
              live telemetry, allowing the dashboard, alarms, event handling,
              and visualization logic to behave as if a real session were
              occurring again. Playback supports pause, resume, stop, and
              variable playback speed.
            </p>
          </article>

          <article>
            <h3>Configurable Alarm Engine</h3>

            <p>
              Telemetry samples are evaluated against configurable alarm rules
              for conditions such as high RPM, sustained engine load, elevated
              coolant temperature, critical coolant temperature, and high oil
              temperature. Triggered and cleared events are persisted with the
              original trip and displayed in Trip History, with markers placed
              directly on the relevant telemetry chart at the recorded sample.
            </p>
          </article>
        </div>

        <div className="case-study-gallery">
          <figure className="case-study-image-container">
            <img
              src="/images/Telemetry_dashboard_scanning.PNG"
              alt="Vehicle Telemetry Platform scanning for an OBD-II connected vehicle"
              className="case-study-image"
            />

            <figcaption>
              Vehicle discovery and connection workflow before beginning a
              telemetry session.
            </figcaption>
          </figure>

          <figure className="case-study-image-container">
            <img
              src="/images/telemetry_trip.PNG"
              alt="Vehicle Telemetry Platform Trip History showing recorded vehicle sessions and telemetry charts"
              className="case-study-image"
            />

            <figcaption>
              Historical trip analysis with recorded metrics, summaries, and
              telemetry charts.
            </figcaption>
          </figure>

          <figure className="case-study-image-container">
            <img
              src="/images/telemetry_trip_playback.PNG"
              alt="Vehicle Telemetry Platform Trip History playback controls for a recorded road test"
              className="case-study-image"
            />

            <figcaption>
              Recorded-session playback with vehicle metadata, progress
              tracking, and variable playback speed.
            </figcaption>
          </figure>

          <figure className="case-study-image-container">
            <img
              src="/images/telemetry_dashboard_playback.PNG"
              alt="Vehicle Telemetry Platform dashboard replaying real recorded telemetry"
              className="case-study-image"
            />

            <figcaption>
              Historical telemetry replayed through the live monitoring
              dashboard and alarm-processing path.
            </figcaption>
          </figure>
        </div>

        <div className="case-study-details">
          <article>
            <h3>Historical Alarm Analysis</h3>

            <p>
              Alarm events recorded during the original test session remain
              associated with that trip. Trip History pairs trigger and clear
              events when possible and maps each event back to its exact
              telemetry sequence so the corresponding chart can show where the
              condition occurred.
            </p>
          </article>

          <article>
            <h3>Playback Isolation</h3>

            <p>
              Live vehicle state and recorded playback state are intentionally
              separated. Playback carries its own recorded vehicle metadata and
              prevents the application from attempting to reconnect to physical
              OBD hardware while a historical session is active. Replaying a
              trip also does not overwrite its original persisted alarm
              history.
            </p>
          </article>

          <article>
            <h3>Testing and Validation</h3>

            <p>
              Automated tests cover telemetry normalization, alarm behavior,
              trip persistence, playback state, vehicle metadata, historical
              alarm integrity, and protection against live vehicle scanning
              during replay. The project is also exercised against real
              hardware and real road-test data rather than only mocked input.
            </p>
          </article>
        </div>

        <div className="case-study-video-section">
          <div className="case-study-video-heading">
            <p className="section-label">Hardware Demonstration</p>

            <h3>OBD-II Vehicle Scan and Telemetry Demo</h3>

            <p>
              This demonstration shows the physical OBD-II adapter connected to
              the vehicle, the application scanning for the diagnostic
              interface, identifying the vehicle, and beginning communication
              with the telemetry system.
            </p>
          </div>

          <video
            className="case-study-video"
            controls
            preload="metadata"
            poster="/images/Telemetry_dashboard_scanning.PNG"
          >
            <source
              src="/videos/OBD_SCAN_DEMO.mp4"
              type="video/mp4"
            />

            Your browser does not support the video tag.
          </video>
        </div>

        <div className="case-study-details">
          <article>
            <h3>Engineering Exploration</h3>

            <p>
              I also investigated lower-level CAN traffic and
              manufacturer-specific transmission data using the STN2232-based
              OBDLink hardware. That work demonstrated the distinction between
              standardized OBD-II parameters, proprietary manufacturer
              diagnostics, and internal vehicle-network traffic. Experimental
              CAN work remains isolated from the production telemetry pipeline
              rather than relying on undocumented behavior.
            </p>
          </article>

          <article>
            <h3>Why I Built It</h3>

            <p>
              I wanted the project to exercise the parts of software development
              that appear when software interacts with real systems: hardware
              discovery, unreliable I/O, telemetry ingestion, time-series
              state, observability, persistence, replay, alarms, and
              repeatability. The result is both a usable vehicle telemetry tool
              and a platform for further hardware-based testing experiments.
            </p>
          </article>

          <article>
            <h3>Next Steps</h3>

            <p>
              The next portfolio-focused phase is a browser-accessible demo
              that allows recorded real-world trips to be replayed without
              requiring physical OBD-II hardware. The hosted experience can
              preserve the interactive telemetry dashboard, playback timeline,
              alarms, and protocol-oriented presentation while clearly labeling
              the source as recorded vehicle data.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default VehicleTelemetry;