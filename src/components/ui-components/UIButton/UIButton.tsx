import React, { FC } from 'react'
import styles from './UIButton.module.scss'

interface IUIButton {
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  name?: string;
  onClick?: () => void;
  icon?: React.JSX.Element;
  disabled?: boolean;
}

export const UIButton: FC<IUIButton> = ({ text, type, name, onClick, icon, disabled }) => {
  return (
    <button
      className={styles.button}
      type={type}
      name={name}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {icon}
    </button>
  )
}
