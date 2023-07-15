import type { ReactNode } from 'react'

export interface SwitchColor {
  checked: string
  unchecked: string
}

export interface SwitchProps {
  /** 开关是否打开 */
  checked?: boolean
  /** 非受控模式下默认是否启用开关 */
  defaultChecked?: boolean
  /** 开关的图标 */
  icon?: ReactNode
  /** 自定义背景色 */
  backgroundColor?: SwitchColor
  /** 开关里包裹的圆圈的颜色 */
  wrapperColor?: SwitchColor
  /** className 透传 */
  className?: string
  /** checked 的值变化 */
  onCheckedChange?: (nextChecked: boolean) => void
}

export type UseSwitchColorProps = Pick<SwitchProps, 'backgroundColor' | 'wrapperColor' | 'checked'>
