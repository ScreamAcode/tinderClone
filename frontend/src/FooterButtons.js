import React from "react";
import "./FooterButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CloseIcon from "@material-ui/icons/Close";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function FooterButtons() {
  return (
    <div className="footer-buttons">
      <IconButton className="replay">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="close">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="favorite">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="flash">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default FooterButtons;
