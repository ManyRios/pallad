import React from 'react'

import { BottomNavigation } from './BottomNavigation'
import { CommandMenu } from './CommandMenu'

interface AppLayoutProps {
  children: React.ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const [commandMenuOpen, setCommandMenuOpen] = React.useState(false)
  const openCommandMenu = () => setCommandMenuOpen(true)
  return (
    <div className="flex flex-col flex-1 dark:bg-slate-950 bg-white gap-4">
      <CommandMenu open={commandMenuOpen} setOpen={setCommandMenuOpen} />
      <div className="animate-in fade-in flex flex-1">{children}</div>
      <BottomNavigation openCommandMenu={openCommandMenu} />
    </div>
  )
}
