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
  const [singer1, singer2] = allSigners;

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const transfersContract = new ethers.Contract(
    contractAddress,
    TransfersArtifact.abi,
    singer1
  )

  // const tx = {
  //   to: contractAddress,
  //   value: ethers.utils.parseEther("1"),
  // };

  // const txSend = await singer2.sendTransaction(tx);
  // await txSend.wait();

  // const result = await transfersContract.getTransfer(0);
  // console.log(result);

  // const result = await transfersContract.connect(singer2).withdrawTo(singer2.address);
  // console.log(result);

  // const result = await transfersContract.withdrawTo(singer2.address);
  // console.log(result);

  await currentBalance(contractAddress, 'Contract balance: ');
  await currentBalance(singer1.address, 'Singer 1 balance: ');
  await currentBalance(singer2.address, 'Singer 2 balance: ');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
