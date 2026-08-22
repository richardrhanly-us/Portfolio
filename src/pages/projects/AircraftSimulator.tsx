function LibraryAI() {
  return (
    <main>
      {
        <section
          id="aircraft-simulator-case-study"
          className="section case-study"
        >
          <p className="section-label">Project Case Study</p>
          <h2>Aircraft Mission Systems Simulator</h2>

          <div className="case-study-intro">
            <div className="case-study-copy">
              <h3>
                Simulating aircraft telemetry, commands, and communication
                faults
              </h3>

              <p>
                Aircraft Mission Systems Simulator is a C++17
                distributed-systems project that models communication between
                aircraft software and a mission-control system using separate
                processes and UDP networking.
              </p>

              <p>
                The simulator generates and validates JSON telemetry, tracks
                sequence numbers, detects packet loss and stale data, sends
                mission commands, and returns acknowledgment or rejection
                responses based on command validation.
              </p>

              <div className="case-study-links">
                <a
                  href="https://github.com/richardrhanly-us/aircraft-mission-simulator"
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
                src="/images/aircraft-mission-simulator.png"
                alt="Aircraft Mission Systems Simulator telemetry output"
                className="case-study-image"
              />

              <figcaption>
                The simulator transmits aircraft telemetry, detects
                communication faults, and processes mission-control commands
                over UDP.
              </figcaption>
            </figure>
          </div>

          <div className="case-study-details">
            <article>
              <h3>The Problem</h3>
              <p>
                Mission software must exchange structured data across subsystem
                boundaries while detecting malformed messages, missing packets,
                stale telemetry, invalid commands, and communication recovery.
              </p>
            </article>

            <article>
              <h3>The Solution</h3>
              <p>
                I created separate C++ processes for telemetry publishing,
                telemetry monitoring, command generation, and command
                processing, connected through UDP sockets and JSON message
                schemas.
              </p>
            </article>

            <article>
              <h3>What I Built</h3>
              <p>
                The project includes telemetry generation, sequence tracking,
                packet-loss simulation, stale-stream detection, recovery
                reporting, command validation, ACK and REJECTED responses, CMake
                builds, CTest automation, and GitHub Actions.
              </p>
            </article>
          </div>

          <div className="architecture">
            <h3>System Architecture</h3>

            <div className="architecture-flow">
              <span>Telemetry Publisher</span>
              <span>UDP and JSON</span>
              <span>Telemetry Receiver</span>
              <span>Mission Controller</span>
              <span>Command Processor</span>
            </div>
          </div>
        </section>
      }
    </main>
  );
}

export default LibraryAI;
