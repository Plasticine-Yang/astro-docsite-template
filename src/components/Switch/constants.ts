import type { SwitchColor } from './types'

/** 默认的开关背景色 */
export const DEFAULT_BACKGROUND_COLOR: SwitchColor = {
  checked: '#32d058',
  unchecked: '#393939',
}

/** 默认的开关中包裹的圆圈颜色 */
export const DEFAULT_WRAPPER_COLOR: SwitchColor = {
  checked: '#ffffff',
  unchecked: '#ffffff',
}

/** 开关开启时的 wrapper 水平位移距离 */
export const CHECKED_WRAPPER_TRANSLATE_X = '18px'
