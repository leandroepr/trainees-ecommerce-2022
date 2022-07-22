/* eslint-disable @next/next/no-img-element */
import { classNames } from 'core/helpers/class-names'
import React from 'react'

export interface ImageProps {
  className?: string
  src: string
  alt: string
}
const Image: React.FC<ImageProps> = ({ className, src, alt }) => {
  return (
    <img
      className={classNames('object-contain w-full h-full', className)}
      src={src}
      alt={alt}
    />
  )
}

export default Image
