import React from "react";
import "../pages/styles/Projects-Mobile.css";
import gitHubIcon from "../../images/github-icon.svg";
import liveIcon from "../../images/live-icon.svg";
import closeIcon from "../images/icons/Close-Icon.svg";

const ProjectDetailsMobile = ({ project, onClose }) => {
  return (
    <div className="projectDetailsContainerMOB">
      <div className="projectDetailsMOB">
        <div className="closeButtonMOB" onClick={onClose}>
          <div style={{ backgroundImage: `url(${closeIcon})` }}></div>
        </div>
        {/* video -------- */}
        <div className="projectVideoWrapperMOB">
          {project.details.video ? (
            <>
              <div className="videoWrapperMOB">
                <iframe
                  key={`video_${project.id}`}
                  title={`video_${project.id}`}
                  className="projectVideoMOB"
                  src={project.details.video}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  frameborder="0"
                  mute="1"
                ></iframe>
              </div>
              <div className="projectTechnologiesMOB">
                {project.details.technologies.map((technology) => (
                  <div className="technologyTagMOB" key={technology.id}>
                    {technology}
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </div>
        {/* txt -------- */}
        <div className="bottomContentMOB">
          <div className="bottomTextsMOB">
            <div className="projectNameMOB">
              <h2>{project.name}</h2>
            </div>
            {!project.details.video && (
              <div className="projectTechnologiesMOB2">
                {project.details.technologies.map((technology) => (
                  <div className="technologyTagMOB" key={technology.id}>
                    {technology}
                  </div>
                ))}
              </div>
            )}

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
              gap: "8px",
              marginTop: "5%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {project.details.title === "My Portfolio" ? (
              <button
                className="buttonGitHubLiveMOB"
                onClick={() => (window.location.href = project.details.github)}
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
                  onClick={() => (window.location.href = project.details.live)}
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
      <div
        className="IamJustASafeSpace"
        style={{
          width: "70vw",
          height: "180px",
        }}
      ></div>
    </div>
  );
};

export default ProjectDetailsMobile;
