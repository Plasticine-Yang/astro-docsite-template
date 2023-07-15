import { Icon } from '@iconify/react'
import type { FC } from 'react'

interface SocialLinkProps {
  icon: string
  link: string
}

const SocialLink: FC<SocialLinkProps> = (props) => {
  const { icon, link } = props

  return (
    <a href={link} target="_blank">
      <Icon icon={icon} className='h-6 w-6' />
    </a>
  )
}

export default SocialLink
