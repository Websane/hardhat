import { ethers } from "hardhat";

async function main() {
  const allSigners = await ethers.getSigners();
  const [signer1, signer2] = allSigners;
  console.log(signer1);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
