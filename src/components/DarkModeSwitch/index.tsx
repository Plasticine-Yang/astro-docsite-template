import { useMemo, type FC } from 'react'
import { Icon } from '@iconify/react'

import { useDarkMode } from '@/hooks'

const DarkModeSwitch: FC = () => {
  const [isDarkMode, { toggle }] = useDarkMode()

  const borderColor = useMemo(() => {
    return isDarkMode ? 'rgba(82, 82, 89, .68)' : 'rgba(60, 60, 67, .29)'
  }, [isDarkMode])

  return (
    <button
      className="flex items-center justify-between gap-1 w-10 h-6 p-1 border-[1px] rounded-full"
      style={{ borderColor }}
      onClick={toggle}
    >
      <Icon icon="ph:sun" className="text-black" />
      <Icon icon="ph:moon" className="text-white" />
    </button>
  )
}

export default DarkModeSwitch
