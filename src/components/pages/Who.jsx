import React from "react";
import "./Who.css";
import LikeButton from "../LikeButtonComponent";
import data from "./testimonialsData.json";

// Icons
import projectsIconWhoPage from "../../images/WhoPage-projects.svg";
import experienceIconWhoPage from "../../images/WhoPage-experience.svg";
import profilePhotoWhoPage from "../../images/WhoPage-photo.png";
import linkedinIconWhoPage from "../../images/WhoPageLinkedIn.svg";
import MessageIconWhoPage from "../../images/WhoPageMessage.svg";
import WorkIconWhoPage from "../../images/WhoPageWorkIcon.svg";
import LocationPinWhoPage from "../../images/WhoPageLocationPin.svg";
import HomeIconWhoPage from "../../images/WhoPageHomeIcon.svg";
import CakeIconWhoPage from "../../images/WhoPageCakeIcon.svg";
import SeeMoreIconWhoPage from "../../images/WhoPageSeeMoreIcon.svg";

// Photos
import Photo1 from "../../images/whoPagePhotos/1.png";
import Photo2 from "../../images/whoPagePhotos/2.png";
import Photo3 from "../../images/whoPagePhotos/3.png";
import Photo4 from "../../images/whoPagePhotos/4.png";

function Who({
  isMaximized,
  page,
  activeWindows,
  setActiveWindows,
  maxZIndex,
  setMaxZIndex,
}) {
  // Maximized styles conditionals ------------------------------------ //

  const imageSize = isMaximized
    ? { width: "216px", height: "260px" }
    : { width: "160px", height: "197px" };

  const textSize = isMaximized
    ? { fontSize: "0.85rem" }
    : { fontSize: "0.75rem" };

  const gridsSize = isMaximized
    ? { gridTemplateColumns: "2fr 9fr 5fr" }
    : { gridTemplateColumns: "3fr 9fr 4fr" };

  const bodyColumn2CenterTopBioP = isMaximized
    ? { fontSize: "0.875rem", paddingRight: "9%" }
    : null;

  const bodyColumn2CenterTopBioH1 = isMaximized
    ? { fontSize: "1.375rem" }
    : null;

  const bodyColumn2CenterTopSlider = isMaximized ? { height: "180px" } : null;
  const bodyColumn2CenterTopSliderIMG = isMaximized
    ? { width: "164px", height: "180px" }
    : null;

  const bodyColumn2CenterBodyP = isMaximized
    ? { fontSize: "14px", padding: "8px" }
    : null;

  const bodyColumn2CenterBottomP = isMaximized ? { fontSize: "16px" } : null;

  const bodyColumn3RightContent = isMaximized
    ? { padding: "32px", gap: "20px" }
    : null;

  const bodyColumn3RightContentTopP = isMaximized ? { fontSize: "14px" } : null;

  const bodyColumn3RightTestimonials = isMaximized ? { gap: "20px" } : null;

  const bodyColumn3RightTestimonialsTitlePhoto = isMaximized
    ? { width: "70px", height: "70px" }
    : null;

  const bodyColumn3RightTestimonialsTitleName = isMaximized
    ? { fontSize: "16px" }
    : null;

  const bodyColumn3RightTestimonialsTitleJob = isMaximized
    ? { fontSize: "12px" }
    : null;

  const bodyColumn3RightTestimonialsTitle = isMaximized
    ? { gap: "12px" }
    : null;

  const bodyColumn3RightTestimonialsRecommendationTxT = isMaximized
    ? { fontSize: "12px", gap: "20px" }
    : null;

  const bodyColumn3RightBottom = isMaximized ? { fontSize: "14px" } : null;

  const bodyColumn3RightTestimonialsIconSeeMore = isMaximized
    ? { width: "20px" }
    : null;

  // ---------------------------------------------------------------- //

  function openWindow(pageId) {
    const clickedWindows = [...activeWindows];
    let equalsId = false;

    for (let i = 0; i < clickedWindows.length; i++) {
      if (clickedWindows[i].id === pageId) {
        equalsId = true;
        let newZIndex = maxZIndex + 1;
        clickedWindows[i].zIndex = newZIndex;
        setMaxZIndex(newZIndex);
        console.log("zIndex: ", clickedWindows[i].zIndex, "page name:", page);
      }

      if (clickedWindows[i].isVisible === false) {
        clickedWindows[i].isVisible = true;
        let newIndex = maxZIndex + 1;
        clickedWindows[i].zIndex = newIndex;
        setMaxZIndex(newIndex);
      }
    }

    if (!equalsId) {
      const newZIndex = maxZIndex + 1;
      setMaxZIndex(newZIndex);

      let pageName = "";
      if (pageId === "projects") {
        pageName = "Projects";
      } else if (pageId === "experiences") {
        pageName = "Experiences";
      } else if (pageId === "contact") {
        pageName = "Contact";
      }

      const updatedPage = {
        id: pageId,
        name: pageName,
        zIndex: newZIndex,
        isVisible: true,
      };

      clickedWindows.push(updatedPage);
    }

    setActiveWindows(clickedWindows);
  }
  return (
    <div className="WhoAmIPage-Container">
      <div className="WhoAmIPage-Container-Top">
        <span>fakebook</span>
        <div
          className="WhoAmIPage-Container-Top-Icons"
          style={{ alignItems: "center", display: "flex", gap: "8px" }}
        >
          <button
            onClick={() => openWindow("projects")}
            style={{
              background: "none",
              border: "none",
              padding: "0",
              cursor: "pointer",
            }}
          >
            <img
              src={projectsIconWhoPage}
              alt="Projects Icon"
              width="22"
              height="22"
            />
          </button>
          <button
            onClick={() => openWindow("experiences")}
            style={{
              background: "none",
              border: "none",
              padding: "0",
              cursor: "pointer",
            }}
          >
            <img
              src={experienceIconWhoPage}
              alt="Experiences Icon"
              width="30"
              height="26"
            />
          </button>
        </div>
      </div>

      <div className="WhoAmIPage-Container-Body" style={gridsSize}>
        <div className="WhoAmIPage-Container-Body-Column1-Left">
          <img
            src={profilePhotoWhoPage}
            alt="profile"
            className="WhoAmIPage-Container-Body-Column1-Left-Image"
            style={imageSize}
          />
          <div className="WhoAmIPage-Container-Body-Column1-Left-Buttons">
            <button
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/marcelarochamartins/")
              }
              className="WhoAmIPage-Container-Body-Column1-Left-Buttons-LinkedIn"
            >
              <img
                src={linkedinIconWhoPage}
                alt="linkedin icon"
                width="20px"
                height="20px"
              />
              <p style={textSize}>LinkedIn</p>
            </button>
            <button
              onClick={() => openWindow("contact")}
              className="WhoAmIPage-Container-Body-Column1-Left-Buttons-MessageMe"
            >
              <img
                src={MessageIconWhoPage}
                alt="message icon"
                width="20px"
                height="20px"
              />
              <p style={textSize}>Message me</p>
            </button>
          </div>
        </div>

        <div className="WhoAmIPage-Container-Body-Column2-Center">
          <div className="WhoAmIPage-Container-Body-Column2-Center-Top">
            <div className="WhoAmIPage-Container-Body-Column2-Center-Top-Bio">
              <h1 style={bodyColumn2CenterTopBioH1}>Marcela Rocha</h1>
              <p style={bodyColumn2CenterTopBioP}>
                <span style={{ fontWeight: "600" }}>Junior web developer </span>
                <span>
                  <img src={WorkIconWhoPage} alt="work icon" />
                </span>{" "}
                Former content and marketing specialist{" "}
                <span>
                  <img src={LocationPinWhoPage} alt="location pin" />{" "}
                </span>
                Lives in Berlin, Germany{" "}
                <span>
                  <img src={HomeIconWhoPage} alt="home icon" />{" "}
                </span>
                From São Paulo, Brazil{" "}
                <span>
                  <img src={CakeIconWhoPage} alt="cake icon" />{" "}
                </span>
                Born on 1992
              </p>
            </div>
            <div
              className="WhoAmIPage-Container-Body-Column2-Center-Top-Slider"
              style={bodyColumn2CenterTopSlider}
            >
              <img
                style={bodyColumn2CenterTopSliderIMG}
                src={Photo1}
                alt="Me and my Husband"
              />
              <img
                style={bodyColumn2CenterTopSliderIMG}
                src={Photo2}
                alt="Cats"
              />
              <img
                style={bodyColumn2CenterTopSliderIMG}
                src={Photo3}
                alt="Ironhack event"
              />
              <img
                style={bodyColumn2CenterTopSliderIMG}
                src={Photo4}
                alt="Fred and Pão de queijo"
              />
            </div>
          </div>

          <div className="WhoAmIPage-Container-Body-Column2-Center-Body">
            <p style={bodyColumn2CenterBodyP}>
              Hi, there!
              <br />
              <br />
              I'm 31 years old, originally from Brazil, now calling Berlin home
              with my husband and our three cats. With over a decade in
              communication and marketing.
              <br />
              <br />
              Almost one year ago, I decided to heed the call of a long-standing
              aspiration from my 16-year-old self, who used to dabbled in blog
              creation and self-taught web design, and enrolled in an intensive
              full-stack bootcamp at Ironhack Berlin, where I learned the MERN
              stack technologies and built some very cool projects. I even won
              the award for the best final project in my cohort with a web app
              connected to Artificial Intelligence that helps users turn their
              dreams into projects with automatically generated real steps, like
              a personal dream assistant-ish.
              <br />
              <br />
              Since then, I’ve been studying and building new projects to apply
              my skills, and now I'm seeking an opportunity to join a great team
              where I can contribute and learn.
              <br />
              <br />
              Beyond hard skills, I'm a very laid-back person, an organized
              professional who communicates clearly and understands the
              importance of time and expectation management. I value teamwork
              and am never afraid to roll up my sleeves and work hard.
              <br />
              <br />
              I believe that respect and kindness should be the premise of any
              human interaction and that diverse spaces tell the best stories.
              <br />
            </p>
          </div>

          <div className="WhoAmIPage-Container-Body-Column2-Center-Bottom">
            <LikeButton {...bodyColumn2CenterBottomP} />
          </div>
        </div>

        <div className="WhoAmIPage-Container-Body-Column3-Right">
          <div
            className="WhoAmIPage-Container-Body-Column3-Right-Content"
            style={bodyColumn3RightContent}
          >
            <div className="WhoAmIPage-Container-Body-Column3-Right-Content-Top">
              <p style={bodyColumn3RightContentTopP}>Working with me</p>
            </div>

            {data.map((testimonial) => (
              <div
                className="WhoAmIPage-Container-Body-Column3-Right-Testimonials"
                style={bodyColumn3RightTestimonials}
                key={testimonial.id}
              >
                <div
                  className="WhoAmIPage-Container-Body-Column3-Right-Testimonials-Title"
                  style={bodyColumn3RightTestimonialsTitle}
                >
                  <img
                    className="WhoAmIPage-Container-Body-Column3-Right-Testimonials-Title-Photo"
                    src={testimonial.personPhoto}
                    alt="testimonials"
                    style={bodyColumn3RightTestimonialsTitlePhoto}
                  ></img>

                  <div className="WhoAmIPage-Container-Body-Column3-Right-Testimonials-TitleTxT">
                    <div className="WhoAmIPage-Container-Body-Column3-Right-Testimonials-Title-Name">
                      <p style={bodyColumn3RightTestimonialsTitleName}>
                        {testimonial.personName}
                      </p>
                    </div>
                    <div className="WhoAmIPage-Container-Body-Column3-Right-Testimonials-Title-Job">
                      <p style={bodyColumn3RightTestimonialsTitleJob}>
                        {testimonial.personTitle}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="WhoAmIPage-Container-Body-Column3-Right-Testimonials-RecommendationTxT"
                  style={bodyColumn3RightTestimonialsRecommendationTxT}
                >
                  <p style={bodyColumn3RightTestimonialsRecommendationTxT}>
                    <em>{testimonial.recommendation}</em>
                  </p>
                  <hr style={{ margin: "0" }} />
                </div>
              </div>
            ))}

            <div className="WhoAmIPage-Container-Body-Column3-Right-Bottom">
              <button
                style={{
                  background: "none",
                  border: "none",
                  display: "flex",
                  gap: "8px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  (window.location.href =
                    "https://www.linkedin.com/in/marcelarochamartins/details/recommendations/")
                }
              >
                <p style={bodyColumn3RightBottom}>See more</p>
                <img
                  src={SeeMoreIconWhoPage}
                  alt="icon see more"
                  style={bodyColumn3RightTestimonialsIconSeeMore}
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Who;
