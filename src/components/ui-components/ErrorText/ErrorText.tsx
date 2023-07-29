import React, { FC } from 'react'
import styles from './ErrorText.module.scss'

interface IErrorText {
  errorText: string;
}

export const ErrorText: FC<IErrorText> = ({ errorText }) => {
  return (
    <div className={styles.error}>{errorText}</div>
  )
}
