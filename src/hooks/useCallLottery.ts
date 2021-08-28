import { useCallback, useState, useEffect } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useLottery, useLotteryTicket } from 'hooks/useContract'
import { multiClaim, getMax, multiBuy, resetLottery } from '../utils/lotteryUtils'

export const useLotteryReset = () => {
  const { account } = useWallet()
  const lotteryContract = useLottery()

  const handleClaim = useCallback(async () => {
    try {
      const txHash = await resetLottery(lotteryContract)
      return txHash
    } catch (e) {
      return false
    }
  }, [lotteryContract])

  return { onMultiClaim: handleClaim }
}