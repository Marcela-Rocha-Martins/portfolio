import React, { useState, useEffect } from "react";
import LikeIconWhoPage from "../images/WhoPageLikeIcon.svg";
import LikedIconWhoPage from "../images/WhoPageLikedIcon.svg";

function LikeButton(bodyColumn2CenterBottomP, { textId }) {
  const [liked, setLiked] = useState(false);
  const [totalLikes, setTotalLikes] = useState(0);

  useEffect(() => {
    // Verifica se o usuário já curtiu o texto ao montar o componente
    const userLiked = localStorage.getItem(`liked_${textId}`);
    if (userLiked) {
      setLiked(true);
    }

    // Recupera o total de likes do texto ao montar o componente
    const textLikes = localStorage.getItem(`likes_${textId}`);
    if (textLikes) {
      setTotalLikes(parseInt(textLikes));
    }
  }, [textId]);

  const handleClick = () => {
    if (liked) {
      localStorage.removeItem(`liked_${textId}`);
      setLiked(false);
      setTotalLikes(totalLikes - 1);
      localStorage.setItem(`likes_${textId}`, totalLikes - 1);
    } else {
      localStorage.setItem(`liked_${textId}`, true);
      setLiked(true);
      setTotalLikes(totalLikes + 1);
      localStorage.setItem(`likes_${textId}`, totalLikes + 1);
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
          <span style={{ fontWeight: "600" }}>You</span> and{" "}
          <span style={{ fontWeight: "600" }}>{totalLikes}</span> others liked
          this
        </p>
      ) : (
        <p style={{
          margin: "0",
          fontSize: "12px",
          color: "#4343438e",
        }}>
          <span style={{ fontWeight: "600" }}>{totalLikes}</span> people liked
          this
        </p>
      )}
    </div>
  );
}

export default LikeButton;
