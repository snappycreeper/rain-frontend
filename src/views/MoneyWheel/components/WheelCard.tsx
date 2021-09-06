import React from 'react'
import { Card, CardBody, CardFooter, PancakeRoundIcon } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { Wheel } from 'react-custom-roulette'

const wheelOptions = [
  { option: '50' },
  { option: '1' },
  { option: '3' },
  { option: '1' },
  { option: '5' },

  { option: '1' },
  { option: '3' },
  { option: '1' },
  { option: '10' },
  { option: '3' },

  { option: '1' },
  { option: '5' },
  { option: '1' },
  { option: '20' },
  { option: '1' },

  { option: '3' },
  { option: '1' },
  { option: '3' },
  { option: '1' },
  { option: '5' },

  { option: '1' },
  { option: '10' },
  { option: '1' },
  { option: '3' },
  { option: '5' },

  { option: '1' },
  { option: '0' },
  { option: '1' },
  { option: '3' },
  { option: '1' },

  { option: '5' },
  { option: '1' },
  { option: '3' },
  { option: '1' },
  { option: '10' },

  { option: '5' },
  { option: '1' },
  { option: '3' },
  { option: '1' },
  { option: '20' },

  { option: '1' },
  { option: '3' },
  { option: '1' },
  { option: '5' },
  { option: '1' },

  { option: '3' },
  { option: '1' },
  { option: '5' },
  { option: '1' },
  { option: '10' },
  { option: '3' },
  { option: '1' },
]

const CardHeading = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  display: flex;
`
const IconWrapper = styled.div`
  margin-right: 16px;
  svg {
    width: 48px;
    height: 48px;
  }
`

const ExpandingWrapper = styled.div<{ showFooter: boolean }>`
  height: ${(props) => (props.showFooter ? '100%' : '0px')};
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 100%;
  }
`
interface WheelCardProps {
  prizeNumber: number
  mustSpin: boolean
  onStopping: () => void
}

const WheelCard: React.FC<WheelCardProps> = ({prizeNumber, mustSpin, onStopping}) => {
    const onPerpendicularText = true  

    return (
    <Card>
      <CardBody>
        <CardHeading>
          <Left>
            <IconWrapper>
              <PancakeRoundIcon />
            </IconWrapper>
          </Left>
        </CardHeading>
      </CardBody>
      <ExpandingWrapper showFooter={false}>
        <CardFooter style={{padding: 0}}>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={wheelOptions}
          backgroundColors={['#3e3e3e', '#7c12a6']}
          textColors={['#ffffff']}
          innerRadius={25}
          radiusLineWidth={1}
          perpendicularText={onPerpendicularText}
          textDistance={80}
          onStopSpinning={onStopping}/>
        </CardFooter>
      </ExpandingWrapper>
    </Card>
    )
}

export default WheelCard 