import React, { useState, useEffect } from "react";
import "./styles/Who-Mobile.css";
import data from "../../data/testimonialsData.json";
import LikeButton from "../../components/LikeButtonComponent";

//icons
import projectsIconWhoPage from "../../images/whoPageIcons/WhoPage-projects.svg";
import experienceIconWhoPage from "../../images/whoPageIcons/WhoPage-experience.svg";
import profileIconWhoPage from "../images/icons/Who-icons/Profile-Icon.svg";
import aboutIconWhoPage from "../images/icons/Who-icons/About-Icon.svg";
import reviewsIconWhoPage from "../images/icons/Who-icons/Reviews-Icon.svg";
import contactIconWhoPage from "../images/icons/Who-icons/Contact-Icon.svg";
import workIconSummary from "../images/icons/Who-icons/Summary-Work.svg";
import locationIconSummary from "../images/icons/Who-icons/Summary-Location.svg";
import homeIconSummary from "../images/icons/Who-icons/Summary-Home.svg";
import birthdayIconSummary from "../images/icons/Who-icons/Summary-Birthday.svg";
import SeeMoreIconWhoPage from "../../images/whoPageIcons/WhoPageSeeMoreIcon.svg";

//imgs
import catsPic from "../images/photos/WhoPage-CatsCover.png";
import profilePic from "../images/photos/WhoPage-PhotoProfile.png";
import GridPic from "../images/photos/WhoPage-Grid.png";

const WhoPageMob = ({

  setIsVisible,
  appsFoldersList,
  windowName,
  setWindowName,

}) => {
  useEffect(() => {
    console.log(windowName);
  }, [windowName]);

  const [selectedItem, setSelectedItem] = useState("profile");

  function openWindow(pageId) {
    const app = appsFoldersList.find((app) => app.id === pageId);
    if (app) {
      setIsVisible(true);
      setWindowName(app.name);
    } else {
      console.log("Id not found");
    }
  }

  return (
    <div className="WhoPageMob-Container">
      {/* header da página */}
      <div className="WhoPageMob-Container-Header">
        <div className="WhoPageMob-Container-Header-Top">
          <span>fakebook</span>
          <div className="Header-Top-Icons">
            {" "}
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
        <div clasName="WhoPageMob-Container-Header-CoverName">
          <div
            className="Header-CoverName-CoverIMG"
            style={{ backgroundImage: `url(${catsPic})` }}
          ></div>
          <div className="Header-CoverName-ProfilePicName">
            <div
              className="ProfilePicName-Pic"
              style={{ backgroundImage: `url(${profilePic})` }}
            ></div>
            <div className="ProfilePicName-Name">Marcela Rocha</div>
          </div>
        </div>
        <div className="WhoPageMob-Container-Header-IconsMenu">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {" "}
            <div
              className="Header-IconsMenu-1"
              onClick={() => setSelectedItem("profile")}
            >
              <div
                className="Header-Icons-1"
                style={{
                  backgroundImage: `url(${profileIconWhoPage})`,
                  filter:
                    selectedItem === "profile"
                      ? "invert(55%) sepia(84%) saturate(512%) hue-rotate(191deg) brightness(91%) contrast(91%)"
                      : "none",
                }}
              ></div>
              <p
                className="Header-Icons-1-p"
                style={{
                  color: selectedItem === "profile" ? "#4067B2" : "#8E8E8E",
                }}
              >
                Profile
              </p>
            </div>
            <div
              className="Header-IconsMenu-2"
              onClick={() => setSelectedItem("about")}
            >
              <div
                className="Header-Icons-2"
                style={{
                  backgroundImage: `url(${aboutIconWhoPage})`,
                  filter:
                    selectedItem === "about"
                      ? "invert(55%) sepia(84%) saturate(512%) hue-rotate(191deg) brightness(91%) contrast(91%)"
                      : "none",
                }}
              ></div>
              <p
                className="Header-Icons-2-p"
                style={{
                  color: selectedItem === "about" ? "#4067B2" : "#8E8E8E",
                }}
              >
                About
              </p>
            </div>
            <div
              className="Header-IconsMenu-3"
              onClick={() => setSelectedItem("reviews")}
            >
              <div
                className="Header-Icons-3"
                style={{
                  backgroundImage: `url(${reviewsIconWhoPage})`,
                  filter:
                    selectedItem === "reviews"
                      ? "invert(55%) sepia(84%) saturate(512%) hue-rotate(191deg) brightness(91%) contrast(91%)"
                      : "none",
                }}
              ></div>
              <p
                className="Header-Icons-3-p"
                style={{
                  color: selectedItem === "reviews" ? "#4067B2" : "#8E8E8E",
                }}
              >
                Reviews
              </p>
            </div>
            <div
              className="Header-IconsMenu-4"
              onClick={() => {
                setSelectedItem("contact");
                openWindow("contact");
              }}
            >
              <div
                className="Header-Icons-4"
                style={{
                  backgroundImage: `url(${contactIconWhoPage})`,
                  filter:
                    selectedItem === "contact"
                      ? "invert(55%) sepia(84%) saturate(512%) hue-rotate(191deg) brightness(91%) contrast(91%)"
                      : "none",
                }}
              ></div>
              <p
                className="Header-Icons-3-p"
                style={{
                  color: selectedItem === "contact" ? "#4067B2" : "#8E8E8E",
                }}
              >
                Contact
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ------------- corpo da página - conteúdo ------------- */}
      <div className="WhoPageMob-Container-Body">
        {selectedItem === "profile" ? (
          <div className="WhoPageMob-Container-Body-Profile">
            <div className="WhoPageMob-Container-Body-Profile-Summary">
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "12px",
                  margin: "0",
                  color: "#434343a8",
                }}
              >
                Junior Web Developer
              </p>
              <div>
                <div className="Profile-Summary-Container">
                  <span
                    style={{
                      margin: "0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={workIconSummary}
                      alt="work icon"
                      width={10}
                      style={{ margin: "0" }}
                    />
                  </span>
                  <p
                    style={{
                      fontSize: "12px",
                      margin: "0",
                      color: "#434343a8",
                    }}
                  >
                    Former content and marketing specialist
                  </p>
                </div>
                <div className="Profile-Summary-Container">
                  <span
                    style={{
                      margin: "0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={locationIconSummary}
                      alt="work icon"
                      width={10}
                      style={{ margin: "0" }}
                    />
                  </span>
                  <p
                    style={{
                      fontSize: "12px",
                      margin: "0",
                      color: "#434343a8",
                    }}
                  >
                    Lives in Berlin, Germany
                  </p>
                </div>
                <div className="Profile-Summary-Container">
                  <span
                    style={{
                      margin: "0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={homeIconSummary}
                      alt="work icon"
                      width={10}
                      style={{ margin: "0" }}
                    />
                  </span>
                  <p
                    style={{
                      fontSize: "12px",
                      margin: "0",
                      color: "#434343a8",
                    }}
                  >
                    From São Paulo, Brazil
                  </p>
                </div>
                <div className="Profile-Summary-Container">
                  <span
                    style={{
                      margin: "0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={birthdayIconSummary}
                      alt="work icon"
                      width={10}
                      style={{ margin: "0" }}
                    />
                  </span>
                  <p
                    style={{
                      fontSize: "12px",
                      margin: "0",
                      color: "#434343a8",
                    }}
                  >
                    Born on 1992
                  </p>
                </div>
              </div>
            </div>
            <div
              className="WhoPageMob-Container-Body-Profile-Photo"
              style={{ backgroundImage: `url(${GridPic})` }}
            ></div>
          </div>
        ) : selectedItem === "about" ? (
          <div className="WhoPageMob-Container-About">
            <p style={{ color: "#434343", fontSize: "13px" }}>
              Hi, there! <br />
              <br />
              I'm 31 years old, originally from Brazil, now calling Berlin home
              with my husband and our three cats. With over a decade in
              communication and marketing.
              <br />
              <br /> Almost one year ago, I decided to heed the call of a
              long-standing aspiration from my 16-year-old self, who used to
              dabbled in blog creation and self-taught web design, and enrolled
              in an intensive full-stack bootcamp at Ironhack Berlin, where I
              learned the MERN stack technologies and built some very cool
              projects. I even won the award for the best final project in my
              cohort with a web app connected to Artificial Intelligence that
              helps users turn their dreams into projects with automatically
              generated real steps, like a personal dream assistant-ish.
              <br />
              <br /> Since then, I’ve been studying and building new projects to
              apply my skills, and now I'm seeking an opportunity to join a
              great team where I can contribute and learn.
              <br />
              <br /> Beyond hard skills, I'm a very laid-back person, an
              organized professional who communicates clearly and understands
              the importance of time and expectation management. I value
              teamwork and am never afraid to roll up my sleeves and work hard.
              <br />
              <br />I believe that respect and kindness should be the premise of
              any human interaction and that diverse spaces tell the best
              stories.
            </p>
            <div className="WhoPageMob-LikeButton">
              <LikeButton />
            </div>
          </div>
        ) : selectedItem === "reviews" ? (
          <div className="WhoPageMob-Container-Review">
            <div className="WhoPageMob-Container-Review-Content">
              <div className="WhoPageMob-Container-Review-Content-Top">
                <p>Working with me</p>
              </div>

              {data.map((testimonial) => (
                <div
                  className="WhoPageMob-Container-Review-Testimonials"
                  key={testimonial.id}
                >
                  <div className="WhoPageMob-Container-Review-Testimonials-Title">
                    <img
                      className="WhoPageMob-Container-Review-Testimonials-TitleIMG"
                      src={testimonial.personPhoto}
                      alt="testimonials"
                    />
                    <div className="WhoPageMob-Container-Review-Testimonials-TitleTXT">
                      <div className="WhoPageMob-Container-Review-Testimonials-TitleName">
                        <p>{testimonial.personName}</p>
                      </div>
                      <div className="WhoPageMob-Container-Review-Testimonials-TitleJob">
                        <p>{testimonial.personTitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="WhoPageMob-Container-Review-Testimonials-Recommendations">
                    <p>
                      <em>{testimonial.recommendation}</em>
                    </p>
                    <hr style={{ margin: "0" }} />
                  </div>
                </div>
              ))}
              <div className="WhoPageMob-Container-Review-Testimonials-Bottom">
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
                  <p>See more</p>
                  <img src={SeeMoreIconWhoPage} alt="icon see more"></img>
                </button>
              </div>
            </div>
          </div>
        ) : selectedItem === "contact" ? (
          <div className="WhoPageMob-Container-Contact">
            <p>Contact page</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default WhoPageMob;
