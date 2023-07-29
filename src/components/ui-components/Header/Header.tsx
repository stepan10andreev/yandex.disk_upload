import React, { FC, PropsWithChildren } from 'react'
import styles from './Header.module.scss'

export const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className={styles.header}>
      {children}
    </header>
  )
}
