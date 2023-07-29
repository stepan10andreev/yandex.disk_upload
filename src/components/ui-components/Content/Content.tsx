import React, { FC, PropsWithChildren } from 'react'
import styles from './Content.module.scss'

export const Content: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={styles.main}>
      { children }
    </main>
  )
}
