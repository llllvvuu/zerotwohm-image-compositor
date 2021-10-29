import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import twitterCircleWhite from "../assets/twitterCircleWhite.svg";
import discordLogo from "../assets/discord-logo.svg";

function ShareOnTwitter(props) {

  const urlString = () => {
    var text;
    if (props.inOhmieCard) {
      // text = "When you're ready, come on over at @OlympusDAO and earn rewards every 8 hours. #OHMISBACKED #OHMIECARD"
      // text = "Leading up to Fohmo 3 @OlympusDAO is giving away 33 @Ledger wallets to secure your $OHM. To participate share your Ohmie Card on Twitter with the hashtags #OHMISBACKED #OHMIECARD"
      text = "When you're ready, come on over at @arbis_finance and earn rewards every 8 hours. #ZEROTWO #Z2OISBACKED"
    } else {
      text = "I'm a ZeroTwOhmie, are you anon? #ZEROTWO #Z2OISBACKED @arbis_finance";
      // text = "Leading up to Fohmo 3 @OlympusDAO is giving away 33 @Ledger wallets to secure your $OHM. To participate share your Proof of Ohmie on Twitter with the hashtags #OHMISBACKED #PROOFOFOHMIE"
    }
    return `https://twitter.com/intent/tweet?url=https%3A%2F%2Fzerotwohm.finance&text=${encodeURIComponent(text)}`;
  };

  const discordString = () => {
    return "https://discord.gg/xYzUhhyCbY";
  };
  
  return (
    <Box display="flex" className="share-btns">
      <Button
        id="share-on-twitter-button"
        variant="contained"
        // color="primary"
        // onClick={handleCompleteAward}
        className="ohmie-button"
        href={urlString()}
        target="_blank"
        data-text="w"
        data-hashtags="zerotwohm"
        // endIcon={<TwitterIcon />}
      >
        <Typography className="btn-text" style={{marginRight: "6px"}}>Share on Twitter</Typography>
        <img alt="test" height="24" src={twitterCircleWhite}/>
      </Button>
      <Button
        id="connect-on-discord-button"
        variant="contained"
        // color="primary"
        // onClick={handleCompleteAward}
        className="ohmie-button"
        href={discordString()}
        target="_blank"
        data-text="w"
        data-hashtags="zerotwohm"
      >
        <img alt="test" height="24" src={discordLogo}/>
      </Button>
    </Box>
  )
}

export default ShareOnTwitter;
