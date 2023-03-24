import { ethers } from "hardhat";
const TransfersArtifact = require('../artifacts/contracts/Transfers.sol/Transfers.json');

async function currentBalance(address: string, msg = '') {
  const rawBalance = await ethers.provider.getBalance(address);
  const balance = ethers.utils.formatEther(rawBalance);
  console.log(msg, balance);
  return balance;
}

async function main() {
  const allSigners = await ethers.getSigners();
  const [signer1, singer2] = allSigners;

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const transfersContract = new ethers.Contract(
    contractAddress,
    TransfersArtifact.abi,
    signer1
  )

  // const tx = {
  //   to: contractAddress,
  //   value: ethers.utils.parseEther("1"),
  // };

  // const txSend = await singer2.sendTransaction(tx);
  // await txSend.wait();

  // await currentBalance(contractAddress, 'Contract balance: ');
  // await currentBalance(singer2.address, 'Singer 2 balance: ');

  const result = await transfersContract.getTransfer(0);
  console.log(result);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
