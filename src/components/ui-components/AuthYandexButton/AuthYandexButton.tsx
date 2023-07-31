import React from 'react'
import styles from './AuthYandexButton.module.scss'
import { YandexIcon } from '../Icons/YandexIcon'
import { UIText } from '../UIText/UIText'

export const AuthYandexButton = () => {
  return (
    <a href="https://oauth.yandex.ru/authorize?response_type=code&client_id=a78e495b76e9487f8929e2bf226ddb44" className={styles.button}>
      <YandexIcon />
      <UIText text='Войти с Яндекс ID'/>
    </a>
  )
}
