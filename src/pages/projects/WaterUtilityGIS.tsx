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
              GIS application built around common utility-operations workflows.
              It gives users a map-based workspace for locating infrastructure,
              narrowing large asset sets, and inspecting individual features.
            </p>

            <p>
              Users can move from asset filtering to feature inspection and
              spatial analysis without leaving the map. Selecting a water main
              also enables proximity analysis for identifying nearby hydrants
              and valves within a configurable search distance.
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

            <figcaption>
              Interactive utility map with asset filtering and spatial analysis.
            </figcaption>
          </figure>
        </div>

        <div className="case-study-details">
          <article>
            <h3>The Problem</h3>

            <p>
              Utility infrastructure is inherently spatial, so operators need a
              clear view of where assets are located. They also need to
              understand each asset&apos;s condition and how it relates to
              surrounding infrastructure.
            </p>
          </article>

          <article>
            <h3>The Solution</h3>

            <p>
              I built a map-centered workflow that lets users progressively
              narrow the infrastructure they are working with, inspect an
              individual asset, and then analyze its geographic context. A
              selected water main can become the starting point for a proximity
              search that highlights nearby hydrants and valves.
            </p>
          </article>

          <article>
            <h3>What I Built</h3>

            <p>
              I built the application with React, TypeScript, Vite, and the
              ArcGIS Maps SDK for JavaScript. The interface includes
              context-aware asset filters, detailed feature inspection,
              configurable geodesic buffer analysis, highlighted spatial
              results, layer controls, and a full reset workflow backed by
              automated tests and continuous integration.
            </p>
          </article>
        </div>

        <div className="architecture">
          <h3>Application Workflow</h3>

          <div className="architecture-flow">
            <span>Filter Assets</span>
            <span>Inspect Feature</span>
            <span>Select Water Main</span>
            <span>Run Proximity Analysis</span>
            <span>Review Nearby Assets</span>
          </div>
        </div>

        <div className="case-study-video-section">
          <div className="case-study-video-heading">
            <p className="section-label">Application Walkthrough</p>

            <h3>Water Utility GIS Demo</h3>

            <p>
              A walkthrough of asset filtering, feature inspection, water-main
              selection, configurable buffer analysis, nearby-asset results,
              layer controls, and the application reset workflow.
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