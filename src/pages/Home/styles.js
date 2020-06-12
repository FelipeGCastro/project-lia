import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 20px;
    color: #fff;
    font-size: 40px;
    font-weight: 400;
  }
  a {
    text-decoration: none;
  }
  .links {
    text-decoration: none;
    font-size: 22px;
    color: #000;
    margin-top: 20px;
    transition-duration: 200ms;
    font-weight: 400;
  }
  .links:hover {
    transform: scale(1.1)
  }
`
