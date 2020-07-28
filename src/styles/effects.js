import styled from 'styled-components'
export const FadeIn = styled.div`
 -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
  animation: fadeIn 2s;
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
}
@-moz-keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
}

@-webkit-keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
}
`
