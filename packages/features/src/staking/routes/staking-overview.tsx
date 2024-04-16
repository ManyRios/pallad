import { useNavigate } from 'react-router-dom'

import { useAccount } from '@/common/hooks/use-account'
import { useBlockchainSummary } from '@/common/hooks/use-blockchain-summary'

import { StakingOverviewView } from '../views/staking-overview'

export const StakingOverviewRoute = () => {
  const blockchainSummary = useBlockchainSummary()
  const navigate = useNavigate()
  const account = useAccount()
  return (
    <StakingOverviewView
      account={account}
      blockchainSummary={blockchainSummary}
      onChangePool={() => navigate('/staking/delegate')}
      stakeDelegated={account.stakeDelegated}
    />
  )
}