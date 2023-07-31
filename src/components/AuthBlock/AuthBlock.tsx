import React from 'react'
import { UIText } from '../ui-components/UIText/UIText'
import { AuthYandexButton } from '../ui-components/AuthYandexButton/AuthYandexButton'
import styles from './AuthBlock.module.scss'

export const AuthBlock = () => {
  return (
    <div className={styles.wrapper}>
      <UIText text='Для загрузки файлов необходимо авторизоваться:' />
      <AuthYandexButton />
    </div>
  )
}
