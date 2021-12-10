import React from "react";
import {
  Box,
  Typography,
  Zoom,
} from "@material-ui/core";

import WelcomeHeadline from "./WelcomeHeadline";
import BoxHomepage from "./BoxHomepage";

// const compositorPaper = {
//   padding: "15px",
//   textAlign: "center",
//   // marginBottom: "20px",
// }

function MainNavLinksV4() {
  const footerBoxStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px",
  };

  const footerTextStyles = {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.6)",
  }

  return (
    <Box>
      <WelcomeHeadline headline={"Welcome Umamie"} subText={"Select an Option"}/>
      <Zoom in={true}>
        <BoxHomepage />
      </Zoom>
      <Box style={footerBoxStyles}>
        <Typography style={footerTextStyles}>
          <a href="https://ohmie.olympusdao.finance/" target="_blank">Forked</a>from<a href="https://www.olympusdao.finance/" target="_blank">OlympusDAO</a>with gratitude
        </Typography>
      </Box>
    </Box>
  );
}

export default MainNavLinksV4;
