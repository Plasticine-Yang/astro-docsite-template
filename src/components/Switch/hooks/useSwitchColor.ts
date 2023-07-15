import { useMemo } from 'react'

import type { UseSwitchColorProps } from '../types'
import { DEFAULT_BACKGROUND_COLOR, DEFAULT_WRAPPER_COLOR } from '../constants'

/** 管理开关开启和关闭下的相关颜色 */
export function useSwitchColor(props: UseSwitchColorProps) {
  const { backgroundColor, borderColor, wrapperColor, checked } = props

  /** 背景色 */
  const resolvedBackgroundColor = useMemo<string>(() => {
    const checkedBackgroundColor = backgroundColor?.checked ?? DEFAULT_BACKGROUND_COLOR.checked
    const uncheckedBackgroundColor = backgroundColor?.unchecked ?? DEFAULT_BACKGROUND_COLOR.unchecked

    return checked ? checkedBackgroundColor : uncheckedBackgroundColor
  }, [checked, backgroundColor])

  /** 包裹的圆圈颜色 */
  const resolvedWrapperColor = useMemo<string>(() => {
    const checkedWrapperColor = wrapperColor?.checked ?? DEFAULT_WRAPPER_COLOR.checked
    const uncheckedWrapperColor = wrapperColor?.unchecked ?? DEFAULT_WRAPPER_COLOR.unchecked

    return checked ? checkedWrapperColor : uncheckedWrapperColor
  }, [checked, wrapperColor])

  return {
    resolvedBackgroundColor,
    resolvedWrapperColor,
  }
}
