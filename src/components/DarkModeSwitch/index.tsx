import { useMemo, type FC } from 'react'

import { Icon } from '@iconify/react'
import clsx from 'clsx'

import { useDarkMode } from '@/hooks'

import Switch from '../Switch'
import styles from './dark-mode-switch.module.scss'

const DarkModeSwitch: FC = () => {
  const [isDarkMode, { toggle }] = useDarkMode()

  const icon = useMemo(() => {
    return isDarkMode ? (
      <Icon icon="ph:moon" className="text-white text-xs" />
    ) : (
      <Icon icon="ph:sun" className="text-black text-xs" />
    )
  }, [isDarkMode])

  return (
    <Switch
      className={clsx('dark-mode-switch', styles['dark-mode-switch'], {
        'dark-mode-switch--dark': isDarkMode,
        [styles['dark-mode-switch--dark']]: isDarkMode,
      })}
      checked={isDarkMode}
      icon={icon}
      onCheckedChange={toggle}
    />
  )
}

export default DarkModeSwitch
