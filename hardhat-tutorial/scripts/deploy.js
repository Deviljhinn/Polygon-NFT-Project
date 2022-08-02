const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a MoonBunny
  const metadataURL = "ipfs://QmTe5zDCay3epk47EKTJVdGbA8JRADPUkmvHtJ49DKJjMt/";
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so MoonBunniesContract here is a factory for instances of our MoonBunnies contract.
  */
  const moonBunniesContract = await ethers.getContractFactory("MoonBunnies");

  // deploy the contract
  const deployedMoonBunniesContract = await moonBunniesContract.deploy(metadataURL);

  await deployedMoonBunniesContract.deployed();

  // print the address of the deployed contract
  console.log("MoonBunnies Contract Address:", deployedMoonBunniesContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });