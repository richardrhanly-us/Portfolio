function LibraryAI() {
  return (
    <main>
      {
        <section id="library-ai-case-study" className="section case-study">
          <p className="section-label">Project Case Study</p>
          <h2>Library AI Assistant</h2>

          <div className="case-study-intro">
            <div className="case-study-copy">
              <h3>Grounded answers from uploaded documents</h3>

              <p>
                Library AI Assistant is a retrieval-augmented generation
                application that allows users to upload PDF documents and ask
                questions about their contents.
              </p>

              <p>
                The system extracts and chunks document text, generates vector
                embeddings, stores searchable content in Chroma, retrieves
                relevant passages, and returns an answer with supporting source
                references.
              </p>

              <div className="case-study-links">
                <a
                  href="https://library-ai-assistant.streamlit.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  Open Live Application
                </a>

                <a
                  href="https://github.com/richardrhanly-us/library-ai-assistant"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  View Source Code
                </a>
              </div>
            </div>

            <div className="case-study-media-column">
              <figure className="video-container">
                <video
                  controls
                  preload="metadata"
                  poster=""
                  className="project-video"
                >
                  <source
                    src="/videos/libraryaiassistant-walkthrough.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support embedded video.
                </video>
              </figure>
            </div>
          </div>

          <div className="case-study-details">
            <article>
              <h3>The Problem</h3>
              <p>
                Important information inside long documents can be difficult to
                locate quickly, especially when users do not know the exact
                words used in the source material.
              </p>
            </article>

            <article>
              <h3>The Solution</h3>
              <p>
                I built a semantic retrieval pipeline that searches document
                meaning rather than relying only on exact keyword matches, then
                supplies the retrieved passages to the language model as
                context.
              </p>
            </article>

            <article>
              <h3>What I Built</h3>
              <p>
                The application includes PDF processing, text chunking, OpenAI
                embeddings, Chroma vector storage, FastAPI endpoints, a
                Streamlit interface, source citations, duplicate detection,
                document management, and automated tests.
              </p>
            </article>
          </div>

          <div className="architecture">
            <h3>System Architecture</h3>

            <div className="architecture-flow">
              <span>PDF Upload</span>
              <span>Text Processing</span>
              <span>OpenAI Embeddings</span>
              <span>Chroma Search</span>
              <span>Grounded Response</span>
            </div>
          </div>
        </section>
      }
    </main>
  );
}

export default LibraryAI;
