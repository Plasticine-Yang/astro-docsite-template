import type { FC } from 'react'

import styles from './divider.module.scss'

interface DividerProps {
  height?: string
  gap?: string
}

const Divider: FC<DividerProps> = (props) => {
  const { height = '22px', gap = '16px' } = props

  return (
    <div
      className={styles.divider}
      style={{
        width: '1px',
        height,
        marginLeft: gap,
        marginRight: gap,
      }}
    ></div>
  )
}

export default Divider
