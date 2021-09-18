import React from 'react'
import styled from 'styled-components'
import { BaseLayout } from '@pancakeswap-libs/uikit'
import WinningNumbers from './components/WinningNumbers'
import PastLotteryRoundViewer from './components/PastLotteryRoundViewer'
import PastDrawsHistoryCard from './components/PastDrawsHistory/PastDrawsHistoryCard'

const Cards = styled(BaseLayout)`
  align-items: center;
  margin-bottom: 32px;
`

const SecondCardColumnWrapper = styled.div<{ isAWin?: boolean }>`
  display: flex;
  flex-direction: column;
`

const BunnyImageWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  justify-content: center;
`

const PastDrawsPage: React.FC = () => {
  return (
    <Cards>
      <WinningNumbers />
    </Cards>
  )
}

export default PastDrawsPage
