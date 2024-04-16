import { StoryDefault } from '@ladle/react'

import { DelegateView } from './delegate'

export const View = () => (
  <DelegateView onGoBack={() => console.log('go back')} />
)

export default {
  title: 'Dashboard / Staking / Delegate'
} satisfies StoryDefault