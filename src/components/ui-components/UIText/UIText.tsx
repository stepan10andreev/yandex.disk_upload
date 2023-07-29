import React, { FC } from 'react'

interface IText {
  As?: 'span' | 'p' | 'div';
  text: string;
}

export const UIText: FC<IText> = ({ As = 'span', text }) => {
  return (
    <As>
      {text}
    </As>
  )
}
