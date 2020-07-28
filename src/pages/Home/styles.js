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
  .yellowCard {
    background-color: #FFFAD8;
  }
  .greenCard {
    background-color: #E3FFD8;
  }
  .blueCard {
    background-color: #D8F8FF;
  }
`
export const LogoImage = styled.div`
  display: flex;
  min-width: 300px;
  width: 100%;
  max-width: 500px;
  margin: 20px 0;

  transition: 0.3s transform;
  
  &:hover {
    transform: ${props => !props.isMobile && 'scale(1.1)'};
  }

  @-webkit-keyframes rotating {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  #thingsAround {
    transform-origin: center;
    -webkit-animation: rotating 180s linear infinite;
    -moz-animation: rotating 180s linear infinite;
    -ms-animation: rotating 180s linear infinite;
    -o-animation: rotating 180s linear infinite;
    animation: rotating 180s linear infinite;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export const ContentCard = styled.div`
  width: 250px;
  height: 250px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  margin: 10px;
  transition-duration: 400ms;

  &:hover {
    transform: ${props => !props.isMobile && 'translateY(-10px)'};
    transform: ${props => !props.isMobile && 'scale(1.1)'};
  }

  span {
    font-family: 'Comic Neue', cursive;
    text-decoration: none;
    text-align: center;
    font-size: 29px;
    color: #484040;
    font-weight: 600;
  }

`
