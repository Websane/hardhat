import { ethers } from "hardhat";

async function main() {
  const allSigners = await ethers.getSigners();
  const [singer1] = allSigners;

  const Transfers = await ethers.getContractFactory("Transfers", singer1);
  const transfers = await Transfers.deploy(3);
  await transfers.deployed();
  console.log(transfers.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
