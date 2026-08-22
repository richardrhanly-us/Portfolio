function LibraryAI() {
  return (
    <main>
      {
        <section id="homelab-case-study" className="section case-study">
          <p className="section-label">Project Case Study</p>
          <h2>Homelab Network Infrastructure</h2>

          <div className="case-study-intro">
            <div className="case-study-copy">
              <h3>Building a complete network and server environment</h3>

              <p>
                This project documents the design and implementation of a
                working homelab built around UniFi networking, structured
                Ethernet cabling, Ubuntu Server, Docker, network-wide DNS
                filtering, and infrastructure monitoring.
              </p>

              <p>
                The environment provides a practical platform for learning Linux
                administration, networking, containers, DNS, monitoring,
                security planning, and infrastructure troubleshooting.
              </p>

              <div className="case-study-links">
                <a
                  href="https://github.com/richardrhanly-us/homelab-network-infrastructure"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  View Documentation
                </a>
              </div>
            </div>

            <figure className="case-study-image-container">
              <img
                src="/images/rack-front-view.jpeg"
                alt="Physical homelab network rack"
                className="case-study-image"
              />

              <figcaption>
                The network rack containing the gateway, managed switch, patch
                panel, server hardware, and supporting infrastructure.
              </figcaption>
            </figure>
          </div>

          <div className="case-study-details">
            <article>
              <h3>The Goal</h3>
              <p>
                I wanted to build a reliable environment for learning
                networking, Linux administration, container deployment, DNS,
                monitoring, and infrastructure security through hands-on work.
              </p>
            </article>

            <article>
              <h3>The Implementation</h3>
              <p>
                I installed structured Cat6 cabling, configured a UniFi gateway,
                managed PoE switch and wireless access point, deployed Ubuntu
                Server, and added Docker-based services for management and
                monitoring.
              </p>
            </article>

            <article>
              <h3>What I Built</h3>
              <p>
                The environment includes Pi-hole and Unbound DNS, Docker,
                Portainer, Uptime Kuma, network storage, SSH administration,
                service validation, security documentation, and planned VLAN and
                firewall segmentation.
              </p>
            </article>
          </div>

          <div className="architecture">
            <h3>Network Architecture</h3>

            <div className="architecture-flow">
              <span>Internet</span>
              <span>UniFi Gateway</span>
              <span>Managed PoE Switch</span>
              <span>Pi-hole and Unbound</span>
              <span>Ubuntu Docker Host</span>
            </div>
          </div>
        </section>
      }
    </main>
  );
}

export default LibraryAI;
