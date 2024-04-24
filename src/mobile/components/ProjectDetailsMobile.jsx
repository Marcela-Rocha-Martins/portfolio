import React from "react";
import "../pages/styles/Projects-Mobile.css";
import gitHubIcon from "../../images/github-icon.svg";
import liveIcon from "../../images/live-icon.svg";
import closeIcon from "../images/icons/Close-Icon.svg"

const ProjectDetailsMobile = ({ project, onClose }) => {
  return (
    <div className="projectDetailsContainerMOB">
      <div className="projectDetailsMOB">
        <div className="closeButtonMOB" onClick={onClose}>
          <div style={{backgroundImage:`url(${closeIcon})`}}></div>
        </div>
        {/* video -------- */}
        <div className="projectVideoWrapperMOB">
          {project.details.video ? (
            <video
              key={`video_${project.id}`}
              className="projectVideoMOB"
              playsInline
              loop
              preload
              muted
            >
              <source
                src={`${window.location.origin}${project.details.video}`}
              />
            </video>
          ) : null}
          <div className="projectTechnologiesMOB">
            {project.details.technologies.map((technology) => (
              <div className="technologyTagMOB" key={technology.id}>
                {technology}
              </div>
            ))}
          </div>
        </div>
        {/* txt -------- */}
        <div className="bottomContentMOB">
          <div className="bottomTextsMOB">
          <div className="projectNameMOB">
          <h2>{project.name}</h2>
        </div>
            <div className="bottomDetailsMOB">
              <div
                className="projectDescriptionMOB"
                dangerouslySetInnerHTML={{
                  __html: project.details.description,
                }}
              ></div>
            </div>
          </div>

          <div
            className="buttonsMOB"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              marginTop: "5%",
              marginLeft: "5%",
            }}
          >
            {project.details.title === "My Portfolio" ? (
              <button
                className="buttonGitHubLiveMOB"
                onClick={() =>
                  (window.location.href = project.details.github)
                }
              >
                <div
                  className="buttonIconMOB"
                  style={{
                    backgroundImage: `url(${gitHubIcon})`,
                    width: "18px",
                    height: "18px",
                  }}
                ></div>
                <div className="buttonTitleMOB">GitHub</div>
              </button>
            ) : (
              <>
                <button
                  className="buttonGitHubLiveMOB"
                  onClick={() =>
                    (window.location.href = project.details.github)
                  }
                >
                  <div
                    className="buttonIconMOB"
                    style={{
                      backgroundImage: `url(${gitHubIcon})`,
                    }}
                  ></div>
                  <div className="buttonTitleMOB">GitHub</div>
                </button>

                <div
                  className="buttonGitHubLiveMOB"
                  onClick={() =>
                    (window.location.href = project.details.live)
                  }
                >
                  <div
                    className="buttonIconMOB"
                    style={{ backgroundImage: `url(${liveIcon})` }}
                  ></div>
                  <div className="buttonTitleMOB">Live</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsMobile;
