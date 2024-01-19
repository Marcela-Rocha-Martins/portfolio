import React from "react";

import closeButton from "../images/closeButton.svg";
import minimizedButton from "../images/minimizedButton.svg";
import maximizedButton from "../images/maximizedButton.svg";

const WindowMobile = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        className="WindowMobileWrapper"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "16px",
          border: "2px solid #434343",
          background: "#F2E9D8",
          boxShadow: "8px 8px 0px 0px rgba(67, 67, 67, 0.30)",
        }}
      >
        <div
          className="firstLine"
          style={{
            display: "flex",
            flexDirection: "row",
            height: "auto",
            padding: "8px",
            flexShrink: "0",
            borderRadius: "16px 16px 0px 0px",
            borderBottom: "2px solid #434343",
            background: "#DAA28F",
            boxShadow:
              "4px 4px 0px 0px rgba(255, 255, 255, 0.4) inset,-6px -6px 0px 0px rgba(0, 0, 0, 0.15) inset",
          }}
        >
          <div
            className="allButtons"
            style={{
              gap: "8px",
              alignContent: "center",
              padding: "8px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              className="buttonsHandleWindow"
              style={{
                backgroundImage: `url(${closeButton})`,
                width: "15px",
                height: "15px",
                padding: "0",
                alignSelf: "center",
                margin: "0px",
              }}
            ></button>
            <button
              className="buttonsHandleWindow"
              style={{
                backgroundImage: `url(${minimizedButton})`,
                width: "15px",
                height: "15px",
                padding: "0",
                alignSelf: "center",
                margin: "0px",
              }}
            ></button>
            <button
              className="buttonsHandleWindow"
              style={{
                backgroundImage: `url(${maximizedButton})`,
                width: "15px",
                height: "15px",
                padding: "0",
                alignSelf: "center",
                margin: "0px",
              }}
            ></button>
          </div>
          <div
            style={{
              color: "#fff",
              flexGrow: "1",
              textAlign: "center",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "600",
              flex: "auto",
              marginRight: "20px",
            }}
          >
            <p>WARNING ⚠️</p>
          </div>
        </div>

        <div
          className="WindowMobileBody"
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="WindowMobileBodyGif" style={{}}>
            <div
              style={{
                width: "100%",
                height: 0,
                paddingBottom: "75%",
                position: "relative",
              }}
            >
              <iframe
                src="https://giphy.com/embed/eLv7gJpxqiQtbNNQUe"
                style={{ position: "absolute", width: "100%", height: "100%" }}
                title="Giphy Embed"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div
            className="WindowMobileBodyText"
            style={{
              color: "#434343",
              fontFamily: "Poppins",
              marginLeft: "1.1rem",
              marginRight: "1.1rem",
              marginTop: "0px",
           
            }}
          >
            <h3 style={{ textAlign: "center", fontSize: "1rem", margin: "0px" }}>📱 Mobile version in Progress!</h3>
            <p style={{ textAlign: "center",  fontSize: "0.9rem", margin: "0px" }}>
              Hey there, This mobile version is currently basking under
              construction beams, getting a glow-up for your pocket-sized
              pleasure. Meanwhile, feel free to{" "}
              <strong>explore on your computer 🖥️ 🖥️ 🖥️</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowMobile;
