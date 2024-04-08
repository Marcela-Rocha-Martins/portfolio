import React, { useState, useEffect } from "react";
import LikeIconWhoPage from "../images/WhoPageLikeIcon.svg";
import LikedIconWhoPage from "../images/WhoPageLikedIcon.svg";

function LikeButton(bodyColumn2CenterBottomP, { textId }) {
  const [liked, setLiked] = useState(false);
  const [totalLikes, setTotalLikes] = useState(0);

  useEffect(() => {
    const userLiked = localStorage.getItem(`liked_${textId}`);
    if (userLiked) {
      setLiked(true);
    }

    const textLikes = localStorage.getItem(`likes_${textId}`);
    if (textLikes) {
      setTotalLikes(parseInt(textLikes));
    }
  }, [textId]);

  const handleClick = () => {
    if (liked) {
      localStorage.removeItem(`liked_${textId}`);
      setLiked(false);
      setTotalLikes((prevTotalLikes) => {
        const newTotalLikes = prevTotalLikes - 1;
        localStorage.setItem(`likes_${textId}`, newTotalLikes);
        return newTotalLikes;
      });
      console.log(totalLikes);
    } else if (!liked) {
      localStorage.setItem(`liked_${textId}`, true);
      setLiked(true);
      setTotalLikes((prevTotalLikes) => {
        const newTotalLikes = prevTotalLikes + 1;
        localStorage.setItem(`likes_${textId}`, newTotalLikes);
        return newTotalLikes;
      });
      console.log(totalLikes);
    }
  };

  return (
    <div
      style={{
        background: "none",
        border: "none",
        display: "flex",
        flexDirection: "column",
        gap: "2px",
      }}
    >
      <button
        onClick={handleClick}
        style={{
          background: "none",
          border: "none",
          padding: "0",
          fontFamily: "poppins",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "2px",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <img
            src={liked ? LikedIconWhoPage : LikeIconWhoPage}
            alt="Like icon"
            height={20}
          />

          <p
            style={{
              margin: "0",
              ...bodyColumn2CenterBottomP,
              fontWeight: "550",
            }}
          >
            {liked ? "Unlike" : "Like"}
          </p>
        </div>
      </button>

      {liked ? (
        <p
          style={{
            margin: "0",
            fontSize: "12px",
            color: "#4343438e",
          }}
        >
          {totalLikes === 1 ? (
            "You liked this"
          ) : totalLikes === 2 ? (
            "You and 1 other liked this"
          ) : totalLikes > 2 ? (
            `You and ${totalLikes} others liked this`
          ) : null}
        </p>
      ) : (
        <p
          style={{
            margin: "0",
            fontSize: "12px",
            color: "#4343438e",
          }}
        >
          {totalLikes < 1 ? null : (
            <>
              <span style={{ fontWeight: "600" }}>{totalLikes}</span>{" "}
              {totalLikes > 1 ? "people " : "person "}
              liked this
            </>
          )}
        </p>
      )}
    </div>
  );
}

export default LikeButton;
