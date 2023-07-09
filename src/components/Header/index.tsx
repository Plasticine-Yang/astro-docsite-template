import type { FC } from 'react'

import DarkModeSwitch from '@/components/DarkModeSwitch'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <DarkModeSwitch />
    </header>
  )
}

export default Header
