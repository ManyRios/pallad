import type { StoryDefault } from "@ladle/react"

import { TransactionSuccessView } from "./transaction-success"

export const View = () => (
  <TransactionSuccessView
    hash="ASDF1234ASDF1234ASDF1234ASDF1234ASDF1234ASDF1234ASDF1234"
    onGoToTransactions={() => console.log("txs")}
  />
)

export default {
  title: "Send / Transaction Success",
} satisfies StoryDefault
