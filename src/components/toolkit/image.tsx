/* eslint-disable @next/next/no-img-element */
import { classNames } from 'core/helpers/class-names'
import React from 'react'

export interface ImageProps {
  className?: string
  src: string
  alt: string
}
const Image: React.FC<ImageProps> = ({
  className,
  src = 'https://http2.mlstatic.com/camiseta-hering-0299-original-masculinas-gola-redonda-D_NQ_NP_685591-MLB41818645468_052020-O.jpg',
  alt,
}) => {
  return (
    <img
      className={classNames('object-contain w-full h-full', className)}
      src={src}
      alt={alt}
    />
  )
}

export default Image
