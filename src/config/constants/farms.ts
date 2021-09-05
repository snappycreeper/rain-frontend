import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'RAIN-ONE LP',
    lpAddresses: {
      97: '',
      1666600000: '0x7e89412837e9adb14efadd4df1c5520caa24e21b',
    },
    tokenSymbol: 'RAIN',
    tokenAddresses: {
      97: '',
      1666600000: '0xd009b07B4a65CC769379875Edc279961D710362d',
    },
    quoteTokenSymbol: QuoteToken.WONE,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'RAIN-BUSD LP',
    lpAddresses: {
      97: '',
      1666600000: '0xc22dc9f3c00319d457a5ce31f6629a1b18df2218',
    },
    tokenSymbol: 'RAIN',
    tokenAddresses: {
      97: '',
      1666600000: '0xd009b07B4a65CC769379875Edc279961D710362d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  /* {
    pid: 1,
    risk: 5,
    lpSymbol: 'RAIN-WONE LP',
    lpAddresses: {
      97: '',
      1666600000: '0x9539c1c15b0eb0d3692c969ae233da344bef2b9c',
    },
    tokenSymbol: 'RAIN',
    tokenAddresses: {
      97: '',
      1666600000: '0xA95f77Abc1faFAFDD16d18b8700F670bF8BC990c',
    },
    quoteTokenSymbol: QuoteToken.WONE,
    quoteTokenAdresses: contracts.wbnb,
  }, */
  {
    pid: 4,
    risk: 2,
    lpSymbol: 'RAIN-VIPER LP',
    lpAddresses: {
      97: '',
      1666600000: '0x79118dbed6b6ff060d62d38781c8e79441be88f9',
    },
    tokenSymbol: 'RAIN',
    tokenAddresses: {
      97: '',
      1666600000: '0xd009b07B4a65CC769379875Edc279961D710362d',
    },
    quoteTokenSymbol: QuoteToken.VIPER,
    quoteTokenAdresses: contracts.viper,
  },
  {
    pid: 5,
    risk: 2,
    lpSymbol: 'RAIN-XYA LP',
    lpAddresses: {
      97: '',
      1666600000: '0x4eb51880acec7cda64977d1cc35eddb9100ce1b5',
    },
    tokenSymbol: 'RAIN',
    tokenAddresses: {
      97: '',
      1666600000: '0xd009b07B4a65CC769379875Edc279961D710362d',
    },
    quoteTokenSymbol: QuoteToken.XYA,
    quoteTokenAdresses: contracts.xya,
  },
  {
    pid: 8,
    risk: 2,
    lpSymbol: 'RAIN-JEWEL LP',
    lpAddresses: {
      97: '',
      1666600000: '0x359715a5beed69f1d0b8238dd9e0945f77b6a826',
    },
    tokenSymbol: 'RAIN',
    tokenAddresses: {
      97: '',
      1666600000: '0xd009b07B4a65CC769379875Edc279961D710362d',
    },
    quoteTokenSymbol: QuoteToken.JEWEL,
    quoteTokenAdresses: contracts.jewel,
  },
  {
    pid: 10,
    risk: 2,
    lpSymbol: 'RAIN-KURO LP',
    lpAddresses: {
      97: '',
      1666600000: '0x3b01b988671e508207c2adaa87bed68981226c04',
    },
    tokenSymbol: 'KURO',
    tokenAddresses: {
      97: '',
      1666600000: '0x3e018675c0ef63eb361b9ef4bfea3a3294c74c7b',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 11,
    risk: 2,
    lpSymbol: 'RAIN-SONIC LP',
    lpAddresses: {
      97: '',
      1666600000: '0x0337309fc023ce32ad3ab608c7ca05bbc691b357',
    },
    tokenSymbol: 'RAIN',
    tokenAddresses: {
      97: '',
      1666600000: '0xd009b07B4a65CC769379875Edc279961D710362d',
    },
    quoteTokenSymbol: QuoteToken.SONIC,
    quoteTokenAdresses: contracts.sonic,
  },
  {
    pid: 12,
    risk: 2,
    lpSymbol: 'RAIN-BJEWEL DEFIKINGDOMS LP',
    lpAddresses: {
      97: '',
      1666600000: '0x46c480e4dfc15b99b727e3246c815a5833d76458',
    },
    tokenSymbol: 'BJEWEL',
    tokenAddresses: {
      97: '',
      1666600000: '0x70831ee5f8a0434bd2ddb1e45ed24cbca8b41fec',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'WONE-BUSD LP',
    lpAddresses: {
      97: '',
      1666600000: '0x4af68ad33eb03960ce146d4ecfba8f583d4a7ad8',
    },
    tokenSymbol: 'WONE',
    tokenAddresses: {
      97: '',
      1666600000: '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'RAIN',
    lpAddresses: {
      97: '',
      1666600000: '0xc22dc9f3c00319d457a5ce31f6629a1b18df2218',
    },
    tokenSymbol: 'RAIN',
    tokenAddresses: {
      97: '',
      1666600000: '0xd009b07B4a65CC769379875Edc279961D710362d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'JEWEL',
    lpAddresses: {
      97: '',
      1666600000: '0xe01502db14929b7733e7112e173c3bcf566f996e',
    },
    tokenSymbol: 'JEWEL',
    tokenAddresses: {
      97: '',
      1666600000: '0x72cb10c6bfa5624dd07ef608027e366bd690048f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BJEWEL',
    lpAddresses: {
      97: '',
      1666600000: '0x8d02a475ec60b1cb71980d3e1fdc0d264f0670fd',
    },
    tokenSymbol: 'BJEWEL',
    tokenAddresses: {
      97: '',
      1666600000: '0x70831ee5f8a0434bd2ddb1e45ed24cbca8b41fec',
    },
    quoteTokenSymbol: QuoteToken.WONE,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'XYA',
    lpAddresses: {
      97: '',
      1666600000: '0x902f7093dd1c553b10a2d07bf69491d7d25ddd7e',
    },
    tokenSymbol: 'XYA',
    tokenAddresses: {
      97: '',
      1666600000: '0x9b68BF4bF89c115c721105eaf6BD5164aFcc51E4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'WONE',
    lpAddresses: {
      97: '',
      1666600000: '0x4af68ad33eb03960ce146d4ecfba8f583d4a7ad8',
    },
    tokenSymbol: 'WONE',
    tokenAddresses: {
      97: '',
      1666600000: '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 3,
    lpSymbol: 'UST-BUSD LP',
    lpAddresses: {
      97: '',
      1666600000: '0x931dc999b67e528988dc98e0ab051528b38d7526',
    },
    tokenSymbol: 'UST',
    tokenAddresses: {
      97: '',
      1666600000: '0x224e64ec1bdce3870a6a6c777edd450454068fec',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  /* {
    pid: 8,
    risk: 2,
    lpSymbol: 'RAIN-JEWEL LP',
    lpAddresses: {
      97: '',
      1666600000: '0x359715a5beed69f1d0b8238dd9e0945f77b6a826',
    },
    tokenSymbol: 'RAIN',
    tokenAddresses: {
      97: '',
      1666600000: '0xd009b07B4a65CC769379875Edc279961D710362d',
    },
    quoteTokenSymbol: QuoteToken.JEWEL,
    quoteTokenAdresses: contracts.jewel,
  },
  {
    pid: 7,
    risk: 1,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      1666600000: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      1666600000: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 3,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '',
      1666600000: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      1666600000: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 10,
    risk: 4,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      1666600000: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      1666600000: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 11,
    risk: 4,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      1666600000: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      1666600000: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 12,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'EGG',
    lpAddresses: {
      97: '',
      1666600000: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      1666600000: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      1666600000: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      1666600000: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      1666600000: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      1666600000: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 15,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      1666600000: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      1666600000: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 16,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      1666600000: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      1666600000: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 17,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      1666600000: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      1666600000: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 18,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      97: '',
      1666600000: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      1666600000: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 19,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      1666600000: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      1666600000: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 20,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DOT',
    lpAddresses: {
      97: '',
      1666600000: '0x54c1ec2f543966953f2f7564692606ea7d5a184e', // DOT-BUSD LP
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      1666600000: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 21,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      1666600000: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      1666600000: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 22,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BSCX',
    lpAddresses: {
      97: '',
      1666600000: '0xa32a983a64ce21834221aa0ad1f1533907553136', // BSCX-BUSD LP
    },
    tokenSymbol: 'BSCX',
    tokenAddresses: {
      97: '',
      1666600000: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 23,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'AUTO',
    lpAddresses: {
      97: '',
      1666600000: '0x4d0228ebeb39f6d2f29ba528e2d15fc9121ead56', // AUTO-BNB LP
    },
    tokenSymbol: 'AUTO',
    tokenAddresses: {
      97: '',
      1666600000: '0xa184088a740c695e156f91f5cc086a06bb78b827',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
   },
   */ 
]

export default farms
