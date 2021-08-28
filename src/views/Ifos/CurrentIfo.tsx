import React from 'react'
import styled from 'styled-components'
import { Text, Heading, BaseLayout, Button, LinkExternal, Flex, Image } from '@pancakeswap-libs/uikit'
import { ifosConfig } from 'config/constants'
import useI18n from 'hooks/useI18n'
import IfoCard from './components/IfoCard'
import Title from './components/Title'
import IfoCards from './components/IfoCards'

const LaunchIfoCallout = styled(BaseLayout)`
  border-top: 2px solid ${({ theme }) => theme.colors.textSubtle};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 0 auto;
  padding: 32px 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: 1fr 1fr;
  }
`

const List = styled.ul`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;

  & > li {
    line-height: 1.4;
    margin-bottom: 8px;
  }
`

/**
 * Note: currently there should be only 1 active IFO at a time
 */
const activeIfo = ifosConfig.find((ifo) => ifo.isActive)

const Ifo = () => {
  const TranslateString = useI18n()

  return (
    <div>
      <IfoCards isSingle>
        <IfoCard ifo={activeIfo} />
      </IfoCards>
      <LaunchIfoCallout>
        <div>
          <Title as="h2">{TranslateString(592, 'How to take part')}</Title>
          <Heading mb="16px">{TranslateString(594, 'Before Sale')}:</Heading>
          <List>
            <li>{TranslateString(999, 'Buy RAIN and WONE tokens')}</li>
            <li>{TranslateString(999, 'Get RAIN-WONE LP tokens by adding RAIN and WONE liquidity')}</li>
          </List>
          <Flex mb="16px">
            <LinkExternal href="https://viper.exchange/#/swap?outputCurrency=0xd009b07b4a65cc769379875edc279961d710362d" mr="16px">
              {TranslateString(999, 'Buy RAIN')}
            </LinkExternal>
            <LinkExternal href="https://viper.exchange/#/add/0xd009b07B4a65CC769379875Edc279961D710362d/ONE">
              {TranslateString(999, 'Get VENOM-LP tokens')}
            </LinkExternal>
          </Flex>
          <Heading mb="16px">{TranslateString(600, 'During Sale')}:</Heading>
          <List>
            <li>{TranslateString(999, 'While the sale is live, commit your VENOM-LP tokens to buy the IFO tokens')}</li>
          </List>
          <Heading mb="16px">{TranslateString(604, 'After Sale')}:</Heading>
          <List>
            <li>{TranslateString(606, 'Claim the tokens you bought, along with any unspent funds.')}</li>
            <li>{TranslateString(608, 'Done!')}</li>
          </List>
          <Text as="div" pt="16px">
            <Button
              as="a"
              variant="secondary"
              href="https://rainfinance.gitbook.io/"
            >
              {TranslateString(610, 'Read more')}
            </Button>
          </Text>
        </div>
        <div>
          <div>
            <Title as="h2">{TranslateString(512, 'Want to launch your own IFO?')}</Title>
            <Text mb={3}>
              {TranslateString(
                515,
                'Launch your project with RainFinance, to bring your token directly to the most active and rapidly growing community on Harmony.',
              )}
            </Text>
            <Button
              as="a"
              href="https://discord.gg/DTdeeZ4zKk"
              external
            >
              {TranslateString(516, 'Apply to launch in our Discord')}
            </Button>
          </div>
        </div>
      </LaunchIfoCallout>
    </div>
  )
}

export default Ifo
