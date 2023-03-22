import '@nomicfoundation/hardhat-toolbox';
import { config } from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';
config();

const hardhatConfig: HardhatUserConfig = {
	solidity: '0.8.18',
	networks: {
		matic: {
			url: 'https://polygon-mumbai.g.alchemy.com/v2/gAaQHoU1LbdCyk54R8AQF21NDihNOk0b',
			accounts: [process.env.MATIC_PRIVATE_KEY!],
		},
	},
};

export default hardhatConfig;
