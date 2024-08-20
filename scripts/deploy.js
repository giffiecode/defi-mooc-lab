async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    const balance = await deployer.getBalance();
    console.log("Account balance:", balance.toString());
  
    // Deploy LiquidationOperator contract
    const LiquidationOperator = await ethers.getContractFactory("LiquidationOperator");
    const contract = await LiquidationOperator.deploy();
  
    console.log("Contract deployed to address:", contract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  