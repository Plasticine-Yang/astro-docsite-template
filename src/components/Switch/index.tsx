import { useMemo, useState, type FC } from 'react'

import { useMemoizedFn } from 'ahooks'
import clsx from 'clsx'

import { CHECKED_WRAPPER_TRANSLATE_X } from './constants'
import { useSwitchColor } from './hooks'
import styles from './styles.module.scss'
import type { SwitchProps } from './types'

const Switch: FC<SwitchProps> = (props) => {
  const { className, checked, defaultChecked, backgroundColor, wrapperColor, icon, onCheckedChange } = props

  const [internalChecked, setInternalChecked] = useState(checked ?? defaultChecked ?? false)
  const { resolvedBackgroundColor, resolvedWrapperColor } = useSwitchColor({
    checked: internalChecked,
    backgroundColor,
    wrapperColor,
  })

  const handleCheckedChange = useMemoizedFn(() => {
    if (checked !== undefined) {
      // 受控方式更新
      onCheckedChange?.(!checked)
      setInternalChecked(!checked)
    } else {
      // 非受控方式更新
      setInternalChecked((prevInternalChecked) => {
        onCheckedChange?.(!prevInternalChecked)

        return !prevInternalChecked
      })
    }
  })

  /** 用于 checked 时对 wrapper 进行水平位移 */
  const cssTransform = useMemo(() => {
    if (internalChecked) {
      return `translateX(${CHECKED_WRAPPER_TRANSLATE_X})`
    } else {
      return 'translateX(0)'
    }
  }, [internalChecked])

  return (
    <button
      className={clsx(styles.switch, className)}
      onClick={handleCheckedChange}
      style={{ backgroundColor: resolvedBackgroundColor }}
    >
      <span
        className={styles['switch__wrapper']}
        style={{ backgroundColor: resolvedWrapperColor, transform: cssTransform }}
      >
        {icon !== undefined ? icon : null}
      </span>
    </button>
  )
}

export default Switch
