function WaterUtilityGIS() {
  return (
    <main>
      <section className="section case-study">
        <p className="section-label">Project Case Study</p>

        <h2>Water Utility GIS Operations Dashboard</h2>

        <div className="case-study-intro">
          <div className="case-study-copy">
            <h3>
              Interactive GIS analysis for simulated utility infrastructure
            </h3>

            <p>
              The Water Utility GIS Operations Dashboard is an interactive web
              GIS application for analyzing simulated water utility
              infrastructure. The user has easy access to useful tools for
              visualizing, filtering, and inspecting assets in their work space.
            </p>

            <p>
              The application includes water mains, hydrants, valves, and
              service zones, along with attribute-based filtering and spatial
              analysis tools for identifying infrastructure near selected water
              mains.
            </p>

            <div className="case-study-links">
              <a
                href="https://water-utility-gis.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Open Live Application
              </a>

              <a
                href="https://github.com/richardrhanly-us/water-utility-gis"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                View Source Code
              </a>
            </div>
          </div>

          <figure className="case-study-image-container">
            <img
              src="/images/GIS-image.png"
              alt="Water Utility GIS Operations Dashboard showing simulated water infrastructure and spatial analysis"
              className="case-study-image"
            />

            <figcaption>The interactive map.</figcaption>
          </figure>
        </div>

        <div className="case-study-details">
          <article>
            <h3>The Problem</h3>

            <p>
              Utility infrastructure is inherently spatial, so operators need a
              clear view of where assets are located. They also need to
              understand each asset&apos;s condition and how it connects to the
              surrounding infrastructure.
            </p>
          </article>

          <article>
            <h3>The Solution</h3>

            <p>
              I built an interactive GIS dashboard that combines map-based
              visualization with asset filtering, feature inspection, and
              geometry-based proximity analysis. Users can select a water main,
              create a configurable geographic buffer, and identify nearby
              hydrants and valves.
            </p>
          </article>

          <article>
            <h3>What I Built</h3>

            <p>
              The application uses React, TypeScript, Vite, and the ArcGIS Maps
              SDK for JavaScript. It includes structured synthetic utility data,
              multiple GIS layers, context-aware filters, asset detail views,
              geodesic buffering, spatial intersection analysis, Vitest
              automated tests, and GitHub Actions continuous integration.
            </p>
          </article>
        </div>

        <div className="architecture">
          <h3>Application Workflow</h3>

          <div className="architecture-flow">
            <span>Utility Data</span>
            <span>ArcGIS Layers</span>
            <span>React Interface</span>
            <span>Geometry Analysis</span>
            <span>Operational Results</span>
          </div>
        </div>

        <div className="case-study-video-section">
          <div className="case-study-video-heading">
            <p className="section-label">Application Walkthrough</p>

            <h3>Water Utility GIS Demo</h3>

            <p>
              A walkthrough of the map layers, utility filters, asset
              inspection, spatial buffer analysis, automated testing, and
              continuous integration workflow.
            </p>
          </div>

          <video
            className="case-study-video"
            controls
            preload="metadata"
            poster="/images/GIS-image.png"
          >
            <source
              src="/videos/GIS_Dashboard-walkthrough.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </main>
  );
}

export default WaterUtilityGIS;
