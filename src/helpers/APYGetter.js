import { ethers } from "ethers";
import { StaticJsonRpcProvider } from "@ethersproject/providers";
import { EnvHelper } from "../helpers/Environment";
import { trim } from "../helpers/index.js";

import { abi as OlympusStakingv2 } from "../abi/OlympusStakingv2.json";
import { abi as sOHMv2 } from "../abi/sOhmv2.json";

const STAKING_ADDRESS = "0xc9ecfef2fac1e38b951b8c5f59294a8366dfbd81";
const SOHM_ADDRESS = "0xe6d557d416ff5640235119369c7e26AA18a906D7";

// Use the mainnet
// const network = "homestead";

const ALCHEMY_ID_LIST = EnvHelper.getAlchemyAPIKeyList();
// const SELF_HOSTED_LIST = EnvHelper.getSelfHostedSockets();
// const _selfHostedURIs = SELF_HOSTED_LIST;
const _alchemyURIs = ALCHEMY_ID_LIST.map(alchemyID => `https://arb-mainnet.g.alchemy.com/v2/${alchemyID}`);
const ALL_URIs = [..._alchemyURIs];

// console.log("self hosted", SELF_HOSTED_LIST);
/**
 * "intelligently" loadbalances production API Keys
 * @returns string
 */
function getMainnetURI(): string {
  // Shuffles the URIs for "intelligent" loadbalancing
  const allURIs = ALL_URIs.sort(() => Math.random() - 0.5);

  // There is no lightweight way to test each URL. so just return a random one.
  // if (workingURI !== undefined || workingURI !== "") return workingURI as string;
  const randomIndex = Math.floor(Math.random() * allURIs.length);
  return allURIs[randomIndex];
};

// console.log("self hosted", getMainnetURI());


// const provider = new WebSocketProvider(getMainnetURI());
const provider = new StaticJsonRpcProvider(getMainnetURI());

export const getStakingAPY = async () => {
  const stakingContract = new ethers.Contract(STAKING_ADDRESS, OlympusStakingv2, provider);
  const sohmMainContract = new ethers.Contract(SOHM_ADDRESS, sOHMv2, provider);
  
  const epoch = await stakingContract.epoch();
  const circ = await sohmMainContract.circulatingSupply();

  const stakingReward = epoch.distribute;
  const stakingRebase = stakingReward / circ;
  const stakingAPY = Math.pow(1 + stakingRebase, 365 * 3) - 1;
  const trimmedStakingAPY = trim(stakingAPY * 100, 0);
  console.log(epoch);
  console.log(circ);
  console.log(epoch.distribute.toString());
  console.log(circ.toString());
  console.log(circ);
  console.log(stakingRebase);
  console.log(stakingAPY);
  console.log(trimmedStakingAPY);
  return {raw: stakingAPY, formatted: trimmedStakingAPY};  
};

// export const getFormattedStakingAPY = async () => {
//   getStakingAPY().then(rawStakingAPY => {

//     const trimmedStakingAPY = trim(rawStakingAPY * 100, 1);
//     console.log("formatted, raw", trimmedStakingAPY, rawStakingAPY);

//     return trimmedStakingAPY;
//   });
// }
