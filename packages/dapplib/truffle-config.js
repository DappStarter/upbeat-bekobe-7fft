require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift raise noble hospital give civil army gas'; 
let testAccounts = [
"0xd1a2e8585450d50cfacbe5f7354cbafcbfc8638229350a48abe96f53ee6f9038",
"0x53e139ed41af24c6a9aebcec0d67e781fd6078ff435688d7d21cc1f8eb30f814",
"0xcf6eb9b11be506e57569bb4c4dc1a61c92146cf61244016ee884560509845767",
"0x1424af323c7706136ec38f0779e032405d33e659b13c95fffcd1e71b17b4b1c2",
"0xd9b8a4f104667a5280b52904b51d2994afac7d85d9d0d144fa64786352cb2ef7",
"0x8714992a64cacd0b5a1f9ef5b9bd74d82eb8ad348cd7a1b88728e12d71e9d52a",
"0xc352c30f6a9dc90b8a5b4e27398a747fa9e8b2643d2a1fa20f56a82a2e88947c",
"0x45b3588e6ff7307b5d2f570336da8f8784c44a97fde00b033931c01439c47ec3",
"0xb6e9e91a403702280e390e4a152f344cfe55c42ba81b47b799a8654f8db64eb2",
"0xe087e69af9264264e25ce48e1c33d1ac1a2f4a0d00c18cedf68bca0d72a2fe70"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

