import React, { useState } from 'react'
import {
  DEFAULT_IMAGE
} from 'src/constants'

import {SkeletonStyled} from './styles'

function Image({src, alt}) {
  const [loaded, setLoaded] = useState(false);

    return (
    <>
    {!loaded ? <SkeletonStyled /> : null}
    <img
      style={loaded ? {} : {display: 'none'}}
      src={src || DEFAULT_IMAGE}
      alt={alt || 'draw'}
      onLoad={() => setLoaded(true)}
    />
  </>
  )
}

export default Image