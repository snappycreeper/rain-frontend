import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from '@pancakeswap-libs/uikit'
import Container from 'components/layout/Container'
import useI18n from 'hooks/useI18n'

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 24px;
`

const Blurb = styled(Text)`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`

const StyledHero = styled.div`
  background-image: linear-gradient(180deg, #7c12a6 0%, #9A6AFF 100%);
  padding-bottom: 40px;
  padding-top: 40px;
  margin-bottom: 32px;
`
const Hero = () => {
  const TranslateString = useI18n()

  return (
    <StyledHero>
      <Container>
        <Title>{TranslateString(500, 'IFO: Initial Farm Offerings')}</Title>
        <Blurb>{TranslateString(999, 'Overflow Method: IFO does not end at 100%. Stake more = get more rewards. The leftover funds will be returned after the sale ends.')}</Blurb>
      </Container>
    </StyledHero>
  )
}

export default Hero
