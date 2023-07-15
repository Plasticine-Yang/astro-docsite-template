import type { FC } from 'react'

import DarkModeSwitch from '@/components/DarkModeSwitch'

import Divider from '../Divider'
import SocialLink from '../SocialLink'

interface HeaderProps {
  title: string
}

const Header: FC<HeaderProps> = (props) => {
  const { title } = props

  return (
    <header className="flex justify-between px-8">
      {/* 标题 */}
      <section className="flex justify-center items-center h-16">{title}</section>

      {/* 内容 */}
      <section className="flex justify-center items-center h-16">
        <DarkModeSwitch />

        <Divider />

        <SocialLink icon="mdi:github" link="https://github.com/Plasticine-Yang/astro-docsite-template" />
      </section>
    </header>
  )
}

export default Header
