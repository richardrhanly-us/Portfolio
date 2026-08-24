function WaterUtilityGIS() {
  return (
    <main>
      <section className="section case-study">
        <p className="section-label">Project Case Study</p>

        <h2>Water Utility GIS Operations Dashboard</h2>

        <div className="case-study-intro">
          <div className="case-study-copy">
            <h3>
              Interactive GIS analysis using simulated utility data and live
              municipal infrastructure
            </h3>

            <p>
              The Water Utility GIS Operations Dashboard is an interactive web
              GIS application built around common utility-operations workflows.
              It combines simulated water utility assets with live public
              stormwater infrastructure from the City of San Antonio.
            </p>

            <p>
              Users can filter and inspect infrastructure, select a water main,
              and run proximity analysis against both local simulated assets and
              a live ArcGIS Feature Service. The application then combines those
              results into a single operational view while clearly identifying
              the source of each feature.
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
              alt="Water Utility GIS Operations Dashboard showing simulated utility assets and City of San Antonio stormwater infrastructure"
              className="case-study-image"
            />

            <figcaption>
              Interactive utility map combining simulated water infrastructure
              with live City of San Antonio GIS data.
            </figcaption>
          </figure>
        </div>

        <div className="case-study-details">
          <article>
            <h3>The Problem</h3>

            <p>
              Utility infrastructure is inherently spatial. Operators need to
              understand where assets are located, what condition they are in,
              and what other infrastructure may be affected when work is
              performed in a given area. That often means working across
              multiple datasets rather than looking at a single layer in
              isolation.
            </p>
          </article>

          <article>
            <h3>The Solution</h3>

            <p>
              I built a map-centered workflow that combines simulated water
              utility assets with public municipal GIS data. A selected water
              main can be used to generate a configurable geodesic buffer, find
              nearby simulated hydrants and valves, and query a live City of
              San Antonio stormwater Feature Service for intersecting
              infrastructure.
            </p>
          </article>

          <article>
            <h3>What I Built</h3>

            <p>
              I built the application with React, TypeScript, Vite, and the
              ArcGIS Maps SDK for JavaScript. It includes context-aware asset
              filters, feature inspection, ArcGIS FeatureLayer integration,
              geodesic buffer analysis, local geometry intersection checks,
              server-backed spatial queries, highlighted map results, source
              labeling, automated tests, continuous integration, and production
              deployment.
            </p>
          </article>
        </div>

        <div className="architecture">
          <h3>Application Workflow</h3>

          <div className="architecture-flow">
            <span>Select Water Main</span>
            <span>Create Geodesic Buffer</span>
            <span>Check Simulated Assets</span>
            <span>Query ArcGIS Feature Service</span>
            <span>Combine Spatial Results</span>
          </div>
        </div>

        <div className="case-study-details">
          <article>
            <h3>Live GIS Integration</h3>

            <p>
              The application loads real public stormwater infrastructure from
              a City of San Antonio ArcGIS Feature Service at runtime. The layer
              includes real line geometry and attributes such as structure
              type, material, diameter, year constructed, condition score,
              status, and maintenance responsibility.
            </p>
          </article>

          <article>
            <h3>Mixed-Source Spatial Analysis</h3>

            <p>
              The proximity workflow combines two forms of GIS analysis. Local
              simulated hydrants and valves are checked against the selected
              buffer in the browser, while the same buffer geometry is sent to
              the City of San Antonio Feature Service as a spatial intersection
              query. The returned public features are then combined with the
              simulated results.
            </p>
          </article>

          <article>
            <h3>Data Transparency</h3>

            <p>
              Water mains, hydrants, valves, and service zones are intentionally
              simulated because detailed water utility infrastructure is not
              represented as public data in this project. Public stormwater
              results are clearly labeled as City of San Antonio data so users
              can distinguish real municipal GIS features from the simulated
              utility network.
            </p>
          </article>
        </div>

        <div className="case-study-video-section">
          <div className="case-study-video-heading">
            <p className="section-label">Application Walkthrough</p>

            <h3>Water Utility GIS Demo</h3>

            <p>
              A walkthrough of asset filtering, feature inspection, water-main
              selection, geodesic buffer analysis, live ArcGIS Feature Service
              queries, mixed-source spatial results, layer controls, testing,
              and the application reset workflow.
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