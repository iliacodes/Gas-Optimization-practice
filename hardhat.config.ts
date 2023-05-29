import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address)
  }
});

const config: HardhatUserConfig = {
  paths: {tests: "tests"},
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        runs: 1,
        enabled: true
      }
    }
  }
};

export default config;
