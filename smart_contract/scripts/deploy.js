const main = async () => {
  const Betting = await hre.ethers.getContractFactory("Betting");
  const betting = await Betting.deploy();

  await betting.deployed();

  console.log(
    "Betting deployed to: ", betting.address
  );
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();
