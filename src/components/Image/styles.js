import styled from 'styled-components'
import Skeleton from "react-loading-skeleton";

export const SkeletonStyled = styled(Skeleton)`
  margin: auto;
  display: flex;
  width: 100%;
  object-fit: contain;
  height: 100%;
  max-width: 600;
  max-height: 600;
`
