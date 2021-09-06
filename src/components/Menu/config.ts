import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://viper.exchange/#/swap?outputCurrency=0xd009b07B4a65CC769379875Edc279961D710362d',
      },
      {
        label: 'Liquidity',
        href: 'https://viper.exchange/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Thunder Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
   {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
   },
   {
    label: 'Lightning Wheel',
    icon: 'SunIcon',
    href: '/lightningwheel',
  },
   {
    label: 'Partnerships/IFO',
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: 'Layer 2 Farming',
    icon: 'MoonIcon',
    href: 'https://www.thevalleys.one/',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Chart',
        href: 'https://info.viper.exchange/token/0xd009b07B4a65CC769379875Edc279961D710362d',
      },
      /* {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/goose-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/goose-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      }, */
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/snappycreeper/rain-uikit',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/DTdeeZ4zKk',
      },
      {
        label: 'Gitbook',
        href: 'https://rainfinance.gitbook.io/',
      },
    ],
  },
  /* {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  },
  {
    label: 'Audit by CertiK',
    icon: 'AuditIcon',
    href: 'https://certik.org/projects/goose-finance',
  }, */
]

export default config
