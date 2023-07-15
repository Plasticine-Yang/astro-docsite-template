import { ReactNode, useMemo, useState, type FC } from 'react'

import { useMemoizedFn } from 'ahooks'
import clsx from 'clsx'

import styles from './switch.module.scss'

/** 开关开启时的 wrapper 水平位移距离 */
export const CHECKED_WRAPPER_TRANSLATE_X = '18px'

export interface SwitchProps {
  /** 开关是否打开 */
  checked?: boolean
  /** 非受控模式下默认是否启用开关 */
  defaultChecked?: boolean
  /** 开关的图标 */
  icon?: ReactNode
  /** className 透传 */
  className?: string
  /** checked 的值变化 */
  onCheckedChange?: (nextChecked: boolean) => void
}

const Switch: FC<SwitchProps> = (props) => {
  const { className, checked, defaultChecked, icon, onCheckedChange } = props

  const [internalChecked, setInternalChecked] = useState(checked ?? defaultChecked ?? false)

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
    <button className={clsx(styles.switch, className)} onClick={handleCheckedChange}>
      <span className={clsx('switch__wrapper', styles['switch__wrapper'])} style={{ transform: cssTransform }}>
        {icon !== undefined ? icon : null}
      </span>
    </button>
  )
}

export default Switch
