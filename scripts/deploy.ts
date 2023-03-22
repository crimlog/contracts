import { ethers } from 'hardhat';

async function main() {
	const CrimLogRecord = await ethers.getContractFactory('CrimLogRecord');
	const crimLogRecord = await CrimLogRecord.deploy();

	await crimLogRecord.deployed();

	console.log(`deployed to ${crimLogRecord.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
