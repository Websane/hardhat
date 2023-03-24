import { ethers } from "hardhat";

async function main() {
  const allSigners = await ethers.getSigners();
  const [signer1] = allSigners;

  const Transfers = await ethers.getContractFactory("Transfers", signer1);
  const transfers = await Transfers.deploy(3);
  await transfers.deployed();
  console.log(transfers.address);

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
