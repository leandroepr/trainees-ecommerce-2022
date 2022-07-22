import React from 'react'

export type TextTag = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export interface TextProps {
  as?: TextTag
  children?: React.ReactNode
  className?: string
}
const Text: React.FC<TextProps> = ({ as = 'span', children, ...props }) => {
  return React.createElement(as, props, children)
}

export default Text
