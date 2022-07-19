import { Column } from 'components/toolkit'
import { classNames } from 'helpers/class-names'
import React from 'react'

export interface ProductImageProps
  extends React.HTMLAttributes<HTMLImageElement> {
  className?: string
  src?: string
  alt?: string
}

const ProductImage: React.FC<ProductImageProps> = ({
  className,
  src = 'https://m.media-amazon.com/images/I/3157LdLqwVL._AC_SY395_.jpg',
  alt = '',
  ...props
}) => {
  return (
    <Column className="justify-center overflow-hidden">
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className={classNames('object-contain aspect-square', className)}
          src={src}
          alt={alt}
          {...props}
        />
      }
    </Column>
  )
}

export default ProductImage
