require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture strategy razor random upgrade hockey civil army gaze'; 
let testAccounts = [
"0x8204adf950521390dd3977b1e2cd34c150b570f0a39551dca15b81e6b99e8ad6",
"0xd19afbd21e9d41691a149387669795cd8746b752a5f99fd8a60710fc8394d456",
"0x06a5c7130d33c5c3a0a48f6cb54f684f10b68f4be501da6fc6c6060d95af6a48",
"0x3a0e7c25adcb8fa12dfd6d36864f4db24b871003f415f6a6a8672d2024738e62",
"0x9476b8618626005be2bda23ed6f3ff1c3e4cdd0157d5f9078aeb8d4756c01be6",
"0xbe1bb14a2992f7eb1276e99e34eca73a21f83879fcb3bfa716feecd70372e266",
"0x55d36269aade881815116fad7e15200d8bc7c0b8ee3eab93c6af841003ccb39c",
"0x38647e1342dfd8fffaf19fd636d66b11cc4c7723fc8995580f7e5678b22133df",
"0x7140a5391e75e6de58078d2b584b31b9bcea03d7a7ba7825ce95684637b95e64",
"0x4c57edf776598c3f7e98cc0bd0cfa968948df8b90cf8265da8489adddfd1be8e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


