import React from 'react'

export interface ImageComponentProps {
  className?: string
  src?: string
  alt?: string
  noSrcAlt?: string
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  className,
  src,
  alt = '',
  noSrcAlt = '',
  ...props
}) => {
  return (
    <React.Fragment>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={className} src={src} alt={alt} {...props} />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className={className}
          src={
            noSrcAlt ||
            'https://m.media-amazon.com/images/I/3157LdLqwVL._AC_SY395_.jpg'
          }
          alt="Erro"
          {...props}
        />
      )}
    </React.Fragment>
  )
}

export default ImageComponent
